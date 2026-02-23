import React from "react";
import ThemeToggle from "./../components/ThemeToggle";
import StarBackGround from "../components/StarBackGround";
import HeroSection from "./../components/HeroSection";
import EducationalPage from "./EducationalPage";
import SkillPage from "./SkillPage";
import AboutPage from './AboutPage';
import ProjectPage from "./ProjectPage";
import ContactPage from "./ContactPage";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-transparent text-foreground overflow-x-hidden " id="#">
      <ThemeToggle />
      <StarBackGround />
      <main>
        <HeroSection />
        <AboutPage />
      <SkillPage />
      <ProjectPage />
      <EducationalPage />
          <ContactPage />
      </main>
    </div>
  );
};

export default HomePage;
