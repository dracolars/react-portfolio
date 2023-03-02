import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll';
import Intro from ".//Intro";
import Contact from ".//Contact";
import Skills from ".//Skills";
import Work from ".//Work";
import ResumePDF from '../assets/Alex Laris Soft Dev Resume.pdf'


const Home = () => {
  return (

    <div name="home" className='w-full h-[100vh] bg-[#efeeed]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#c8c5b2]'>Hi my name is</p>
            <h1 className='text-4xl sm:text-6xl text-[#c3bdb3] px-3'>ALEX LARIS</h1>
            <h2 className='text-xl sm:text-4xl text-[#979795] px-3'>Becoming a Full Stack Developer </h2>
            <p className='text-gray-600 max-w[600px] px-3'> via traditional education and alternative
                methods. Some of my experience includes Web Development, Data Analytics, and Optometry</p>
            <div>
                <Link to="work" spy={true} smooth={true} duration={500} >
                <button className='text-gray-700 group border-1 border-gray-700 py-2 my-1 font-bold flex items-center hover:bg-[#6a6a68] hover:text-[#c8c5b2]'> <p className='px-2'> View Work </p>
                  <span className='group-hover:rotate-90 duration-300'> <HiArrowNarrowRight className='ml-1'/>  </span>
                </button>
                </Link>

                <a href={ResumePDF} target="_blank" className="inline-block" > 
                  <button className='text-gray-700 group border-1 border-gray-700 py-2 font-bold flex items-center hover:bg-[#6a6a68] hover:text-[#c8c5b2]'> 
                    <p className='px-2'>View Resume</p>
                    <span className='group-hover:rotate-90 duration-300'> <HiArrowNarrowRight className='ml-1'/>  </span> 
                  </button>
                </a>
            </div>
        </div>

        <Intro/>
        <Skills/>
        <Work/>
        <Contact/>
    </div>
  


  )
}

export default Home