import React from 'react'

const projectData = [
  {
    title: 'Soil Microbe Enzyme Screening',
    description: 'Unveiling novel enzymes with industrial relevance through in silico analysis.'
  },
  {
    title: 'Exopolysaccharide-Producing Bacteria',
    description: 'Identified antibacterial properties of EPS against common pathogens.'
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-green-800 mb-6">Research & Projects</h2>
        <div className="space-y-4">
          {projectData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow hover:shadow-lg border border-gray-200 hover:border-green-500 transition duration-300"
            >
              <h4 className="font-semibold text-green-700">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects