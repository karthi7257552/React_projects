import React from 'react'
import ScienceIcon from '@mui/icons-material/Science'

const projectData = [
  {
    title: 'Soil Microbe Enzyme Screening',
    description: 'Unveiling novel enzymes with industrial relevance through in silico analysis.',
  },
  {
    title: 'Exopolysaccharide-Producing Bacteria',
    description: 'Identified antibacterial properties of EPS against common pathogens.',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Research & Projects</h2>
        <div className="space-y-4">
          {projectData.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white p-5 rounded-lg shadow hover:shadow-lg border border-gray-200 hover:border-green-500 transition duration-300"
            >
              <ScienceIcon className="text-green-700 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-green-700">{item.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
