import React from 'react'

const BackgroundImg = () => {
  return (
    <div className='absolute left-0 top-0 -z-10'>
      <img 
      className='lg:flex hidden' 
      style={{clipPath: 'polygon(100% 0, 0 50%, 100% 18%)'}} 
      src='/img-cityscapes/20240519_072101.jpg'
      />
      <img 
      className='lg:flex hidden absolute bottom-0' 
      style={{clipPath: 'polygon(100% 73%, 0% 100%, 100% 91%)'}} 
      src='/img-cityscapes/20240519_071500.jpg'
      />
    </div>
  )
}

export default BackgroundImg
