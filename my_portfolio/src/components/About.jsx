import React from "react";

const About = () => {
  return (
    <div>
      <section
        id="about"
        className="py-20 px-6 max-w-4xl mx-auto text-center md:text-left"
      >
        <h2 className="text-4xl font-poppins font-bold text-cyan-400 mb-6">
          About Me
        </h2>
        <p className="text-gray-300 leading-relaxed">
          I’m an aspiring Full Stack Developer passionate about building modern,
          responsive, and efficient web applications. I hold a{" "}
          <span className="text-white font-semibold">
            B.Sc. in Computer Science (Calicut University)
          </span>{" "}
          and have completed certifications in{" "}
          <span className="text-white font-semibold">
            Full Stack Development
          </span>{" "}
          and{" "}
          <span className="text-white font-semibold">
            Python & Artificial Intelligence
          </span>
          . I specialize in{" "}
          <span className="text-cyan-400">
            Java, React, Spring Boot, and MySQL
          </span>
          .
        </p>
      </section>
    </div>
  );
};

export default About;
