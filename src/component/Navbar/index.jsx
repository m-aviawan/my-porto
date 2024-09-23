import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
  <div className="navbar md:flex items-center justify-center fixed top-0 right-0 hidden">
  <div className="flex-1">
    <Link to='/contact'>
            <div className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="my-photo"
                    src="https://d1hv7ee95zft1i.cloudfront.net/custom/car-model-photo/original/hyundai-stargazer-front-quarter-634f6e1abd41e.jpg" />
                </div>
            </div>  
    </Link>
  </div>
  <div>
    <ul className="flex flex-row items-center justify-center menu menu-horizontal px-1 gap-4 text-base
    ">
      {/* <li><label className="swap">
  <input type="checkbox" />
  <div className="swap-on">Light Mode</div>
  <div className="swap-off">Night Mode</div>
</label></li> */}
      <Link to='/' className='hover:font-bold' ><li>Home</li></Link>
      <Link to='/about' className='hover:font-bold'><li>About Me</li></Link>
      {/* <Link className='hover:font-bold'><li>Portofolio</li></Link> */}
      <Link to='/contact' className='hover:font-bold'><li>Contact</li></Link>
        
    </ul>
  </div>
</div>
  )
}

export default Navbar
