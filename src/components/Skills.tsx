import React from 'react'

import nodejs from '../assets/skills/node.png'
import reactjs from '../assets/skills/react.png'
import github from '../assets/skills/github.png'
import tailwind from '../assets/skills/tailwind.png'

const Skills = () => {
    return (
        <div id="skills" className='w-full h-screen bg-slate-100 text-primary'>
            <div className='max-w-[900px] mx-auto w-full h-full px-4 flex flex-col justify-center'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-primary_blur'>
                        Skills
                    </p>
                    <p className='py-4'>
                        These are the technologies I've worked with
                    </p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='py-2 shadow-md shadow-primary_shadow rounded-md hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={nodejs} alt="Node.js" />
                        <p className='my6 font-bold uppercase'>Node.js</p>
                    </div>
                    <div className='py-2 shadow-md shadow-primary_shadow rounded-md hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={reactjs} alt="Node.js" />
                        <p className='my6 font-bold uppercase'>React</p>
                    </div>
                    <div className='py-2 shadow-md shadow-primary_shadow rounded-md hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={github} alt="Node.js" />
                        <p className='my6 font-bold uppercase'>Github</p>
                    </div>
                    <div className='py-2 shadow-md shadow-primary_shadow rounded-md hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={tailwind} alt="Node.js" />
                        <p className='my6 font-bold uppercase'>Tailwind</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills