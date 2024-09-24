import React from 'react'
import { useState } from 'react'
import './index.css'


const Home = () => {
  const [visitorName, setVisitorName] = useState('')
  const [nameText, setNameText] = useState('Welcome')
  let isSubmitted = false

  function HandleChange(e) {
    setVisitorName('Hi, ' + e.target.value)
  }
  
  function HandleSubmit(e) {
    e.preventDefault()
    setNameText(visitorName)
    if (nameText !== 'Welcome') isSubmitted = true
  }

  return (
    <div className='grid gap-3 grid-cols-1'>
      <div className="text-anim">
        <svg id='svg-anim-welcome'>
          <text x="50%" y="50%" dy=".35em" textAnchor="middle" id='text-svg-anim' className='font-bold sm:text-8xl text-5xl'>
          {nameText == '' ? 'Welcome' : nameText}
          </text>
        </svg>
      </div>
      <p className='text-xl mx-auto w-4/5 sm:w-2/5'>I'm <span className='font-bold'>Muhamad Fauzi Aviawan</span> as Junior Front-End Developer </p>
      {( nameText == 'Welcome' || nameText == '' )  && (<form onSubmit={HandleSubmit} className='hidden sm:flex sm:mx-auto'>
        <input onChange={HandleChange} name='visitor-name' type="text" placeholder="Please input your name..." className="drop-shadow-md input input-bordered w-full max-w-xs" />
        <button className="btn btn-neutral font-bold text-lg drop-shadow-md ml-1">Let's try</button>
      </form>)}
    </div>
  )
}

export default Home
