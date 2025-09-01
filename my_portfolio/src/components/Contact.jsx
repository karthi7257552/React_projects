import React from "react";

const Contact = () => {
  return (
    <div>
      <section
        id="contact"
        className="py-20 px-6 text-center bg-[#111827] rounded-t-3xl"
      >
        <h2 className="text-4xl font-poppins font-bold text-cyan-400 mb-6">
          Contact Me
        </h2>
        <p className="text-gray-300 mb-6">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>
        <a
          href="mailto:karthik268743@gmail.com"
          className="px-8 py-3 bg-cyan-500 text-white rounded-lg shadow-lg hover:bg-cyan-600 transition font-semibold"
        >
          Send Email
        </a>
      </section>
    </div>
  );
};

export default Contact;
