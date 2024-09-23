import React from 'react'

const Grid = ({iteration, opcty, zIdx, gridTemCol}) => {
  const arrDiv = []
  for(let i = 0; i < iteration; i++) {
    arrDiv.push(<div key={i} style={{border: '1px solid gray'}}></div>)
  }

  return (
    <div className='grid fixed top-0 right-0 rotate-45' style={{zIndex: `${zIdx}`, opacity: `${opcty}`, border: '1px solid gray', gridTemplateColumns: `repeat(${gridTemCol}, 1fr)`, height: '100vh', width: '100vw'}}>
        {arrDiv}
    </div>
  )
}

export default Grid
