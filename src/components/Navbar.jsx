import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>

        </div>
        {/* menu */}
        <div>
            <ul>
                <li>About</li>
                <li>Home</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Resume</li>
                <li>Contact</li>
            </ul>
        </div>

        {/* Hamburger Nav */}
        <div className='hidden'>
            <FaBars/>
        </div>
        {/* Mobile Menu */}
        <ul className='hidden'>
            <li>About</li>
            <li>Home</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Resume</li>
            <li>Contact</li>
        </ul>
        {/* Social Icons */}
        <div></div>
    </div>
  )
}

export default Navbar