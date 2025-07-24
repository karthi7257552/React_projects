import React from 'react'

const internshipData = [
  {
    title: 'Vadakara Sahakarana Hospital',
    period: 'Apr 2024 – May 2024',
    description: 'Microbial diagnostics and laboratory practices.'
  },
  {
    title: 'PDC Diagnostic Centre',
    period: 'Aug 2023',
    description: 'Sample processing and microbial testing.'
  },
]

const Internships = () => {
  return (
    <section id="internships" className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-green-800 mb-6">Internships</h2>
        <div className="space-y-4">
          {internshipData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow hover:shadow-lg border border-gray-200 hover:border-green-500 transition duration-300"
            >
              <h4 className="font-semibold text-green-700">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.period}: {item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Internships