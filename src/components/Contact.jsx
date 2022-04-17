import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#1b1ba5] flex justify-center items-center p-4'>
        <form action="" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-[#ccd6f6]'>Contact</p>
                <p className='text=[#ccd6f6]'> You can reach me by submitting the form below or you can send me an email to addyrodriguez18@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#ccd6f6]'type="email" placeholder='Email' name='email'/>
            <textarea className="bg-[#ccd6f6] p-2" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-black px-4 py-3 my-8 mx-auto'>Let's Talk!</button>
        </form>
    </div>
  )
}

export default Contact