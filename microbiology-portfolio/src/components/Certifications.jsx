import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';

const certificationData = [
  {
    title: 'HACCP for Food Manufacturing',
    provider: 'KEFTA Foundation',
    date: 'Dec 2023',
  },
  {
    title: 'Food Safety Supervisor (FoSTaC)',
    provider: 'KEFTA',
    date: 'Nov 2023',
  },
  {
    title: 'AI in Healthcare',
    provider: 'LearnToUpgrade',
    date: 'Jan 2024',
  },
  {
    title: 'Webinar: Food Biotech 2025',
    provider: 'Sanjivani University',
    date: 'May 2025',
  },
]

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 mb-6 ">Certifications</h2>
        <div className="space-y-4">
          {certificationData.map((cert, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-white p-5 rounded-lg shadow hover:shadow-lg border border-gray-200 hover:border-green-500 transition duration-300"
            >
              <VerifiedIcon className="text-green-600 mt-1" />
              <div>
                <p className="text-green-700 font-semibold">{cert.title}</p>
                <p className="text-sm text-gray-600">
                  {cert.provider} &mdash; <span className="italic">{cert.date}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
