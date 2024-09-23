import React from 'react'

const GridNormal = ({iteration, opcty, zIdx, gridTemCol}) => {
    const arrDiv = []
    for(let i = 0; i < iteration; i++) {
      arrDiv.push(<div key={i} style={{border: '1px solid gold'}}></div>)
    }
  
    return (
      <div className='grid absolute h-[100%] w-[100%] top-0 right-0' style={{zIndex: `${zIdx}`, opacity: `${opcty}`, border: '1px solid gray', gridTemplateColumns: `repeat(${gridTemCol}, 1fr)`}}>
          {arrDiv}
      </div>
    )
  }
  

export default GridNormal