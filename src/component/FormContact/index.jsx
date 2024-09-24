import React from 'react'
import { useState } from 'react'

const FormContact = () => {
    const [hasSubmitted, setHasSubmitted] = useState(false)

    function HandleSubmit(e) {
        e.preventDefault()
        setHasSubmitted(true)
    }

  return (
    <div className='z-0 w-full absolute top-0 left-0 md:w-[50%] flex justify-center items-center h-screen pb-[200px] pt-[100px]'>
        {!hasSubmitted ? (<form onSubmit={HandleSubmit} className='z-[1] flex flex-col gap-1 w-[80%] mx-auto relative top-[50px] md:top-0'>
            <h1 className='sm:text-3xl text-xl font-bold mb-3'>What's your opinion</h1>
            <label className="input input-bordered flex items-center gap-2 drop-shadow-md ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" className="grow" placeholder="Username" />
            </label>
            <label className="input input-bordered flex items-center gap-2 drop-shadow-md ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path
                  d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <textarea className="textarea textarea-bordered textarea-md w-full textarea-primary drop-shadow-md " placeholder="Please give your message here..."></textarea>
            <button type='submit' className="btn text-lg font-bold btn-neutral mt-7 drop-shadow-md ">Send</button>
          </form>) : <h1 className='text-xl font-bold flex items-center justify-center h-[50vh]'>Your message has delivered to Avi, Thank You!</h1>}
          
    </div>
    
  )
}

export default FormContact
