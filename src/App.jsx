import React, { useState } from 'react'
import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Contacts from './components/sections/Contacts'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='h-screen' data-theme="synthwave">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Routes>
        <Route
          path='/'
          element={(
            <Home />
          )}
        />
        <Route
          path='/about'
          element={(
            <About />
          )}
        />

        <Route
          path='/projects'
          element={(
            <Projects />
          )}
        />

        <Route
          path='/contacts'
          element={(
            <Contacts />
          )}
        />
      </Routes>

    </div>
  )
}

export default App
