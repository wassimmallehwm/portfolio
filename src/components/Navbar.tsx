import React, { useState } from 'react'
import logo from '../assets/logo-128.png'
import { FaBars, FaGithub, FaLinkedin, FaTimes } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleNav = () => setIsOpen(!isOpen)

    return (
        <nav className='fixed w-full h-20 flex justify-between items-center px-4 bg-slate-100 text-primary'>
            <div>
                <img src={logo} alt='Logo' className='w-20' />
            </div>
            <ul className='hidden md:flex'>
                <li className='mx-1 py-1 font-bold border-b-2 border-b-transparent hover:border-b-primary'>
                    <a href='#home'>
                    Home
                    </a>
                </li>
                <li className='mx-1 py-1 font-bold border-b-2 border-b-transparent hover:border-b-primary'>
                    <a href='#about'>
                    About
                    </a>
                </li>
                <li className='mx-1 py-1 font-bold border-b-2 border-b-transparent hover:border-b-primary'>
                    <a href='#skills'>
                    Skills
                    </a>
                </li>
                <li className='mx-1 py-1 font-bold border-b-2 border-b-transparent hover:border-b-primary'>
                    <a href='#work'>
                    Work
                    </a>
                </li>
                <li className='mx-1 py-1 font-bold rounded-md border-2 border-primary hover:bg-primary hover:text-slate-100'>
                    <a href='#contact'>
                    Contact
                    </a>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={toggleNav} className='md:hidden z-10 cursor-pointer'>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>


            {/* Mobile menu */}
            <ul className={isOpen ? 'absolute top-0 left-0 w-full h-screen bg-slate-100 text-primary flex flex-col justify-center items-center' : 'hidden'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>Home</li>
            </ul>

            {/* social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0 '>
                <ul>
                    <li className='w-40 h-12 py-2 -ml-24  text-slate-100 bg-linkedin hover:ml-0 duration-500'>
                        <a target="_blank" href='https://www.linkedin.com/in/wassim-malleh/' className='flex justify-between items-center'>
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-40 h-12 py-2 -ml-24  text-slate-100 bg-black hover:ml-0 duration-500'>
                        <a target="_blank" href='https://github.com/wassimmallehwm' className='flex justify-between items-center'>
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-40 h-12 py-2 -ml-24  text-slate-100 bg-green-600 hover:ml-0 duration-500'>
                        <a href='flex' className='flex justify-between items-center'>
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className='w-40 h-12 py-2 -ml-24  text-slate-100 bg-gray-400 hover:ml-0 duration-500'>
                        <a href='flex' className='flex justify-between items-center'>
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar