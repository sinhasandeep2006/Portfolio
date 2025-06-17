import React from "react";
import { Link } from "react-router-dom";
import meabhout from "../assets/Cross-platform software.mp4";
import ThemeToggle from "./../components/ThemeToggle";
import cv from "../assets/Resume.pdf.pdf"
const AboutPage = () => {
  return (
    <section className="py-24 px-4 relative w-full">
      <ThemeToggle />
      <div className="max-w-[1500px] mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1.5fr] gap-12 items-center">
          {/* Left side - Video */}
          <div className="flex justify-center">
            <video
              src={meabhout}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>

          {/* Right side - Text content */}
          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-semibold">
              I am Sandeep Sinha, a highly skilled Full-Stack Developer
            </h3>

            <p className="text-muted-foreground">
              I specialize in building scalable and efficient web applications
              using <strong>Node.js</strong>, <strong>React.js</strong>, and{" "}
              <strong>MySQL</strong>. My core focus is developing robust backend
              architectures and dynamic frontend interfaces.
            </p>

            <p className="text-muted-foreground">
              Currently, I’m working on multiple projects, including a{" "}
              <strong>Lead Management System</strong> and{" "}
              <strong>EasyQuery</strong> platform using the{" "}
              <strong>MERN stack</strong>, emphasizing performance, usability,
              and clean architecture.
            </p>

            <p className="text-muted-foreground">
              My passion lies in backend development — ensuring seamless data
              flow, optimized performance, and secure user experiences.
            </p>

            <p className="text-muted-foreground">
              Beyond development, I’m exploring AI-powered products, automation,
              and analytics. My approach is both strategic and detail-oriented,
              prioritizing <strong>scalability</strong> and{" "}
              <strong>user-centric design</strong>.
            </p>

            <p className="text-muted-foreground">
              I stay up-to-date with modern technologies and practices to
              deliver exceptional results on every project.
            </p>
            <div className="mt-16 bg-muted p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-6 text-center text-primary">
                Technical Skills
              </h3>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground text-base leading-relaxed">
                <li>
                  <strong>Backend:</strong> Node.js, Express.js, MySQL ,MongoDB
                </li>
                <li>
                  <strong>Frontend:</strong> React.js, Bootstrap, HTML5, CSS3,
                  Tailwind CSS,
                </li>
                <li>
                  <strong>System Design:</strong> Database modeling, API
                  development, REST-API, role-based access control
                </li>
                <li>
                  <strong>Other Expertise:</strong> Caching, multilingual
                  support, security best practices, Webpack and module bundlers
                </li>
                <li>
                  <strong>Tools:</strong> Postman, Git, GitLab, Visual Studio
                  Code, SQL Server Workbench CE
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-start">
              <Link to="/contact" className="cosmic-button">
                Get In Touch
              </Link>

              <a
                href={cv}
                  download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
