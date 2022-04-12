import React from 'react'
import { HiArrowNarrowDown, HiArrowNarrowRight } from 'react-icons/hi'

import myImg from '../assets/me-blured.png'
const Home = () => {
    return (
        <div id="home" className="flex justify-center items-center h-screen bg-slate-100 text-primary">
            <div className='max-w-[900px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-primary text-lg'> Hi, My name is</p>
                <h1 className='text-7xl md:text-5xl font-bold text-primary'>Wassim Malleh</h1>
                <h2 className='text-6xl md:text-4xl font-bold text-primary_blur'>I'm a Full-Stack Developer</h2>
                <p className='py-4 max-w-2xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam aspernatur sed blanditiis ea optio distinctio?
                    Molestias ad eveniet, quos quod eligendi laudantium eaque,
                    quo distinctio voluptatem eum quas consectetur neque?
                </p>
                <div className='flex gap-4'>
                <a href='#about' className='flex justify-center items-center border-2 border-primary rounded-md w-fit px-6 py-2 font-bold hover:bg-primary hover:text-slate-100 duration-500'>
                    About Me
                    {/* <HiArrowNarrowRight className='ml-2'/> */}
                </a>
                <a href='#work' className='flex justify-center items-center border-2 border-primary rounded-md w-fit px-6 py-2 font-bold bg-primary text-slate-100 '>
                    View Work 
                    <HiArrowNarrowDown className='ml-2'/>
                </a>
                </div>
            </div>
        </div>
    )
}

export default Home