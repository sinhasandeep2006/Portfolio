import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./../components/ThemeToggle";
import meabhout from "../assets/Cross-platform software.mp4";
import cv from "../assets/Sandeep_resume.pdf";

/* ================= TERMINAL CONTENT ================= */

const terminalLines = [
  "> whoami <<  Sandeep Sinha",
  "> role <<Full-Stack Developer",
  "> tech-stack << Node.js | React.js | MySQL",
  "> passion << Backend Development → Secure APIs → Optimized Performance",
  "> status << Always Learning 🚀",
];

/* ================= COMPONENT ================= */

const AboutPage = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 relative w-full bg-transparent text-foreground"
    >
      <ThemeToggle />

      <div className="max-w-[1500px] mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1.5fr] gap-12 items-center">
          
          {/* LEFT — VIDEO */}
          <div className="flex justify-center">
            <video
              src={meabhout}
              autoPlay
              loop
              muted
              playsInline
              className="w-50%  h-25% rounded-xl object-cover"
            />
          </div>

          {/* RIGHT — TERMINAL ABOUT */}
          <div className="space-y-8">

            {/* Terminal Box */}
            <div className="bg-transparent text-black font-mono rounded-xl shadow-xl border border-primary/30 p-6">

              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-5">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="ml-3 text-xs text-gray-400">
                  sandeep@portfolio:~
                </span>
              </div>

              {/* Terminal Content */}
             <div className="space-y-1 text-sm md:text-base leading-relaxed text-left">
  {terminalLines.map((line, index) => (
    <p key={index} className="whitespace-pre-wrap">
      {line}
    </p>
  ))}
</div>
            </div>


            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              

              <a
                href={cv}
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;