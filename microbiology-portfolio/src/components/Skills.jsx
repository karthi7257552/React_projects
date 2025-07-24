import React from 'react'

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-green-800 mb-6">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
          <ul className="list-disc list-inside">
            <li>Microbial Isolation & Culture</li>
            <li>Staining & Sterility Testing</li>
            <li>Enzyme Assay & Media Preparation</li>
          </ul>
          <ul className="list-disc list-inside">
            <li>HACCP & Documentation</li>
            <li>Bioinformatics Tools (NCBI, BLAST, MEGA)</li>
            <li>MS Office & Basic AI Tools</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills
