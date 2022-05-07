import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll';


const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-green-200'>Hi my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Alex Laris</h1>
            <h2 className='text-xl sm:text-4xl font-bold text-gray-400'>Learning to be a Full Stack Developer </h2>
            <p className='text-gray-600 max-w[600px]'> via traditional education and alternative
                methods. I have experinece in Data Analytics, Web Development, and Optometry</p>
            <div>
                <Link to="work" spy={true} smooth={true} duration={500} >
                <button className='text-gray-700 group border-1 border-gray-700 px-5 py-2 my-1 flex items-center hover:bg-green-200'> View Work 
                  <span className='group-hover:rotate-90 duration-300'> <HiArrowNarrowRight className='ml-3'/>  </span>
                </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home