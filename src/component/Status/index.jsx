import React from 'react'
import { Link } from 'react-router-dom'

const Status = ({myWorkAvailStats}) => {
  const myStyle = myWorkAvailStats == 'YES' && {color: 'gold', opacity: '0.9'}

  return (
    <div className="stat p-0">
    <div className="stat-title text-slate-200">Availability to Work</div>
    <div className='mt-2 mb-[-5px] stat-value text-2xl animate-bounce' style={myStyle}>{myWorkAvailStats}</div>
    <div className="stat-actions">
      <Link to='/contact'><button className="btn btn-xs btn-success">Contact Me</button></Link>
    </div>
  </div>
  )
}

export default Status

