import React from 'react'

const mySocialMedia = [
    {
        name: 'Whatsapp',
        img: 'https://seeklogo.com/images/W/whatsapp-icon-logo-BDC0A8063B-seeklogo.com.png'
    },
    {
        name: 'Instagram',
        img: 'https://www.cdnlogo.com/logos/i/93/instagram.svg'
    },
    {
        name: 'LinkedIn',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/900px-LinkedIn_logo_initials.png?20140125013055'
    },
]

const SocialMedia = () => {
  return (
    <nav className='flex justify-center items-end h-[95%] mt-3'>
    <ul className="grid grid-flow-col gap-2">
        {
            mySocialMedia.map(({name, img}, index )=> {
                return (
                    <li key={index}>
                        <img 
                        src={img} 
                        alt={name.toLowerCase() + '_logo'}
                        width={35}
                        className='opacity-30 hover:opacity-100'/>
                    </li>
                )
            })
        }
    </ul>
  </nav>
  )
}

export default SocialMedia
