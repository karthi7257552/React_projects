import React from 'react'

const certificationData = [
  'HACCP for Food Manufacturing – KEFTA Foundation (Dec 2023)',
  'Food Safety Supervisor (FoSTaC) – KEFTA (Nov 2023)',
  'AI in Healthcare – LearnToUpgrade (Jan 2024)',
  'Webinar: Food Biotech 2025 – Sanjivani University (May 2025)',
]

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-green-800 mb-6">Certifications</h2>
        <div className="space-y-4">
          {certificationData.map((cert, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow hover:shadow-lg border border-gray-200 hover:border-green-500 transition duration-300"
            >
              <p className="text-sm text-gray-700">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications