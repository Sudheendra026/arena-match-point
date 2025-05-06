
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Play,
  User,
  BarChart2,
  Calendar,
  Menu,
  X
} from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-cricket-navy text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Trophy className="h-8 w-8 text-cricket-tan" />
            <span className="font-bold text-xl">Arena Match Point</span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              onClick={toggleMenu}
              variant="ghost"
              size="icon"
              className="text-white hover:bg-cricket-navy/80"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/matches"
              className="px-3 py-2 rounded hover:bg-cricket-navy/80 flex items-center"
            >
              <Play className="mr-1 h-4 w-4" />
              <span>Matches</span>
            </Link>
            <Link
              to="/tournaments"
              className="px-3 py-2 rounded hover:bg-cricket-navy/80 flex items-center"
            >
              <Trophy className="mr-1 h-4 w-4" />
              <span>Tournaments</span>
            </Link>
            <Link
              to="/stats"
              className="px-3 py-2 rounded hover:bg-cricket-navy/80 flex items-center"
            >
              <BarChart2 className="mr-1 h-4 w-4" />
              <span>Stats</span>
            </Link>
            <Link
              to="/booking"
              className="px-3 py-2 rounded hover:bg-cricket-navy/80 flex items-center"
            >
              <Calendar className="mr-1 h-4 w-4" />
              <span>Booking</span>
            </Link>
            <Link to="/login">
              <Button className="bg-cricket-green hover:bg-cricket-green/90 text-white">
                Login
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 pt-2 pb-3 space-y-1">
            <Link
              to="/matches"
              className="block px-3 py-2 rounded hover:bg-cricket-navy/80 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Play className="mr-2 h-4 w-4" />
              <span>Matches</span>
            </Link>
            <Link
              to="/tournaments"
              className="block px-3 py-2 rounded hover:bg-cricket-navy/80 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Trophy className="mr-2 h-4 w-4" />
              <span>Tournaments</span>
            </Link>
            <Link
              to="/stats"
              className="block px-3 py-2 rounded hover:bg-cricket-navy/80 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <BarChart2 className="mr-2 h-4 w-4" />
              <span>Stats</span>
            </Link>
            <Link
              to="/booking"
              className="block px-3 py-2 rounded hover:bg-cricket-navy/80 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Calendar className="mr-2 h-4 w-4" />
              <span>Booking</span>
            </Link>
            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="w-full mt-2 bg-cricket-green hover:bg-cricket-green/90 text-white">
                Login
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
