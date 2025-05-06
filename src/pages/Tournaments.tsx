
import React from "react";
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
import { Trophy } from "lucide-react";

const Tournaments = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-cricket-navy mb-8 text-center">
            Start a Tournament
          </h1>
          
          <Card>
            <CardHeader>
              <CardTitle>New Tournament Setup</CardTitle>
              <CardDescription>
                Create a new cricket tournament by configuring the details below
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="tournament-name">Tournament Name</Label>
                <Input id="tournament-name" placeholder="Enter tournament name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="venue">Venue</Label>
                <Input id="venue" placeholder="Enter tournament venue" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start-date">Start Date</Label>
                  <Input id="start-date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end-date">End Date</Label>
                  <Input id="end-date" type="date" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="teams">Number of Teams</Label>
                  <Select>
                    <SelectTrigger id="teams">
                      <SelectValue placeholder="Select number of teams" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="4">4 Teams</SelectItem>
                      <SelectItem value="8">8 Teams</SelectItem>
                      <SelectItem value="16">16 Teams</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="format">Tournament Format</Label>
                  <Select>
                    <SelectTrigger id="format">
                      <SelectValue placeholder="Select format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="knockout">Knockout</SelectItem>
                      <SelectItem value="league">League</SelectItem>
                      <SelectItem value="group">Group + Knockout</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Tournament Description</Label>
                <Input id="description" placeholder="Enter tournament description" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-cricket-red hover:bg-cricket-red/90 flex items-center gap-2">
                <Trophy className="h-4 w-4" />
                Create Tournament
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tournaments;
