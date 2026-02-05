import React from 'react'

const About = () => {
  const frontEndSkills = ["React", "Vue", "TailwindCSS", "Flutter"];
  const backEndSkills = ["Java", "MySQL", "Node.js", "Firebase", "MongoDB"];

  return (
    <div id='about' className='min-h-[calc(100vh-74px)] flex items-center justify-center py-20'>
      <div className='max-w-3xl mx-auto px-4'>
        <h2 className='text-4xl font-bold mb-8 bg-linear-to-r from-blue-500 to-purple-300 bg-clip-text text-transparent text-center'>
          About Me
        </h2>
        <div className='rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all'>
          <p className='text-gray-300 mb-6'>
            Computer science student graduated last year (December 2025) with a keen interest in building web and mobile applications.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'>Frontend</h3>
              <div className='flex flex-wrap gap-2'>
                {frontEndSkills.map((tech, key) => (
                  <span
                    key={key}
                    className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'>Backend</h3>
              <div className='flex flex-wrap gap-2'>
                {backEndSkills.map((tech, key) => (
                  <span
                    key={key}
                    className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
          <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
            <h3 className='text-xl font-bold mb-4'>📖 Education</h3>
            <ul className='list-disc list-inside text-gray-300 space-y-2'>
              <li>
                <strong> B.S. in Computer Science (CGPA: 3.39) </strong> - Universiti Teknologi MARA (2021-2025)
              </li>
              <li>
                <strong> Science Stream One Year Programme (CGPA: 3.84) </strong> - Kolej Matrikulasi Selangor (2020-2021)
              </li>
            </ul>
          </div>
          <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
            <h3 className='text-xl font-bold mb-4'>💼 Work Experience</h3>
            <div className='space-y-4 text-gray-300'>
              <div>
                <h4 className='font-semibold'> IT Intern at ROV Resources (2024)</h4>
                <p> Updated and redesigned the company's website to provide a more modern look as well as a more responsive user experience. Also assisted in solving tech-related problems. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
