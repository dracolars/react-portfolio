import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-green-200'>About</p>
                </div>
                <div>
                </div>
            </div>
            <div className='max-w-[800px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div>
                    <p className='sm:text-right text-3xl font-bold'>Hi. I am Alex, Nice to meet you. Take a look around.</p>
                </div>
                <div>
                    <p>I am passionate about building excellent and intuitive software solutions that
                        help others improve their healthcare, education, and entrepreneurial spirit. Most of 
                        my expertise comes from managing patients' records in Optometry.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About