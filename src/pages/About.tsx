import React from 'react'

import myImg from '../assets/me.png'
const About = () => {
  return (
    <div id="about" className='w-full h-screen bg-slate-100 text-primary'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[900px] w-full px-4 grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 px-2'>
            <p className='text-4xl font-bold inline border-b-4 border-primary_blur'>
              About
            </p>
          </div>
        </div>


        <div className='max-w-[900px] w-full px-4 grid sm:grid-cols-2 gap-8'>

          <div className='flex flex-col items-center justify-center'>
            <p className='sm:text-right text-4xl font-bold pb-8 px-4 md:pl-4 md:pr-2'>
              Hi, I'm Wassim, Nice to meet you. Please take a look around.
            </p>
            <p className='text-justify px-4 font-bold'>
              I'm a software developer who constantly seeks out innovative solutions to everyday problems.
              I am passionate about improving my skills and overcoming challenges. I like to communicate with different people and exchange knowledge.
            </p>
          </div>
          <div>
            <div className='flex justify-center items-center'>
              <img className='rounded-full shadow-lg shadow-primary_shadow_light w-64' src={myImg} alt="Wassim Malleh" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About