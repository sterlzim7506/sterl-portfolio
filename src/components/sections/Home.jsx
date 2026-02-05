import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div className='min-h-[calc(100vh-74px)] flex items-center justify-center relative overflow-hidden'>
      <div className='text-center z-10 px-4'>
        <h1 className='text-5xl md:text-7xl font-bold mb:6 bg-linear-to-r from-blue-500 to-emerald-600 bg-clip-text text-transparent leading-right'>
          Hello there, I'm Hazim
        </h1>
        <p className='text-gray-400 text-lg mb-8 max-w-lg mx-auto'>
          I am a computer science student who just graduated and is eager to work in a web development based environment.
        </p>
        <div className='flex justify-center space-x-4'>
          <Link to={"/projects"}className='bg-white text-black py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]'>
            View Projects
          </Link>
          <Link to={"/contacts"} className='border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10'>
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
