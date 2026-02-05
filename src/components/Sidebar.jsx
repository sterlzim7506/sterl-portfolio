import { FolderOpenDot, Phone, Rat, User } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const Sidebar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
                    ${menuOpen ? "h-screen bg-opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
                  `}
    >

      <button
        onClick={() => setMenuOpen(false)}
        className='absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer'
        aria-label='Close Menu'
      >
        &times;
      </button>

      <Link to={"/sterl-portfolio/"} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        <span onClick={() => setMenuOpen(false)}>
          Home
        </span>
      </Link>

      <Link to={"/sterl-portfolio/about"} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        <span onClick={() => setMenuOpen(false)} >
          About
        </span>
      </Link>

      <Link to={"/sterl-portfolio/projects"} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        <span onClick={() => setMenuOpen(false)} >
          Projects
        </span>
      </Link>

      <Link to={"/sterl-portfolio/contacts"} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        <span onClick={() => setMenuOpen(false)} >
          Contacts
        </span>
      </Link>

    </div>
  )
}

export default Sidebar
