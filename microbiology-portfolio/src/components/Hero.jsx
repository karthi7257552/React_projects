import React from 'react';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-6xl font-bold text-green-800 leading-tight"
      >
        Salabha D.S.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-4 text-lg sm:text-xl max-w-2xl text-gray-700"
      >
        Passionate Microbiology Postgraduate specializing in Clinical & Environmental Microbiology.
        Bridging lab precision with innovation through research, diagnostics, and biotech.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-8 flex flex-wrap justify-center gap-4"
      >
        <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm">M.Sc. Microbiology</span>
        <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm">HACCP Certified</span>
        <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm">AI in Healthcare</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-10 flex flex-wrap justify-center gap-4"
      >
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-green-600 text-white px-8 py-3 rounded shadow hover:bg-green-700 transition"
        >
          Contact Me
        </motion.a>

        <motion.a
          href="public/Salabha_resume.docx"
          download
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 bg-gray-200 text-green-800 px-6 py-3 rounded shadow hover:bg-gray-300 transition group"
        >
          <DownloadIcon className="group-hover:animate-bounce" fontSize="small" />
          Resume
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
