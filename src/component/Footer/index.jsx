import React from 'react'
import GridNormal from '../GridNormal'
import Status from '../Status'
import SocialMedia from '../SocialMedia'

const Footer = ({techStack, myWorkAvailStats}) => {
  return (
    <footer className="footer hidden bg-zinc-900 text-neutral-content fixed z-0 bottom-0 right-0 p-4 sm:grid h-[content]" style={{gridTemplateColumns: 'repeat(7, 1fr)'}}>
  <GridNormal iteration="1000" opcty="0.1" zIdx="-10" gridTemCol="50" />
  <aside  style={{gridColumn: '1/5'}} className='h-[100%] text-left'>
      <h3 className='text-3xl font-bold sm:contents hidden'>Muhamad Fauzi Aviawan</h3><br />
      <p className='md:w-[55%] hidden md:contents'>Front-End Web Development and Back-End Web Development antusiast since 2024</p>
  </aside>
  <div style={{gridColumn: '7/8'}} className='w-full'>
    <Status myWorkAvailStats={myWorkAvailStats}/>
  </div>
  <div style={{gridColumn: '6/8', gridRow: '2/3'}} className='flex gap-2 justify-start items-center pt-0'>{
    techStack.map((item, index) => {
      return (
        <div key={index}>
          <img src={item.logo} alt={index + '-logo'} width='50px'/>
        </div>
      )
    })
  }</div>
  <SocialMedia />


</footer>
  )
}

export default Footer
