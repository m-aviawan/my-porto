import React from 'react'

const FooterMobile = ({techStackMobile}) => {
  return (
    <div>
      <div className='sm:hidden opacity-50 fixed bottom-2 right-2 flex gap-2 justify-start items-center pt-0 flex-wrap'>{
        techStackMobile.map((item, index) => {
            return (
                <div key={index}>
                <img src={item.logo} alt={index + '-logo'} width='25px'/>
                </div>
            )
            })
        }</div>
    </div>
  )
}

export default FooterMobile
