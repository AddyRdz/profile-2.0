import React from 'react'

const About = () => {
  return (
    <div name='about' className='w- full h-screen bg-[#1b1ba5] text-[#ccd6f6]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className= 'pb-8 pl-4'>
                   <p className='text-4xl font-bold inline border-b-4'>About</p> 
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Addy, please explore my work. Look forward to hearing from you soon.</p>
                    </div>
                    <div>
                        <p>I have always had a natural curiosity for technology and innovation, I am adaptable, resourceful, and an analytical individual with a passion for highly detailed work.  My goal as a software engineer is to be able to continue to grow and develop my skills while helping bettering those around me. I am looking for a new challenge and believe your organization and I are a great match.</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About