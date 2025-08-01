import React from "react";
import biogas from "../assets/biogas.png";
import ckd from "../assets/ckd2.png";
import relaxwiki from "../assets/relaxwiki.png";

// Tech stack icons
import pythonIcon from "../assets/python.png";
import javaIcon from "../assets/java.png";
import mysqlIcon from "../assets/mysql.png";
import springbootIcon from "../assets/springboot.png";
import angularIcon from "../assets/angular.png";

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
    title: "Smart Bio Gas System",
    category: "First Year Hardware Project",
    description:
      "Developed a microcontroller-based solution to address combustion fuel deficiency during the pandemic.",
    image: biogas,
    techIcons: [],
    github: "https://github.com/hasareka/Smart-BioGas-System",
    demo: "",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-400">Projects</h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
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
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline text-sm"
                  >
                    Demo
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
