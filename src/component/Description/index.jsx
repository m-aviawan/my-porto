import React from 'react'

const Description = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-8'>
        <h1 className='text-3xl font-extrabold'>DESCRIPTION</h1>
        <p className='text-justify mx-auto sm:w-[90%] w-[90%]'>
            I am a beginner in front-end web development and back-end web development. I am ready to learn 
            new things about technology applications in web development. I am currently on a journey to learn 
            markup languages (<span className='font-bold text-slate-100 bg-orange-500'>HTML</span> and <span className='font-bold text-slate-100 bg-blue-600'>CSS</span>), 
            then programming languages (<span className='font-bold bg-yellow-300'>JavaScript</span>), as well as libraries or frameworks (<span className='font-bold text-teal-300 bg-gray-700'>React</span>).
            At the moment, I am open to working as a junior front-end web developer or 
            a junior back-end web developer.
        </p>
    </div>
  )
}

export default Description
