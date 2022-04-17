import React from 'react'
import Blackjack from '../assets/Blackjack.jpeg'
import CodingPals from '../assets/CodingPals.jpeg'
import EBB from '../assets/EBB.jpeg'
import MyPetPro from '../assets/MyPetPro.jpeg'

export const Projects = () => {
  return (
    <div name='work' className='w-full md:h-screen text-[#ccd6f6] bg-[#1b1ba5]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w=full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4'>Projects</p>
            <p className='py-6'>Here is some of my recent work.</p>
        </div>
        <div style={{backgroundImage: `url(${MyPetPro})`}} className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* Hover Effects */}
                <div>
                    <span>

                    </span>
                    <div>
                        <a href="/">
                            <button></button>
                        </a>
                        <a href="/">
                            <button></button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
