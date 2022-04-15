import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>

        </div>
        {/* menu */}
            <ul className='hidden md:flex'>
                <li>About</li>
                <li>Home</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Resume</li>
                <li>Contact</li>
            </ul>

        {/* Hamburger Nav */}
        <div className='md:hidden'>
            <FaBars/>
        </div>
        {/* Mobile Menu */}
        <ul className='absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'>
            <li>About</li>
            <li>Home</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Resume</li>
            <li>Contact</li>
        </ul>
        {/* Social Icons */}
        <div className='hidden'></div>
    </div>
  )
}

export default Navbar