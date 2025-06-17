import React from "react";
import ThemeToggle from "./../components/ThemeToggle";

const skills = {
  mernStack: [
    { name: "HTML5", level: 100 },
    { name: "CSS3", level: 100 },
    { name: "JavaScript", level: 95 },
    { name: "React.js", level: 90 },
    { name: "Node.js", level: 90 },
    { name: "RestAPI", level: 85 },
    { name: "ExpressJS", level: 80 },
    { name: "MongoDB", level: 80 },
    { name: "MySQL", level: 90 },
    { name: "C++", level: 75 },
    { name: "BootStrap Css", level: 80 },
    { name: "TailWind Css", level: 75 },
     { name: "EJS", level: 80 },
  ],
  tools: [
    { name: "Postman", level: 85 },
    { name: "GitHub", level: 80 },
    { name: "SQL Workbench CE", level: 80 },
     { name: "Visual Studio Code", level: 100 },
     {name: "Thunder Client",level: 60 }
  ],
};

const SkillBar = ({ name, level }) => (
  <div className="mb-5">
    <div className="flex justify-between text-sm font-medium text-foreground mb-1">
      <span>{name}</span>
      <span>{level}%</span>
    </div>
    <div className="w-full bg-muted/40 h-2 rounded-full">
      <div
        className="h-2 bg-primary rounded-full transition-all duration-700"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);


const SkillPage = () => {
  return (
    <section className="py-24 px-4 relative bg-background text-foreground">
      <ThemeToggle />
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-start">
          {/* Left Balloon */}
          <div className="bg-secondary border border-primary p-8 text-center rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Tech Skills</h2>
            <p className="text-sm mb-4 text-muted-foreground">
              Tech Stack Proficiency
            </p>
            <hr className="border-muted w-2/3 mx-auto mb-4" />
            <p className="text-lg font-semibold text-primary">&lt;MERN STACK/&gt;</p>
          </div>

          {/* Skills (Frontend/Backend Combined) */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.mernStack.map((skill, idx) => (
              <SkillBar key={idx} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left Balloon */}
          <div className="bg-secondary border border-primary p-8 text-center rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Tools Proficiency</h2>
            <hr className="border-muted w-2/3 mx-auto mb-4" />
            <p className="text-lg font-semibold text-primary">&lt;FULL STACK/&gt;</p>
          </div>

          {/* Tool Bars */}
          <div className="mb-9 md:col-span-2 gap-10">
            {skills.tools.map((tool, idx) => (
              <SkillBar key={idx} name={tool.name} level={tool.level} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillPage;
