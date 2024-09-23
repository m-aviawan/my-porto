import React from 'react'
import Grid from '../../component/Grid'
import FormContact from '../../component/FormContact'
import './index.css'

const Contact = ({myNameSeparated}) => {

  return (
    <div className='grid gap-9 md:grid-cols-2 grid-cols-1' >
      <Grid  iteration='90' opcty='0.1' zIdx='-20' gridTemCol='18'/>
      <div className='absolute top-0 right-0 -z-10 md:w-[50vw] w-screen h-[100vh] flex-col md:flex hidden'>
      <div className="glitch-wrapper mb-5">
        {
          myNameSeparated.map((item, index) => {
            return(
              <div key={index} className="glitch lg:text-7xl md:text-5xl drop-shadow-lg" data-text={item}>Contact Me?</div>
            )
          })
        }
      </div>
      </div>
      <FormContact />
    </div>
  )
}

export default Contact
