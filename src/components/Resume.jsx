import React from 'react'
import resume from '../assets/01_Addy Rodriguez.pdf'
import { Document, Page, pdfjs } from 'react-pdf'

const Resume = () => {
  return (
    <div name='resume' className='w-full h-screen bg-[#1b1ba5] text-[#ccd6f6]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4'>Resume</p>
                <div className='py-4'>
                  <a href={resume} download>Download Resume</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume