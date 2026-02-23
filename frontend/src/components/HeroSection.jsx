import React from "react";
import { ArrowDown } from "lucide-react";
import me from "./../assets/avataaars (1).png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <Link to="/" />
      <div className="container max-w-4xl mx-auto text-center z-10">
        <img
          src={me}
          alt=""
          className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full bg-[#341181] flex items-center justify-center mb-6 "
        />
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Sandeep
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Sinha
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Crafting clean, efficient, and scalable software solutions.
            Passionate about architecture, documentation, and making tech work
            seamlessly.
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">
          <Link to="/about">start Exploring</Link>{" "}
        </span>
        {/* <ArrowDown className="h-5 w-5 text-primary" /> */}
      </div>
    </section>
  );
};

export default HeroSection;
