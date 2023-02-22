import React, {useState} from 'react'
import {FaBars, FaTimes, FaLinkedin, FaGithub} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import Logo from '../assets/Alex Laris Portfolio Logo.png'
import {scroller} from 'react-scroll';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const[nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const navigate = useNavigate()
    const scrollTarget = (target) => scroller.scrollTo(target, { smooth: true, duration: 500});
    
    const scrollToPage = (target) => {
        if (window.location.pathname !== "/") {
            console.log(window.location.pathname);
            navigate("/");
        }
        setTimeout(function(){
            if (nav){
                handleClick();
            }
            scrollTarget(target);
        }, 100);
    }
  return (
    <div className="fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#f5f4f3] text-gray-700 z-10">
        <div>
            <div onClick={() => scrollToPage('home')}>
                <img className="bg-[#f5f4f3] hover:bg-[#ffffff]" title="Home" src={Logo} alt="Logo" style={{width: '90px'}}/>
            </div>
        </div>

        {/* Menu */}
        <div className="menu-div">
            <ul className='hidden md:flex'>
                <li>
                    <div onClick={() => scrollToPage('home')}>
                        HOME
                    </div>
                </li>
                <li>
                    <div onClick={() => scrollToPage('intro')}>
                        INTRO
                    </div>
                </li>
                <li>
                    <div onClick={() => scrollToPage('skills')}>
                        SKILLS
                    </div>
                </li>
                <li>
                    <div onClick={() => scrollToPage('work')}>
                        WORK
                    </div>
                </li>
                <li>
                    <div onClick={() => scrollToPage('contact')}>
                        CONTACT
                    </div>
                </li>
            </ul>
        

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes/>}

            </div>
            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#f5f4f3] flex flex-col justify-center items-center'}>
                <li className='py-6 text-3xl'><div onClick={() => scrollToPage('home')}>
                    HOME
                </div></li>
                <li className='py-6 text-3xl'><div onClick={() => scrollToPage('intro')}>
                    INTRO
                </div></li>
                <li className='py-6 text-3xl'><div onClick={() => scrollToPage('skills')}>
                    SKILLS
                </div></li>
                <li className='py-6 text-3xl'><div onClick={() => scrollToPage('work')}>
                    WORK
                </div></li>
                <li className='py-6 text-3xl'><div onClick={() => scrollToPage('contact')}>
                    CONTACT
                </div></li>
            </ul>

            {/* Social Icons */}
            <div className='hidden lg:flex fixed flex-col top-[75%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#979795] hover:bg-[#6a6a68]'>
                        <a className='flex justify-between items-center w-full text-gray-200' href='https://linkedin.com/in/alex-laris' target="_blank" rel="noopener noreferrer">
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#90908d] hover:bg-[#6a6a68]'>
                        <a className='flex justify-between items-center w-full text-gray-200' href='https://github.com/dracolars' target="_blank" rel="noopener noreferrer">
                            GitHub <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#8a8a87] hover:bg-[#6a6a68]'>
                        <a className='flex justify-between items-center w-full text-gray-200' href='mailto:adlaris@uh.edu' target="_blank" rel="noopener noreferrer">
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar