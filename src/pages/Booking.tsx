
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
import { Calendar } from "lucide-react";

const Booking = () => {
  const [date, setDate] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const hourlyRate = 500; // ₹500 per hour

  const handleTimeSlotChange = (value: string) => {
    // Calculate the total amount based on the time slot selected
    // Each slot is 1 hour
    setTotalAmount(hourlyRate);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-cricket-navy mb-8 text-center">
            Book Practice Nets
          </h1>
          
          <Card>
            <CardHeader>
              <CardTitle>Net Practice Booking</CardTitle>
              <CardDescription>
                Book a one-hour slot for net practice session
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="booking-date">Date</Label>
                <Input 
                  id="booking-date" 
                  type="date" 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="time-slot">Available Time Slots</Label>
                <Select onValueChange={handleTimeSlotChange}>
                  <SelectTrigger id="time-slot">
                    <SelectValue placeholder="Select time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="06:00">6:00 AM - 7:00 AM</SelectItem>
                    <SelectItem value="07:00">7:00 AM - 8:00 AM</SelectItem>
                    <SelectItem value="08:00">8:00 AM - 9:00 AM</SelectItem>
                    <SelectItem value="09:00">9:00 AM - 10:00 AM</SelectItem>
                    <SelectItem value="16:00">4:00 PM - 5:00 PM</SelectItem>
                    <SelectItem value="17:00">5:00 PM - 6:00 PM</SelectItem>
                    <SelectItem value="18:00">6:00 PM - 7:00 PM</SelectItem>
                    <SelectItem value="19:00">7:00 PM - 8:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="net-type">Net Type</Label>
                <Select>
                  <SelectTrigger id="net-type">
                    <SelectValue placeholder="Select net type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard Net</SelectItem>
                    <SelectItem value="bowling-machine">Bowling Machine Net</SelectItem>
                    <SelectItem value="spin">Spin Practice Net</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="players">Number of Players</Label>
                <Select>
                  <SelectTrigger id="players">
                    <SelectValue placeholder="Select number of players" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Player</SelectItem>
                    <SelectItem value="2">2 Players</SelectItem>
                    <SelectItem value="3">3 Players</SelectItem>
                    <SelectItem value="4">4+ Players</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-gray-50 p-4 rounded-md border">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Hourly Rate:</span>
                  <span>₹{hourlyRate}</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-medium">Duration:</span>
                  <span>1 Hour</span>
                </div>
                <div className="flex justify-between items-center mt-2 text-lg font-semibold">
                  <span>Total Amount:</span>
                  <span>₹{totalAmount}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-cricket-green hover:bg-cricket-green/90 flex items-center gap-2"
                disabled={!date || totalAmount === 0}
              >
                <Calendar className="h-4 w-4" />
                Book and Pay
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Booking;
