import React from "react";

const Skills = () => {
  const skills = [
    "Java",
    "JavaScript",
    "React",
    "Spring Boot",
    "MySQL",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "Git",
  ];
  return (
    <div>
      <section id="skills" className="py-20 px-6 text-center">
        <h2 className="text-4xl font-poppins font-bold text-cyan-400 mb-6">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-6 py-3 bg-gray-800 rounded-full hover:bg-cyan-500 transition text-white font-semibold"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
