import React from 'react'
import HTML from '../assets/html.png';
import JAVASCRIPT from '../assets/javascript.png';
import CSS from '../assets/css3.png';
import PYTHON from '../assets/python.png';
import REACT from '../assets/react.png';
import NODE from '../assets/node-js.png';
import BOOTSTRAP from '../assets/bootstrap.png';
import TAILWIND from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#1b1ba5] text-[#ccd6f6]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4'>Skills</p>
                <p className='py-4'>These are some of the technologies I've dabbled in:</p>
            </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt="HTML icon"/>
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JAVASCRIPT} alt="JAVASCRIPT icon"/>
                <p className='my-4'>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt="CSS icon"/>
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={PYTHON} alt="PYTHON icon"/>
                <p className='my-4'>PYTHON</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={REACT} alt="REACT icon"/>
                <p className='my-4'>REACT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={NODE} alt="NODE icon"/>
                <p className='my-4'>NODE JS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={BOOTSTRAP} alt="BOOTSTRAP icon"/>
                <p className='my-4'>BOOTSTRAP</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={TAILWIND} alt="TAILWIND icon"/>
                <p className='my-4'>TAILWIND</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Skills