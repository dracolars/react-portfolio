import React from 'react'
import AlexPortrait from '../assets/Portrait Ed.png'

const Intro = () => {
  return (
    <div name='intro' className='w-full h-screen bg-[#efeeed] text-gray-700'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4 pt-2'>
                    <p className='pagetitle'>INTRO</p>
                </div>
                <div>
                </div>
            </div>
            <div className='max-w-[800px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='flex justify-center items-center'>
                <img className="sm:w-50 md:w-40 w-40 mx-auto max-h-65" src={AlexPortrait} alt="Portrait"></img>
                </div>
                <div>
                    <p className='text-3xl pb-4'>Hi I am Alex, nice to meet you. Take a look around.</p>
                    <p>I am passionate about building excellent and intuitive software solutions that
                        help others improve their healthcare, education, and entrepreneurial spirit. Most of 
                        my expertise comes from managing analytics for industrial clients, creating app demos, and automating patient claims in the healthcare industry. 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Intro