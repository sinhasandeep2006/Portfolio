import React from "react";
import ThemeToggle from "./../components/ThemeToggle";
import StarBackGround from "../components/StarBackGround";
import HeroSection from "./../components/HeroSection";
import EducationalPage from "./EducationalPage";
import SkillPage from "./SkillPage";
import AboutPage from './AboutPage';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden ">
      <ThemeToggle />
      <StarBackGround />
      <main>
        <HeroSection />
        <AboutPage />
      <EducationalPage />
      <SkillPage />
      </main>
    </div>
  );
};

export default HomePage;
