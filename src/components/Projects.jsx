import React from "react";
import biogas from "../assets/biogas.png";
import ckd from "../assets/ckd2.png";
import relaxwiki from "../assets/relaxwiki.png";
import portfolio from "../assets/portfolio.png"; 

// Tech stack icons
import pythonIcon from "../assets/python.png";
import javaIcon from "../assets/java.png";
import mysqlIcon from "../assets/mysql.png";
import springbootIcon from "../assets/springboot.png";
import angularIcon from "../assets/angular.png";
import reactIcon from "../assets/react.png";
import tailwindIcon from "../assets/tailwind.png";
import cIcon from "../assets/cIcon.png";
import atmega from "../assets/atmega.png";
import kicad from "../assets/kicad.png";
import proteusIcon from "../assets/proteusIcon.png";

import cafejoy from "../assets/cafejoy.png"; // Your cafe screenshot
import nodeIcon from "../assets/nodejs.png";   // Node.js icon


const projects = [

  {
    title: "Predictive Analysis for Chronic Kidney Diseases",
    category: "Final Year Research Project",
    description:
      "AI-powered system for early detection and lifestyle-based prevention of CKD. Includes SHAP explainability and recommendation logic.",
    image: ckd,
    techIcons: [{ icon: pythonIcon, name: "Python" }],
    github: "https://github.com/hasareka/ckd-prediction",
    demo: "",
  },
  {
    title: "RelaxWiki - Web Based Booking System",
    category: "Second Year Software Project",
    description:
      "Designed and developed a full-stack travel booking platform integrating essential services. Worked as full-stack developer.",
    image: relaxwiki,
    techIcons: [
      { icon: javaIcon, name: "Java" },
      { icon: mysqlIcon, name: "MySQL" },
      { icon: angularIcon, name: "Angular" },
      { icon: springbootIcon, name: "Spring Boot" },
    ],
    github: "https://github.com/relax-wiki-seekerscloud",
    demo: "",
  },

    {
    title: "Personal Portfolio Website",
    category: "Personal Project",
    description:
      "A responsive portfolio website built with React and Tailwind CSS, showcasing my work, skills, and contact information. Deployed via Vercel.",
    image: portfolio,
    techIcons: [
      { icon: reactIcon, name: "React" },
      { icon: tailwindIcon, name: "Tailwind CSS" },
    ],
    github: "https://github.com/hasareka/react-tailwind-portfolio", // Update if needed
    demo: "https://my-portfolio-sand-six-29.vercel.app/",
  },
  {
  title: "Smart Bio Gas System",
  category: "First Year Hardware Project",
  description:
    "Designed a smart, microcontroller-based biogas system to reduce LP gas usage and environmental pollution. Automatically switches between biogas and LP gas, detects gas leaks, and manages organic waste. Includes safety alerts and real-time display via LCD.",
  image: biogas,
  techIcons: [
    { icon: cIcon, name: "C (AVR)" },
    { icon: proteusIcon, name: "Proteus" },
    { icon: kicad, name: "KiCad" },
    { icon: atmega, name: "Atmega32" }
  ],
  github: "https://github.com/hasareka/Smart-BioGas-System",
    demo: "",
  },

  {
    title: "Cafe Joy – Full Stack Coffee Shop Website",
    category: "Personal Project",
    description:
      "A modern cafe website featuring a table reservation system, automated email confirmations via Nodemailer, and a secure admin dashboard to manage bookings.",
    image: cafejoy,
    techIcons: [
      { icon: reactIcon, name: "React" },
      { icon: nodeIcon, name: "Node.js" },
      { icon: mysqlIcon, name: "MySQL" },
      { icon: tailwindIcon, name: "Tailwind CSS" },
    ],
    github: "https://github.com/hasareka/cafe-joy", // Your new repo link
    demo: "", // Add link if you deploy it later
  }
];


function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-400">Projects</h2>
              
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-[#0f172a] rounded-3xl shadow-lg hover:shadow-2xl shadow-blue-500/10 transform hover:scale-105 transition-transform duration-300 overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-contain p-6 bg-gradient-to-br from-[#1e293b] to-[#334155]"
            />
            <div className="p-6">
              <p className="text-sm text-blue-300 mb-1">{project.category}</p>
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-gray-300 mt-2">{project.description}</p>

              {project.techIcons.length > 0 && (
                <div className="flex items-center gap-4 mt-4">
                  {project.techIcons.map((tech, i) => (
                    <img
                      key={i}
                      src={tech.icon}
                      alt={tech.name}
                      title={tech.name}
                      className="w-6 h-6 bg-white rounded-full p-1"
                    />
                  ))}
                </div>
              )}

              {/* GitHub / Demo Links */}
              <div className="flex gap-4 mt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline text-sm"
                  >
                    GitHub
                  </a>
                )}
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
