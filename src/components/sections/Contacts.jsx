import React from 'react'

const Contacts = () => {
  return (
    <div id='contact' className='min-h-screen flex items-center justify-center py-20'>
      <div className='max-w-3xl mx-auto px-4'>
        <h2 className='text-4xl font-bold mb-8 bg-linear-to-r from-blue-500 to-purple-300 bg-clip-text text-transparent text-center'>
          Contact Me
        </h2>
        <div className='rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all'>
          <h3 className='text-xl font-bold mb-4'>✉️ My Socials / Contacts</h3>
          <ul className='list-disc list-inside text-gray-300 space-y-2'>
            <li>
              ✉️ hazimqayyim1102@gmail.com
            </li>
            <li>
              ✖️ <a href='https://x.com/zim7506'>Zim7506</a>
            </li>
            <li>
              👾 <a href='https://github.com/sterlzim7506'>sterlzim7506</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contacts
