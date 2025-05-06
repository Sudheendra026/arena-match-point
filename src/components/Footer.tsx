
import React from "react";
import { Trophy } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cricket-navy text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="h-6 w-6 text-cricket-tan" />
              <span className="font-bold text-lg">Arena Match Point</span>
            </div>
            <p className="text-sm text-gray-300">
              The ultimate cricket management platform for organizing matches, tracking performance, and booking practice sessions.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Features</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Match Management</li>
              <li>Tournament Organization</li>
              <li>Performance Analytics</li>
              <li>Practice Nets Booking</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Help Center</li>
              <li>Documentation</li>
              <li>API Reference</li>
              <li>Cricket Rules</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>About Us</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Arena Match Point. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
