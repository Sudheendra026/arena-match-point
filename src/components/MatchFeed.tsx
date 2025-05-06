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
import { Calendar, Clock, Trophy, ChevronDown, ChevronUp, DollarSign, UserRoundPlus } from "lucide-react";
import { format } from "date-fns";

// Define the Match type
interface Match {
  id: string;
  title: string;
  description: string;
  date: Date;
  time: string;
  location: string;
}

// Define the Tournament type
interface Tournament {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  imageUrl: string;
  entryFee: number; // Added entry fee property
  matches: Match[];
}

// Sample tournament data
const sampleTournaments: Tournament[] = [
  {
    id: "1",
    title: "Summer Cricket League 2025",
    description: "Annual summer tournament featuring top local teams",
    startDate: new Date(2025, 5, 15), // June 15, 2025
    endDate: new Date(2025, 6, 30), // July 30, 2025
    location: "Central Cricket Ground",
    imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=600",
    entryFee: 25, // Added entry fee in dollars
    matches: [
      {
        id: "1-1",
        title: "West Side Lions vs East End Tigers",
        description: "Quarterfinal match",
        date: new Date(2025, 5, 15), // June 15, 2025
        time: "14:00",
        location: "Central Cricket Ground - Pitch 1",
      },
      {
        id: "1-2",
        title: "Northern Knights vs Southern Strikers",
        description: "Quarterfinal match",
        date: new Date(2025, 5, 20), // June 20, 2025
        time: "16:30",
        location: "Central Cricket Ground - Pitch 2",
      },
      {
        id: "1-3",
        title: "Semifinal 1",
        description: "First semifinal match",
        date: new Date(2025, 6, 1), // July 1, 2025
        time: "15:00",
        location: "Central Cricket Ground - Main Pitch",
      }
    ]
  },
  {
    id: "2",
    title: "Charity Cricket Cup",
    description: "All proceeds go to local youth cricket development",
    startDate: new Date(2025, 6, 5), // July 5, 2025
    endDate: new Date(2025, 6, 7), // July 7, 2025
    location: "Memorial Park",
    imageUrl: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&q=80&w=600",
    entryFee: 15, // Added entry fee in dollars
    matches: [
      {
        id: "2-1",
        title: "Opening Match: City All-Stars vs County Champions",
        description: "Opening ceremony match",
        date: new Date(2025, 6, 5), // July 5, 2025
        time: "12:00",
        location: "Memorial Park - Main Ground",
      },
      {
        id: "2-2",
        title: "Celebrity Exhibition Match",
        description: "Special match featuring local celebrities",
        date: new Date(2025, 6, 6), // July 6, 2025
        time: "14:00",
        location: "Memorial Park - Main Ground",
      }
    ]
  },
  {
    id: "3",
    title: "Regional T20 Championship",
    description: "Fast-paced T20 tournament with exciting matches",
    startDate: new Date(2025, 7, 10), // August 10, 2025
    endDate: new Date(2025, 7, 25), // August 25, 2025
    location: "Riverside Stadium",
    imageUrl: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80&w=600",
    entryFee: 30, // Added entry fee in dollars
    matches: [
      {
        id: "3-1",
        title: "Group A: Team Red vs Team Blue",
        description: "Opening group stage match",
        date: new Date(2025, 7, 10), // August 10, 2025
        time: "18:00",
        location: "Riverside Stadium",
      },
      {
        id: "3-2",
        title: "Group B: Team Green vs Team Yellow",
        description: "Group stage match",
        date: new Date(2025, 7, 12), // August 12, 2025
        time: "18:00",
        location: "Riverside Stadium",
      }
    ]
  }
];

const MatchFeed = () => {
  const [expandedTournament, setExpandedTournament] = useState<string | null>(null);
  
  // Only show future tournaments
  const currentDate = new Date();
  const futureTournaments = sampleTournaments.filter(
    tournament => tournament.endDate > currentDate
  );
  
  const toggleTournament = (tournamentId: string) => {
    if (expandedTournament === tournamentId) {
      setExpandedTournament(null);
    } else {
      setExpandedTournament(tournamentId);
    }
  };
  
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-cricket-navy mb-8 text-center">
          Upcoming Tournaments
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {futureTournaments.map((tournament) => (
            <Card key={tournament.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={tournament.imageUrl} 
                  alt={tournament.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-cricket-green" />
                  <CardTitle className="text-xl text-cricket-navy">{tournament.title}</CardTitle>
                </div>
                <CardDescription>{tournament.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-cricket-green" />
                    <span>{format(tournament.startDate, "MMM d")} - {format(tournament.endDate, "MMM d, yyyy")}</span>
                  </div>
                  <div>
                    <span className="text-gray-700 font-medium">Location: </span>
                    <span>{tournament.location}</span>
                  </div>
                  <div>
                    <span className="text-gray-700 font-medium">Matches: </span>
                    <span>{tournament.matches.length}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-cricket-red" />
                    <span className="text-gray-700 font-medium">Entry Fee: </span>
                    <span className="text-cricket-red font-semibold">${tournament.entryFee}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col w-full gap-3">
                <Button 
                  className="w-full bg-cricket-green hover:bg-cricket-green/90 text-white"
                  onClick={() => {}}
                >
                  <UserRoundPlus className="mr-2 h-4 w-4" />
                  Join Tournament
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full text-cricket-navy"
                  onClick={() => toggleTournament(tournament.id)}
                >
                  {expandedTournament === tournament.id ? 'Hide Matches' : 'Show Matches'}
                  {expandedTournament === tournament.id ? 
                    <ChevronUp className="ml-2 h-4 w-4" /> : 
                    <ChevronDown className="ml-2 h-4 w-4" />
                  }
                </Button>
                
                {expandedTournament === tournament.id && (
                  <div className="w-full space-y-3 mt-2 border-t pt-3">
                    <h4 className="font-medium text-cricket-navy">Tournament Matches:</h4>
                    {tournament.matches.map((match) => (
                      <div key={match.id} className="p-3 bg-gray-100 rounded-md">
                        <h5 className="font-medium">{match.title}</h5>
                        <p className="text-sm text-gray-600">{match.description}</p>
                        <div className="mt-2 flex items-center gap-2 text-sm">
                          <Calendar className="h-3 w-3 text-cricket-green" />
                          <span>{format(match.date, "MMM d, yyyy")}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-3 w-3 text-cricket-red" />
                          <span>{match.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchFeed;
