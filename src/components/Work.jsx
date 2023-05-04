import React from 'react';
import EyemedCover3 from '../assets/EyemedCover9.png';
import GA4 from '../assets/GACover2.png';
import MetlSpan from '../assets/MetlSpanCover2.png';
import Spootify from '../assets/Spootify-Cover.png';
import PianoPlayer from '../assets/Piano-player-Cover.png';
import { Link } from "react-router-dom";


const Work = () => {
  return (
    <section name="work" className='page big-page'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <h2 className='pagetitle'>WORK</h2>
            <p className='mx-auto my-4 pb-4'>Check some of my recent work</p>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 pb-6'>

                <div style={{backgroundImage: `url(${Spootify})`}}  className='shadow-lg shadow-[#040c16] group container rounded-sm flex justify-center items-center mx-auto content-div'>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='work-cover-text'>
                            Spotify Playlist Builder (React Front-End Project)
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://spootify.alexdemos.net/" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-black hover:text-white'>Demo</button>
                            </a> 
                            <a href='https://github.com/dracolars/Spootify-API' target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-black hover:text-white'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${PianoPlayer})`}}  className='shadow-lg shadow-[#040c16] group container rounded-sm flex justify-center items-center mx-auto content-div'>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='work-cover-text'>
                            JS Piano Player
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://dracolars.github.io/piano-player-js/" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-black hover:text-white'>Demo</button>
                            </a> 
                            <a href='https://github.com/dracolars/piano-player-js' target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-black hover:text-white'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${EyemedCover3})`}}  className='shadow-lg shadow-[#040c16] group container rounded-sm flex justify-center items-center mx-auto content-div'>
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

                    <div style={{backgroundImage: `url(${GA4})`}}  className='shadow-lg shadow-[#040c16] group container rounded-sm flex justify-center items-center mx-auto content-div'>
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

                    <div style={{backgroundImage: `url(${MetlSpan})`}}  className='hidden md:block shadow-lg shadow-[#040c16] group container rounded-sm flex justify-center items-center mx-auto content-div'>
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
    </section>
  )
}

export default Work