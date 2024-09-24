import React from 'react'
import Grid from '../../component/Grid'
import FormContact from '../../component/FormContact'
import './index.css'

const Contact = ({myNameSeparated}) => {

  return (
    <div>
      <Grid  iteration='90' opcty='0.1' zIdx='-20' gridTemCol='18'/>
      <div>
        <div className='absolute top-0 right-0 -z-10 w-[50%] h-[100%] pb-[200px]  pt-[100px]'>
          <div className="glitch-wrapper mb-5 h-[100%] md:flex flex-col hidden">
            {
              myNameSeparated.map((item, index) => {
                return(
                  <div key={index} className="glitch 3xl:text-8xl lg:text-7xl md:text-5xl drop-shadow-lg" data-text={item}>Contact Me?</div>
                )
              })
            }
          </div>
        </div>
        <FormContact />
      </div>
    </div>
  )
}

export default Contact
