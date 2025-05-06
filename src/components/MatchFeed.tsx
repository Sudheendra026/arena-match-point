
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { format } from "date-fns";

// Define the Match type
interface Match {
  id: string;
  title: string;
  description: string;
  date: Date;
  time: string;
  location: string;
  imageUrl: string;
}

// Sample match data
const sampleMatches: Match[] = [
  {
    id: "1",
    title: "West Side Lions vs East End Tigers",
    description: "Quarterfinal match of the Summer League",
    date: new Date(2025, 5, 15), // June 15, 2025
    time: "14:00",
    location: "Central Cricket Ground",
    imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "2",
    title: "Northern Knights vs Southern Strikers",
    description: "Friendly match with our neighboring club",
    date: new Date(2025, 5, 20), // June 20, 2025
    time: "16:30",
    location: "Riverside Stadium",
    imageUrl: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "3",
    title: "Annual Charity Cup",
    description: "All proceeds go to local youth cricket development",
    date: new Date(2025, 6, 5), // July 5, 2025
    time: "12:00",
    location: "Memorial Park",
    imageUrl: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&q=80&w=600",
  },
];

const MatchFeed = () => {
  // Only show future matches
  const currentDate = new Date();
  const futureMatches = sampleMatches.filter(match => match.date > currentDate);
  
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-cricket-navy mb-8 text-center">
          Upcoming Matches
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {futureMatches.map((match) => (
            <Card key={match.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={match.imageUrl} 
                  alt={match.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-cricket-navy">{match.title}</CardTitle>
                <CardDescription>{match.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-cricket-green" />
                    <span>{format(match.date, "EEEE, MMMM do, yyyy")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-cricket-red" />
                    <span>{match.time}</span>
                  </div>
                  <div>
                    <span className="text-gray-700 font-medium">Location: </span>
                    <span>{match.location}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-cricket-tan hover:bg-cricket-tan/90 text-white">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchFeed;
