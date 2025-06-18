import React from 'react';
import { GraduationCap } from 'lucide-react'; // or any icon library you're using
import ThemeToggle from "./../components/ThemeToggle";

const educationData = [
  {
    institution: "Delhi Technical Campus, Greater Noida",
    degree: "B.Tech in Computer Science & Engineering",
    duration: "2023 – present",
    score: "8.5 CGPA",
  },
  {
    institution: "Panchsheel Public School",
    degree: "Class XII (PCM with CS) (CBSE)",
    duration: "2022 – 2023",
    score: "72%",
  },
  {
    institution: "Panchsheel Public School",
    degree: "Class X (CBSE)",
    duration: "2020 – 2021",
    score: "82%",
  },
];

const EducationPage = () => {
  return (
    <section id="education" className="py-24 px-4 bg-secondary/30">
      <ThemeToggle />
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Education</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-md border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-primary mt-1">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">{edu.duration}</p>
                  <h3 className="text-lg font-semibold text-primary">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm mt-1 text-muted-foreground">Score: {edu.score}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EducationPage;
