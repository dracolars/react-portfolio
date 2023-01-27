import React from 'react'
import WorkImg from '../assets/workImg.jpeg'
import EyemedOnline from '../assets/eyemed-online-claims.png'
import RPortfolio from '../assets/react-portfolio.png'
import EcommStore from '../assets/sports-store-placeholder.png'
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

            <div style={{backgroundImage: `url(${EcommStore})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Ecommerce WP Site
                        </span>

                        <div className='pt-8 text-center'>
                            <a href='/'> 
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-black hover:text-white'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-black hover:text-white'>Code</button>
                            </a>
                        </div>

                    </div>
                </div>

                <div style={{backgroundImage: `url(${WorkImg})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href='/'> 
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-black hover:text-white'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-black hover:text-white'>Code</button>
                            </a>
                        </div>

                    </div>
                </div>

                <div style={{backgroundImage: `url(${EyemedOnline})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Online Insurance Automation System
                        </span>

                        <div className='pt-8 text-center'>
                            <Link to="/eyemedtron">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-black hover:text-white'>Demo</button>
                            </Link> 
                            <a href='https://github.com/dracolars/eyemed-autoclaim/blob/main/main.py'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-black hover:text-white'>Code</button>
                            </a>
                        </div>

                    </div>
                </div>

                <div style={{backgroundImage: `url(${RPortfolio})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Portfolio
                        </span>

                        <div className='pt-8 text-center'>
                            <Link to="/eyemedtron">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-black hover:text-white'>Demo</button>
                            </Link> 
                            <a href='https://github.com/dracolars/eyemed-autoclaim/blob/main/main.py'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-black hover:text-white'>Code</button>
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