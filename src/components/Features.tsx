
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Play, User, BarChart2, Calendar } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Play className="h-10 w-10 text-cricket-green" />,
      title: "Match Management",
      description: "Create and manage cricket matches with easy player selection and scoring options for both tennis ball and leather ball formats.",
    },
    {
      icon: <Trophy className="h-10 w-10 text-cricket-red" />,
      title: "Tournament Organization",
      description: "Organize tournaments with automatic fixture generation, standings table, and comprehensive tournament statistics.",
    },
    {
      icon: <BarChart2 className="h-10 w-10 text-cricket-navy" />,
      title: "Performance Analytics",
      description: "Track detailed player statistics including runs, wickets, batting averages, strike rates, and more.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-cricket-tan" />,
      title: "Practice Nets Booking",
      description: "Book practice net sessions with integrated payment processing and availability management.",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-cricket-navy mb-4">Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage cricket activities efficiently
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-t-4 border-t-cricket-green hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-2">{feature.icon}</div>
                <CardTitle className="text-xl font-bold text-cricket-navy">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
