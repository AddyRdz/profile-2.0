import React from 'react'
import Blackjack from '../assets/Blackjack.jpeg'
import CodingPals from '../assets/CodingPals.jpeg'
import EBB from '../assets/EBB.jpeg'
import MyPetPro from '../assets/MyPetPro.jpeg'
import SpoonfulBlog from '../assets/SpoonfulBlog.png'
import PopcornWatch from '../assets/PopcornWatch.png'

export const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-[#ccd6f6] bg-[#1b1ba5]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 py-12'>
            <p className='text-4xl font-bold inline border-b-4'>Projects</p>
            <p className='py-6'>Check out some of my recent work.</p>
        </div>
        {/* Big Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Item Inside Container */}
                <div style={{backgroundImage:`url(${PopcornWatch})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/FrontEnd-Group-Project'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>GitHub
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${SpoonfulBlog})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/the-spoonful-blog'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>GitHub
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${MyPetPro})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                            Python Application

                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/AddyRdz/MyPetPro'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>GitHub
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${EBB})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                            React JS Application

                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/AddyRdz/everything-bobs-burgers'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>GitHub
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${CodingPals})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                            EJS Application

                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/AddyRdz/Coding-PAL-s'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>GitHub
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${Blackjack})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                            Web Application

                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/AddyRdz/Blackjack_Addy'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>GitHub
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
