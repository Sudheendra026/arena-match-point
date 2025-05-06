
import React from "react";
import { Button } from "@/components/ui/button";
import { Trophy, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-cricket-navy to-cricket-navy/90 text-white py-24">
      {/* Cricket pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMzAgMzBtLTI4IDBhMjggMjggMCAxIDAgNTYgMCAyOCAyOCAwIDEgMC01NiAweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')] opacity-10"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Arena Match Point
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            The ultimate cricket management platform for organizing matches, tracking performance, and booking practice sessions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/matches">
              <Button size="lg" className="bg-cricket-green hover:bg-cricket-green/90 text-white flex items-center gap-2">
                <Play className="h-5 w-5" />
                Start Match
              </Button>
            </Link>
            <Link to="/tournaments">
              <Button size="lg" className="bg-cricket-red hover:bg-cricket-red/90 text-white flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                Start Tournament
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
