import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Grid from './component/Grid'
import Footer from './component/Footer'
import FooterMobile from './component/FooterMobile'
import DropdownMenu from './component/DropdownMenu'


import { Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import Contact from './page/Contact'

const techStackLogoArr = [
  {
    name: 'HTML',
    color: 'white',
    bg: 'orange',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png'
  },
  {
    name: 'CSS',
    color: 'white',
    bg: 'blue',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg'
  },
  {
    name: 'JavaScript',
    color: 'black',
    bg: 'yellow',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
  },
  {
    name: 'NodeJS',
    color: 'black',
    bg: 'green',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png'
  },
  {
    name: 'React',
    color: 'aqua',
    bg: 'darkgrey',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png'
  },
  {
    name: 'Tailwind',
    color: 'aqua',
    bg: 'white',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/768px-Tailwind_CSS_Logo.svg.png?20230715030042'
  },
  {
    name: 'DaisyUI',
    color: 'black',
    bg: 'aquamarine',
    logo: 'https://img.daisyui.com/images/daisyui-logo/daisyui-logomark-1024-1024.png'
  }
] 

const webDeveloperProgress = [
  {
    year: 2024,
    achievement: 'Deploy first web portofolio'
  },
  {
    year: 2025,
    achievement: 'Graduated from Purwadhika School'
  }
]

const workAvailStats = 'YES'
const myNameSeparated = ['Muhamad', 'Fauzi', 'Aviawan']

function App() {
  return (
    <div className='mt-[70px] mb-[38vh] min-w-min min-h-min'>
      <div>
        <Navbar />
        <DropdownMenu />
        <Grid iteration='12' opcty='0.2' zIdx='-20' gridTemCol='4'/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contact' element={<Contact myNameSeparated={myNameSeparated}/>}/>
          <Route path='/about' element={<About progress={webDeveloperProgress} skills={techStackLogoArr} />}/>
        </Routes>
      </div>
      <FooterMobile techStackMobile={techStackLogoArr} />
      <Footer techStack={techStackLogoArr} myWorkAvailStats={workAvailStats}/>
    </div>
  )
}

export default App
