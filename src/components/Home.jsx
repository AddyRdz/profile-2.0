import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#1b1ba5]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p>Hi, my name is</p>
            <h1>Addy Rodriguez</h1>
            <h2>I'm a Full Stack Developer.</h2>
            <p>WWelcome to my portfolio, I am starting out my career as a software engineer. I just graduated from General Assembly and I am looking forward to applying everything I have learned. Please look around and make sure to reach out!</p>

        </div>
    </div>
  )
}

export default Home