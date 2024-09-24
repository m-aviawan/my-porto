import React from 'react'
import GridNormal from '../GridNormal'
import Status from '../Status'
import SocialMedia from '../SocialMedia'

const Footer = ({techStack, myWorkAvailStats}) => {
  return (
  <footer className="footer hidden bg-zinc-900 text-neutral-content fixed z-0 bottom-0 right-0 p-3 sm:flex items-center justify-between h-[content]">
  <GridNormal iteration="1000" opcty="0.1" zIdx="-10" gridTemCol="50" />
  <aside className='h-[100%] text-left'>
      <h3 className='text-3xl font-bold sm:contents hidden'>Muhamad Fauzi Aviawan</h3><br />
      <p className='md:w-[55%] hidden md:contents mb-4'>Front-End Web Development antusiast since 2024</p>
      <SocialMedia />
  </aside>
  <div className='flex gap-[30px] justify-start items-start pt-0'>
    <div>
      <Status myWorkAvailStats={myWorkAvailStats}/>
    </div>
    <div className='flex gap-1 justify-end pt-0'>
    {
    techStack.map((item, index) => {
      return (
        <div key={index}>
          <img src={item.logo} alt={index + '-logo'} width='30px' className='opacity-30 hover:opacity-100'/>
        </div>
      )
    })
    }
    </div>
  </div>


</footer>
  )
}

export default Footer
