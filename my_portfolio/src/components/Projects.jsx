import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Shoe Website (Wolf Walk)",
      desc: "E-commerce website with product browsing, cart, and payments.",
      link: "https://github.com/karthi9061",
    },
    {
      title: "RealEst - Real Estate Website",
      desc: "Property browsing, filtering, and virtual tours with Spring Boot backend.",
      link: "https://github.com/karthi9061",
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built with React, Tailwind, and Framer Motion.",
      link: "https://github.com/karthi9061",
    },
  ];
  return (
    <div>
      <section id="projects" className="py-20 px-6 text-center">
        <h2 className="text-4xl font-poppins font-bold text-cyan-400 mb-6">
          Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition"
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                className="text-cyan-400 hover:underline"
              >
                View Code
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
