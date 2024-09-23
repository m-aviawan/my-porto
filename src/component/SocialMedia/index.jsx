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
    <nav style={{gridColumn: '1/5'}} className='flex justify-center items-end h-[95%] p'>
    <h6 className="footer-title">Social Media</h6>
    <ul className="grid grid-flow-col gap-2">
        {
            mySocialMedia.map(({name, img}, index )=> {
                return (
                    <li key={index}>
                        <img 
                        src={img} 
                        alt={name.toLowerCase() + '_logo'}
                        width={40}/>
                    </li>
                )
            })
        }
    </ul>
  </nav>
  )
}

export default SocialMedia
