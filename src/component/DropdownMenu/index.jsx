import React from 'react'
import { Link } from 'react-router-dom'

const DropdownMenu = () => {
  const classNameLi = 'text-slate-100 p-2 hover:bg-violet-700  z-[10] hover:text-yellow-400 hover:drop-shadow-md hover:font-bold'

  return (
    <div className="dropdown dropdown-end absolute top-4 right-0 w-[100vw] md:hidden">
        <div tabIndex={0} role="button" className="drop-shadow-md p-3 mx-auto mb-1 hover:animate-pulse w-[90%] rounded-md text-slate-800 font-bold">Menu</div>
        <ul tabIndex={0} className="dropdown-content menu rounded-md bg-slate-800 z-[10] w-[90%] shadow text-center relative left-0 mx-auto">
            <Link to='/'><li className={classNameLi}>Home</li></Link>
            <Link to='/about'><li className={classNameLi}>About Me</li></Link>
            <Link to='/contact'><li className={classNameLi}>Contact</li></Link>
        </ul>
    </div>
  )
}

export default DropdownMenu
