import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Logo from '../assets/AR Logo.png'

const Footer = () => {
  return (
    <div name='Footer' className='flex flex-col items-center justify-evenly px-6 py-4 text-[#ccd6f6] bg-[#1b1ba5]'>
        <div>
            <a className='flex justify-between items-center w-full text-gray-300' 
                href="https://github.com/AddyRdz">
                 <FaGithub size={30}/>
               <a className='flex items-center w-full py-1 justify-evenly text-gray-300' 
                href="https://www.linkedin.com/in/addyrodriguez/">
                    <FaLinkedin size={30}/>  
            </a>
                </a>    
        </div>
        By Addy Rodriguez
    </div>
    
  )
}

export default Footer