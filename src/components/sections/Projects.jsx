import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className='min-h-[calc(100vh-74px)] flex items-center justify-center py-20'>
      <div className='max-w-5xl mx-auto px-4'>
        <h2 className='text-4xl font-bold mb-8 bg-linear-to-r from-blue-500 to-purple-300 bg-clip-text text-transparent text-center'>
          Featured Projects
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-4'>
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
            <h3 className='text-xl font-bold mb-2'>Reachout Chat and Video Call App</h3>
            <p className='text-gray-300 mb-4'>A web application that acts as a chat app clone with basic app features as well as a video call function.</p>
            <div>
              {["MongoDB", "ReactJS", "ExpressJS", "NodeJS"].map((tech, key) => (
                <span
                  key={key}
                  className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all'>
                  {tech}
                </span>
              ))}
            </div>
            <div className='flex justify-between items-center'>
              <a href='https://github.com/sterlzim7506/reachout-meet-and-chat' className='text-blue-400 hover:text-blue-300 transition-colors my-4'>View Project</a>
            </div>
          </div>
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
            <h3 className='text-xl font-bold mb-2'>Personal App</h3>
            <p className='text-gray-300 mb-4'>A personal app developed to try and learn developing apps using flutter. Based on various sources on the internet</p>
            <div className='flex flex-wrap gap-2 mb-4'>
              {["Flutter", "Firebase", "Isar"].map((tech, key) => (
                <span
                  key={key}
                  className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all'>
                  {tech}
                </span>
              ))}
            </div>
            <div className='flex justify-between items-center'>
              <a href='https://github.com/sterlker/sterl-personal-app' className='text-blue-400 hover:text-blue-300 transition-colors my-4'>View Project</a>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
            <h3 className='text-xl font-bold mb-2'>Pocket Dermatologist</h3>
            <p className='text-gray-300 mb-4'>A mobile application that allows users to take a photo of their skin which will be scanned and determined by AI as to what type of skin disease it is.</p>
            <div>
              {["Android Studio", "Java", "MySQL"].map((tech, key) => (
                <span
                  key={key}
                  className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all'>
                  {tech}
                </span>
              ))}
            </div>
            <div className='flex justify-between items-center'>
              <a href='https://github.com/sterlker/pocket-dermatologist' className='text-blue-400 hover:text-blue-300 transition-colors my-4'>View Project</a>
            </div>
          </div>

          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
            <h3 className='text-xl font-bold mb-2'>MERN Stack Study</h3>
            <p className='text-gray-300 mb-4'>Technically my first MERN stack app developed as a study on the stack. It is essentially a simple e-commerce app that allows the user to purchase items. Based on the guide by codesistency.</p>
            <div>
              {["MongoDB", "ReactJS", "ExpressJS", "NodeJS"].map((tech, key) => (
                <span
                  key={key}
                  className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all'>
                  {tech}
                </span>
              ))}
            </div>
            <div className='flex justify-between items-center'>
              <a href='https://github.com/sterlzim7506/mern-stack-study' className='text-blue-400 hover:text-blue-300 transition-colors my-4'>View Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
