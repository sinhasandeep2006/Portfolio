import React, { useState } from "react";
import ThemeToggle from "../components/ThemeToggle";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import forever from "../assets/image.png";
import cfg from "../assets/cfd.png";
import travel from "../assets/travel.png";
import adough from "../assets/adough.png";
import bst from "../assets/bst.png";
import usermanagemen from "../assets/usermanagemen.png";
import hangman from "../assets/hangman.png";

import taskBuddy from "../assets/taskBuddy.png"

const projects = [
 {
    id: 1,
    title: "Task Buddy",
    description:
      "Task Buddy is a full-featured and collaborative task management platform designed for teams and individuals. Users can create, update, and track tasks, manage priorities, and visualize progress through interactive charts. The platform supports secure Google authentication via Firebase, file uploads, Excel report exports, and task history tracking. Admins can manage users and tasks through a dedicated dashboard with role-based access control and JWT-secured APIs.",
    image: taskBuddy,
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe", "Razorpay"],
    demoUrl: "https://task-buddy-q3lt.vercel.app/",
    githubUrl: "https://github.com/sinhasandeep2006/task-buddy",
  },

  {
    id: 2,
    title: "Forever",
    description:
      "Forever is a full-featured and scalable eCommerce platform that provides seamless online shopping experiences. Users can search for products, manage carts, and securely checkout using integrated payment gateways like Stripe and Razorpay. The admin dashboard allows product management and real-time analytics tracking. Built with robust backend APIs and JWT-based authentication for secure access.",
    image: forever,
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe", "Razorpay"],
    demoUrl: "https://forever-m28p.vercel.app/",
    githubUrl: "https://github.com/sinhasandeep2006/Forever",
  },
  {
    id: 3,
    title: "BST Visualizer",
    description:
      "BST Visualizer is a learning tool that visually represents Binary Search Tree operations including insertion, deletion, and traversal. Designed for students and developers to interactively explore how data structures work in real time. With D3.js animations and a React UI, users can control the pace of visualizations and better grasp core CS concepts.",
    image: bst,
    tags: ["React", "D3.js", "Bootstrap", "JavaScript"],
    demoUrl: "https://visualizer-rose.vercel.app/",
    githubUrl: "https://github.com/sinhasandeep2006/Binary-tree",
  },
  {
    id: 4,
    title: "Hangman Game",
    description:
      "A modern and responsive implementation of the classic Hangman game built with React and TypeScript. Features a clean, intuitive interface where users guess letters to reveal hidden words. It includes dynamic keyboard interaction, visual feedback for correct and incorrect guesses, and mobile-responsive design to ensure a seamless experience across all devices.",
    image: hangman,
    tags: ["React", "TypeScript", "CSS Modules"],
    demoUrl: "https://hangman-five-virid.vercel.app/",
    githubUrl: "https://github.com/sinhasandeep2006/Hangman",
  },
  {
    id: 5,
    title: "StoryApp",
    description:
      "StoryApp is a MERN-stack based travel story platform where users can create, edit, and manage their travel experiences. Features include user authentication with JWT, media uploads using Multer, story search by date or keywords, and a personalized dashboard. Built with responsive design and optimized data flow using Context API and Axios.",
    image: travel,
    tags: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "JWT",
      "Multer",
      "Axios",
      "Context API",
    ],
    githubUrl: "https://github.com/sinhasandeep2006/Story_app.git",
  },
  {
    id: 6,
    title: "Adoughrable.online",
    description:
      "Adoughrable.online is a dynamic blogging platform designed for baking and recipe lovers. Users can browse, search, and engage with blog posts. Admins and users have secure access through JWT-based login. The platform supports dynamic search, full post CRUD operations, and is built using EJS templating, Bootstrap for UI, and MongoDB for scalable storage.",
    image: adough,
    tags: ["HTML", "CSS", "Bootstrap", "EJS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    demoUrl: "https://adoughrable-online-5tkc.onrender.com",
    githubUrl: "https://github.com/sinhasandeep2006/bloging",
  },
  {
    id: 7,
    title: "CFG to PDA Converter",
    description:
      "An educational tool that helps convert Context-Free Grammars (CFGs) to equivalent Pushdown Automata (PDA). Ideal for students studying formal language theory, it features a clean UI for entering grammars and visualizes transitions in real time. Built using pure JavaScript, D3.js for animations, and styled with CSS for clarity.",
    image: cfg,
    tags: ["D3.js", "JavaScript", "HTML", "CSS"],
    demoUrl: "https://convert-cga-to-pda.vercel.app/",
    githubUrl: "https://github.com/sinhasandeep2006/Convert_cga_to_pda.git",
  },
  {
    id: 8,
    title: "User Management App",
    description:
      "A sleek and responsive frontend application for user management operations. It supports Create, Read, Update, and Delete (CRUD) features integrated with a third-party API. The app uses Bootstrap modals and dynamic forms for smooth UX. Built with React and Axios, it provides real-time updates and includes error handling for all API interactions.",
    image: usermanagemen,
    tags: ["React.js", "Bootstrap", "Axios", "REST API"],
    demoUrl: "https://user-mangment.vercel.app/",
    githubUrl: "https://github.com/sinhasandeep2006/user-Mangment.git",
  },
  {
    id: 9,
    title: "Coming soon.......",
    description:
      "A sleek and responsive frontend application for user management operations. It supports Create, Read, Update, and Delete (CRUD) features integrated with a third-party API. The app uses Bootstrap modals and dynamic forms for smooth UX. Built with React and Axios, it provides real-time updates and includes error handling for all API interactions.",
    image: usermanagemen,
    tags: ["React.js", "Bootstrap", "Axios", "REST API"],
    demoUrl: "https://user-mangment.vercel.app/",
    githubUrl: "https://github.com/sinhasandeep2006/user-Mangment.git",
  },
];

const ProjectPage = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const handleCardClick = (id) => {
    setFlippedCard((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <ThemeToggle />
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="[perspective:1000px] w-full h-[360px] group"
              onClick={() => handleCardClick(project.id)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                  flippedCard === project.id
                    ? "rotate-y-180"
                    : "group-hover:rotate-y-180"
                }`}
              >
                {/* Front Side */}
                <div className="absolute w-full h-full bg-card rounded-lg overflow-hidden shadow-md backface-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute w-full h-full bg-card rounded-lg shadow-md rotate-y-180 backface-hidden p-4 flex flex-col justify-between">
                  <p className="text-sm mb-2 text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex space-x-4">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/sinhasandeep2006"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
