import React, { useEffect } from 'react'
import { Link } from 'react-router'
import { Menu, Rat } from 'lucide-react'

const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className='bg-base-200 border-b border-base-300 sticky top-0 z-30 h-16 flex items-center'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-end w-full'>
          <Link to="/" className='flex items-center gap-2.5'>
            <Rat className='size-9 text-primary' />
            <span className='hidden lg:block text-3xl font-bold font-mono text-white'>
              Sterlzim7506
            </span>
          </Link>
          
          <Menu className='w-7 h-5 relative cursor-pointer z-40 md:hidden' onClick={() => setMenuOpen((prev) => !prev)} />

          <div className='hidden md:flex items-center gap-3 sm:gap-4 ml-auto space-x-8'>
            <Link to={"/about"}>
              <span className='text-xl font-mono text-white'>
                About
              </span>
            </Link>

            <Link to={"/projects"}>
              <span className='text-xl font-mono text-white'>
                Projects
              </span>
            </Link>

            <Link to={"/contacts"}>
              <span className='text-xl font-mono text-white'>
                Contacts
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
