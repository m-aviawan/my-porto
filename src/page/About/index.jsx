import React from 'react'
import Achievement from '../../component/Achievement'
import Description from '../../component/Description'
import Grid from '../../component/Grid'
import Skill from '../../component/Skill'

const About = ({progress, skills}) => {
  return (
        <div className='mx-auto'>
          <div className='grid gap-8' style={{gridTemplateColumns: '1fr'}}>
              <Grid  iteration='90' opcty='0.1' zIdx='-20' gridTemCol='10'/>
              <h1 className='text-6xl font-bold text-slate-800'>About Me</h1>
              <div>
              <Description/>
              </div>
              <div>
              <Achievement progress={progress}/>
              </div>
              <div>
              <Skill skills={skills}/>    
              </div>
          </div>
        </div>
  )
}

export default About
