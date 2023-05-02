import React, {useState} from 'react'
import {FaBars, FaTimes, FaLinkedin, FaGithub} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import Logo from '../assets/Alex Laris Portfolio Logo.png'
import {scroller} from 'react-scroll';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const[nav, setNav] = useState(false);
    const[color, setColor] = useState("dark");
    let body = document.body;
    const handleClick = () => setNav(!nav)

    const navigate = useNavigate()
    const scrollTarget = (target) => scroller.scrollTo(target, {smooth: true, duration: 500});
    
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

    const handleColorChange = (e) => {
        if(color === "light"){
            e.target.innerHTML = "dark mode";
            setColor("dark");
            body.classList.add("dark");
        }
        else if(color === "dark"){
            e.target.innerHTML = "light mode";
            setColor("light");
            body.classList.remove("dark");
        }
    }


  return (
    <header id="header" className="fixed w-full h-[60px] flex justify-between items-center px-4 z-10">
                <img id="logo" onClick={() => scrollToPage('home')} className="cursor-pointer" title="Home" src={Logo} alt="Alex Laris Logo" style={{width: '90px'}}/>

        {/* Menu */}
        <nav className="menu-div">
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
            <div onClick={handleClick} className='md:hidden z-10 fixed right-0 top-0 p-5 hover:cursor-pointer'>
                {!nav ? <FaBars /> : <FaTimes/>}
            </div>
            {/* Mobile Menu */}
            <ul id="mobile-menu" className={!nav ? 'hidden' : 'fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center md:hidden'}>
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
        </nav>

            {/* Social Icons */}
            <div id="social-links" className='hidden lg:flex fixed flex-col top-[75%] left-0'>
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
                        <a className='flex justify-between items-center w-full text-gray-200' href='mailto:contact@alexdemos.net' target="_blank" rel="noopener noreferrer">
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                </ul>
            </div>

            <div className='lg:flex fixed flex-col top-[70px] left-[1%] hover:cursor-pointer'>
                <p id="color-mode" onClick={handleColorChange} className='text-xs font-bold py-2 px-4'>dark mode</p>
            </div>
    </header>
  )
}

export default Navbar