import React, { useState } from 'react';

const internshipData = [
  {
    title: 'Vadakara Sahakarana Hospital',
    period: 'Apr 2024 – May 2024',
    description: 'Involved in microbial diagnostics, clinical sample analysis, and laboratory practices following standard biosafety guidelines.',
  },
  {
    title: 'PDC Diagnostic Centre',
    period: 'Aug 2023',
    description: 'Hands-on training in sample collection, microbial culture techniques, and result interpretation.',
  },
];

const Internships = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDetails = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="internships" className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Internships</h2>
        <div className="space-y-4">
          {internshipData.map((item, index) => (
            <div
              key={index}
              onClick={() => toggleDetails(index)}
              className="bg-white cursor-pointer p-5 rounded-lg shadow border border-gray-200 hover:shadow-lg hover:border-green-500 transition-all duration-300"
            >
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-semibold text-green-700">{item.title}</h4>
                <span className="text-sm text-gray-500">{item.period}</span>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
