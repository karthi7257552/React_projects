import React, { useState } from 'react'

const educationData = [
  {
    degree: 'M.Sc. in Microbiology',
    institution: 'University of Calicut',
    duration: '2023 – 2025',
    details: 'Focused on advanced microbiological techniques, research, and thesis on clinical microbiology.'
  },
  {
    degree: 'B.Sc. in Microbiology',
    institution: 'University of Calicut',
    duration: '2020 – 2023',
    details: 'Covered fundamental microbiology, lab work, and participated in university-level seminars and workshops.'
  },
]

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleDetails = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="education" className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Education</h2>
        <div className="space-y-4">
          {educationData.map((item, index) => (
            <div
              key={index}
              onClick={() => toggleDetails(index)}
              className="bg-white cursor-pointer p-5 rounded-lg shadow border border-gray-200 hover:shadow-lg hover:border-green-500 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-green-700">{item.degree}</h3>
              <p className="text-sm text-gray-600">{item.institution} | {item.duration}</p>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-700 text-sm">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
