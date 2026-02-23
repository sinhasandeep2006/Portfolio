import React from "react";
import ThemeToggle from "./../components/ThemeToggle";

const skills = {
  mernStack: [
    { name: "HTML5", level: 100 },
    { name: "CSS3", level: 100 },
    { name: "JavaScript", level: 95 },
    { name: "React.js", level: 90 },
    { name: "Redux", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Next.js", level: 80 },
    {name: "Redis", level: 70},
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
    {name: "Docker", level: 70},
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
    <section
      id="skills"
      className="py-24 px-4 relative bg-transparent text-foreground"
    >
      <ThemeToggle />

      <div className="max-w-7xl mx-auto">

        {/* ===== MERN STACK ===== */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-20 items-center">

          {/* LEFT — TECH STACK (2/5) */}
          <div className="col-span-2 flex items-center justify-center">
            <div className="bg-secondary border border-primary p-10 text-center rounded-2xl shadow-lg w-full h-full flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-3">Tech Skills</h2>

              <p className="text-sm text-muted-foreground mb-6">
                Tech Stack Proficiency
              </p>

              <hr className="border-muted w-2/3 mx-auto mb-6" />

              <p className="text-xl font-semibold text-primary tracking-wider">
                &lt;MERN STACK/&gt;
              </p>
            </div>
          </div>

          {/* RIGHT — SKILLS (3/5) */}
          <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
            {skills.mernStack.map((skill, idx) => (
              <SkillBar key={idx} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>

        {/* ===== TOOLS ===== */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">

          {/* LEFT CARD */}
          <div className="col-span-2 flex items-center justify-center">
            <div className="bg-secondary border border-primary p-10 text-center rounded-2xl shadow-lg w-full h-full flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-3">Tools Proficiency</h2>

              <hr className="border-muted w-2/3 mx-auto mb-6" />

              <p className="text-xl font-semibold text-primary tracking-wider">
                &lt;FULL STACK/&gt;
              </p>
            </div>
          </div>

          {/* TOOLS GRID */}
          <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
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
