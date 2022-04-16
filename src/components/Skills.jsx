import React from 'react'
import HTML from '../assets/html.png';
import JAVASCRIPT from '../assets/javascript.png';
import CSS from '../assets/css3.png';
import PYTHON from '../assets/python.png';
import REACT from '../assets/react.png';
import Node from '../assets/node-js.png';
import Bootstrap from '../assets/bootstrap.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div name='skills' className='bg-[#1b1ba5] text-[#ccd6f6]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4'>Skills</p>
                <p>These are the technologies I've dabbled in:</p>
            </div>
            <div>
                <img className='w-20 mx-auto' src={HTML} alt="HTML icon"/>
                <p>HTML</p>
            </div>
        </div>
    </div>
  )
}

export default Skills