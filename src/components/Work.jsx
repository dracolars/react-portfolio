import React from 'react'
import EyemedCover3 from '../assets/EyemedCover9.png'
import GA4 from '../assets/GACover2.png'
import MetlSpan from '../assets/MetlSpanCover2.png'
import { Link } from "react-router-dom";


const Work = () => {
  return (
    <div name="work" className='w-full md:h-screen text-gray-700 bg-[#efeeed]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
              <div className='pb-8 py-16'>
                <p className='pagetitle'>WORK</p>
                <p className='py-6'>Check some of my recent work</p>
            </div>


            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                <div style={{backgroundImage: `url(${EyemedCover3})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='work-cover-text'>
                            Online Insurance Automation System
                        </span>

                        <div className='pt-8 text-center'>
                            <Link to="/work/eyemedtron">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-black hover:text-white'>Details</button>
                            </Link> 
                            <a href='https://github.com/dracolars/eyemed-autoclaim/blob/main/main.py' target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-black hover:text-white'>Code</button>
                            </a>
                        </div>

                    </div>
                </div>

                <div style={{backgroundImage: `url(${GA4})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='work-cover-text'>
                            Google Analytics 4 Migrations
                        </span>

                        <div className='pt-8 text-center'>
                            <Link to="/work/googleanalytics">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-black hover:text-white'>Details</button>
                            </Link> 
                           
                        </div>

                    </div>
                </div>

                <div style={{backgroundImage: `url(${MetlSpan})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='work-cover-text'>
                            MetlSpan's New Website Directory
                        </span>

                        <div className='pt-8 text-center'>
                            <Link to="/work/metlspan-reps">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-black hover:text-white'>Details</button>
                            </Link> 
                            <a href="https://metlspan.com/resources/find-a-rep/" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-black hover:text-white'>Demo</button>
                            </a> 
                        </div>

                    </div>
                </div>

            </div>


        </div>
    </div>
  )
}

export default Work