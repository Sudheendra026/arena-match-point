
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Play, Plus, X } from "lucide-react";

const Matches = () => {
  const [players, setPlayers] = useState<string[]>([]);
  const [playerInput, setPlayerInput] = useState("");
  const [ballType, setBallType] = useState("tennis");
  const [bowlingStyle, setBowlingStyle] = useState("underarm");

  const addPlayer = () => {
    if (playerInput.trim() && !players.includes(playerInput.trim())) {
      setPlayers([...players, playerInput.trim()]);
      setPlayerInput("");
    }
  };

  const removePlayer = (playerToRemove: string) => {
    setPlayers(players.filter((player) => player !== playerToRemove));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-cricket-navy mb-8 text-center">Start a Match</h1>
          
          <Card>
            <CardHeader>
              <CardTitle>New Match Setup</CardTitle>
              <CardDescription>
                Create a new cricket match by adding players and selecting match settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="match-name">Match Name</Label>
                <Input id="match-name" placeholder="Enter a name for this match" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="venue">Venue</Label>
                <Input id="venue" placeholder="Enter match venue" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="ball-type">Ball Type</Label>
                  <Select value={ballType} onValueChange={setBallType}>
                    <SelectTrigger id="ball-type">
                      <SelectValue placeholder="Select ball type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tennis">Tennis Ball</SelectItem>
                      <SelectItem value="leather">Leather Ball</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {ballType === "tennis" && (
                  <div className="space-y-2">
                    <Label htmlFor="bowling-style">Bowling Style</Label>
                    <Select value={bowlingStyle} onValueChange={setBowlingStyle}>
                      <SelectTrigger id="bowling-style">
                        <SelectValue placeholder="Select bowling style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="underarm">Underarm</SelectItem>
                        <SelectItem value="overarm">Overarm</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <Label>Add Players by Phone Number</Label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter player phone number"
                    value={playerInput}
                    onChange={(e) => setPlayerInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") addPlayer();
                    }}
                  />
                  <Button
                    type="button"
                    onClick={addPlayer}
                    variant="secondary"
                    size="icon"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>

                {players.length > 0 && (
                  <div className="border rounded-md p-3 bg-gray-50">
                    <p className="text-sm font-medium mb-2">Added Players: {players.length}</p>
                    <div className="flex flex-wrap gap-2">
                      {players.map((player, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-1 bg-white border rounded-full px-3 py-1 text-sm"
                        >
                          <span>{player}</span>
                          <button
                            onClick={() => removePlayer(player)}
                            className="text-gray-500 hover:text-cricket-red"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-cricket-green hover:bg-cricket-green/90 flex items-center gap-2">
                <Play className="h-4 w-4" />
                Start Match
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Matches;
