import React, { useEffect, useRef, useState } from "react";
import ThemeToggle from "./../components/ThemeToggle";
const educationData = [
  {
    institution: "Web Developer Intern",
    degree:"UnlistedShareWala",
    duration: "Feb 2026 – Present",
    score: "Hybrid (Onsite – Delhi)",
  },
  {
    institution: "Web Developer Intern",
    degree:"CodeSoft",
    duration: "May 2024 – June 2024",
    score: "Remote",
  },
  {
    institution: "Tech Lead — ACE DTC",
    degree:"Delhi Technical Campus",
    duration: "Sep 2025 – Present",
    score: "Greater Noida",
  },
  {
    institution: "B.Tech in Computer Science & Engineering",
    degree:"GGSIPU ",
    duration: "2023 – Present",
     score: "8.5 CGPA",
  },
];

// const educationData = [
//   {
//     institution: "Delhi Technical Campus, Greater Noida",
//     degree: "B.Tech in Computer Science & Engineering",
//     duration: "2023 – Present",
//     score: "8.5 CGPA",
//   },
//   {
//     institution: "Panchsheel Public School",
//     degree: "Class XII (PCM with CS) (CBSE)",
//     duration: "2022 – 2023",
//     score: "72%",
//   },
//   {
//     institution: "Panchsheel Public School",
//     degree: "Class X (CBSE)",
//     duration: "2020 – 2021",
//     score: "82%",
//   },
// ];

const EducationItem = ({ edu, index }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      {
        threshold: 0.4,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <div
  ref={ref}
  className={`relative flex items-center w-full my-16
  bg-transparent text-foreground
  ${isLeft ? "justify-start" : "justify-end"}
`}
>
      {/* Card */}
      <div
        className={`w-[45%] bg-card border border-border p-6 rounded-xl shadow-md
        transition-all duration-700 ease-out
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }`}
      >
        <p className="text-sm text-muted-foreground">{edu.duration}</p>

        <h3 className="text-lg font-semibold text-primary">
          {edu.degree}
        </h3>

        <p className="text-muted-foreground">{edu.institution}</p>

        <p className="text-sm mt-1 text-muted-foreground">
          Score: {edu.score}
        </p>
      </div>

      {/* 🔥 Glowing Timeline Ball */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
        <div
          className={`rounded-full transition-all duration-500 ease-out
          ${
            visible
              ? "w-6 h-6 bg-purple-500 scale-125 animate-pulse shadow-[0_0_35px_10px_rgba(168,85,247,0.9)]"
              : "w-4 h-4 bg-muted scale-100"
          }`}
        />
      </div>
    </div>
  );
};

const EducationPage = () => {
  return (
    <section id="education" className="py-24 px-4 bg-secondary/30 bg-transparent ">
      <ThemeToggle />

      <div className="container mx-auto max-w-6xl relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
          My <span className="text-primary">Experience </span>
        </h2>

        {/* Timeline Vertical Line */}
        <div className="absolute left-1/2 top-28 bottom-0 w-[2px] bg-border -translate-x-1/2" />

        {educationData.map((edu, index) => (
          <EducationItem key={index} edu={edu} index={index} />
        ))}
      </div>
    </section>
  );
};

export default EducationPage;