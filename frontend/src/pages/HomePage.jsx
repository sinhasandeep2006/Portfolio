import React from "react";
import ThemeToggle from "./../components/ThemeToggle";
import StarBackGround from "../components/StarBackGround";
import HeroSection from "./../components/HeroSection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden ">
      <ThemeToggle />
      <StarBackGround />
      <main>
        <HeroSection />
      </main>
    </div>
  );
};

export default HomePage;
