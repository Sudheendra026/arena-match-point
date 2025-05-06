
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import MatchFeed from "@/components/MatchFeed";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <MatchFeed />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
