import React from 'react'

const educationData = [
  {
    degree: 'M.Sc. in Microbiology',
    institution: 'University of Calicut',
    duration: '2023 – 2025',
  },
  {
    degree: 'B.Sc. in Microbiology',
    institution: 'University of Calicut',
    duration: '2020 – 2023',
  },
]

const Education = () => {
  return (
    <section id="education" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-green-800 mb-6">Education</h2>
        <div className="space-y-4">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow hover:shadow-lg border border-gray-200 hover:border-green-500 transition duration-300"
            >
              <h3 className="text-lg font-semibold text-green-700">{item.degree}</h3>
              <p className="text-sm text-gray-600">{item.institution} | {item.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
