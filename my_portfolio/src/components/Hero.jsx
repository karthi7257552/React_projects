import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <section
        id="home"
        className="flex flex-col justify-center items-center h-screen text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-poppins font-bold mb-4"
        >
          Hi, I’m <span className="text-cyan-400">Karthik CM</span>
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-400 mb-6">
          Full Stack Developer | Java | React | Spring Boot
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/karthi9061"
            target="_blank"
            className="p-4 rounded-full bg-gray-800 hover:bg-cyan-500 transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/karthik-cm-7900b12a0"
            target="_blank"
            className="p-4 rounded-full bg-gray-800 hover:bg-cyan-500 transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:karthik268743@gmail.com"
            className="p-4 rounded-full bg-gray-800 hover:bg-cyan-500 transition"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://wa.me/919061969314"
            target="_blank"
            className="p-4 rounded-full bg-gray-800 hover:bg-cyan-500 transition"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
