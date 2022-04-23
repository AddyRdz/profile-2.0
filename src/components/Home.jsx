import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll/modules'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#1b1ba5]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className="text-2xl font-bold">Hi, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Addy Rodriguez</h1>
            <h2 className="text-4xl sm:text-3xl font-bold text-[#ccd6f6]">I'm a Full Stack Developer.</h2>
            <p className='font-bold text-[#8f9ecc] py-4 max-w-[700px]'>Welcome to my portfolio, I am starting out my career as a software engineer. I just graduated from General Assembly and I am looking forward to applying everything I have learned. Please look around and make sure to reach out!</p>
            <div>
              <Link to="projects" smooth={true} offset={50} duration={500}>
                <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-black'>See my projects<HiArrowNarrowRight className='ml-4'/></button>
              </Link> 
            </div>

        </div>
    </div>
  )
}

export default Home