import React from "react";
import ThemeToggle from "./../components/ThemeToggle";
import StarBackGround from "../components/StarBackGround";
import HeroSection from "./../components/HeroSection";
import EducationPage from './EducationalPage';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden ">
      <ThemeToggle />
      <StarBackGround />
      <main>
        <HeroSection />
        <EducationPage/>
      </main>
    </div>
  );
};

export default HomePage;
