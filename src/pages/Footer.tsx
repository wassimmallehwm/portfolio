import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import resume from '../assets/Wassim_Malleh_Resume.pdf'

const Footer = () => {
    return (
        <footer className='bg-slate-100'>
            <div className='lg:hidden'>
                <div className='flex items-center justify-evenly p-4'>
                    <a target="_blank" href='https://www.linkedin.com/in/wassim-malleh/' className='bg-linkedin text-slate-100 rounded-full p-3'>
                        <FaLinkedin size={30} />
                    </a>
                    <a target="_blank" href='https://github.com/wassimmallehwm' className='bg-black text-slate-100 rounded-full p-3'>
                        <FaGithub size={30} />
                    </a>
                    <a href='mailto:wassimmalleh.wm@gmail.com' className='bg-green-600 text-slate-100 rounded-full p-3'>
                        <HiOutlineMail size={30} />
                    </a>
                    <a href={resume} download="Wassim_Malleh_Resume" className='bg-gray-400 text-slate-100 rounded-full p-3'>
                        <BsFillPersonLinesFill size={30} />
                    </a>
                </div>
            </div>
            <hr className='w-10/12 mx-auto bg-primary_shadow' />
            <div className='flex justify-center items-center p-4 text-primary font-bold'>
                Wassim Malleh
            </div>
        </footer>
    )
}

export default Footer