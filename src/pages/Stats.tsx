
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BarChart2, User } from "lucide-react";

const Stats = () => {
  // Dummy data for demonstration
  const battingStats = [
    { id: 1, name: "Rohit Sharma", matches: 12, runs: 546, average: 45.5, strikeRate: 142.3, highestScore: 98 },
    { id: 2, name: "Virat Kohli", matches: 10, runs: 423, average: 42.3, strikeRate: 138.6, highestScore: 87 },
    { id: 3, name: "KL Rahul", matches: 8, runs: 356, average: 44.5, strikeRate: 132.8, highestScore: 76 },
    { id: 4, name: "Suryakumar Yadav", matches: 12, runs: 498, average: 41.5, strikeRate: 156.7, highestScore: 103 },
    { id: 5, name: "Shikhar Dhawan", matches: 9, runs: 387, average: 43.0, strikeRate: 128.5, highestScore: 92 },
  ];

  const bowlingStats = [
    { id: 1, name: "Jasprit Bumrah", matches: 12, wickets: 18, economy: 7.2, average: 21.4, bestFigures: "4/23" },
    { id: 2, name: "Mohammed Shami", matches: 10, wickets: 15, economy: 7.8, average: 24.6, bestFigures: "3/19" },
    { id: 3, name: "Bhuvneshwar Kumar", matches: 8, wickets: 12, economy: 7.5, average: 25.2, bestFigures: "3/28" },
    { id: 4, name: "Yuzvendra Chahal", matches: 12, wickets: 14, economy: 8.1, average: 26.7, bestFigures: "3/22" },
    { id: 5, name: "Ravindra Jadeja", matches: 9, wickets: 10, economy: 7.3, average: 28.4, bestFigures: "2/18" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <BarChart2 className="h-8 w-8 text-cricket-navy" />
            <h1 className="text-3xl font-bold text-cricket-navy text-center">
              Performance Statistics
            </h1>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Player Statistics</CardTitle>
              <CardDescription>
                View comprehensive performance data for all players
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="batting" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="batting">Batting Stats</TabsTrigger>
                  <TabsTrigger value="bowling">Bowling Stats</TabsTrigger>
                </TabsList>
                <TabsContent value="batting">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-cricket-navy text-white">
                          <th className="px-4 py-3 text-left">Player</th>
                          <th className="px-4 py-3 text-center">Matches</th>
                          <th className="px-4 py-3 text-center">Runs</th>
                          <th className="px-4 py-3 text-center">Average</th>
                          <th className="px-4 py-3 text-center">Strike Rate</th>
                          <th className="px-4 py-3 text-center">Highest Score</th>
                        </tr>
                      </thead>
                      <tbody>
                        {battingStats.map((player) => (
                          <tr key={player.id} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-2">
                                <User className="h-4 w-4 text-cricket-navy" />
                                {player.name}
                              </div>
                            </td>
                            <td className="px-4 py-3 text-center">{player.matches}</td>
                            <td className="px-4 py-3 text-center font-medium text-cricket-green">{player.runs}</td>
                            <td className="px-4 py-3 text-center">{player.average}</td>
                            <td className="px-4 py-3 text-center">{player.strikeRate}</td>
                            <td className="px-4 py-3 text-center">{player.highestScore}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
                <TabsContent value="bowling">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-cricket-navy text-white">
                          <th className="px-4 py-3 text-left">Player</th>
                          <th className="px-4 py-3 text-center">Matches</th>
                          <th className="px-4 py-3 text-center">Wickets</th>
                          <th className="px-4 py-3 text-center">Economy</th>
                          <th className="px-4 py-3 text-center">Average</th>
                          <th className="px-4 py-3 text-center">Best Figures</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bowlingStats.map((player) => (
                          <tr key={player.id} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-2">
                                <User className="h-4 w-4 text-cricket-navy" />
                                {player.name}
                              </div>
                            </td>
                            <td className="px-4 py-3 text-center">{player.matches}</td>
                            <td className="px-4 py-3 text-center font-medium text-cricket-red">{player.wickets}</td>
                            <td className="px-4 py-3 text-center">{player.economy}</td>
                            <td className="px-4 py-3 text-center">{player.average}</td>
                            <td className="px-4 py-3 text-center">{player.bestFigures}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Stats;
