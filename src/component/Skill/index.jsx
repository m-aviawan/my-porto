import React from 'react'

const Skill = ({skills}) => {
  return (
    <div>
        <h1 className='text-3xl font-extrabold mb-8'>SKILLS</h1>
        <div className='flex flex-wrap gap-1 md:grid-cols-5 md:w-[50vw] mx-auto w-[80vw] justify-center'>
          {
            skills.map(({name, color, bg}, index) => {
              return (
                <button key={index} className="p-2 rounded-2xl opacity-75 font-bold" disabled="disabled" style={{color: `${color}`, backgroundColor: `${bg}`}}>{name}</button>
              )
            })
          }
    </div>
    </div>
  )
}

export default Skill
