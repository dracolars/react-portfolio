import React from 'react'
import AlexPortrait from '../assets/IMG_5633-Edited-Final.jpg'

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
            <div className='max-w-[800px] w-full grid sm:grid-cols-2 gap-8 px-4 pt-6'>
                <div className='flex justify-center items-center'>
                <img className="sm:w-50 md:w-40 w-40 mx-auto max-h-65" src={AlexPortrait} alt="Portrait"></img>
                </div>
                <div>
                    <p className='text-3xl py-2'>Hi I am Alex, nice to meet you. Take a look around.</p>
                    <p>I am passionate about building inclusive software solutions that
                        help others improve healthcare, education, and entrepreneurial fields. My expertise includes analytics for industrial clients, creating app demos, automating patient claims in the healthcare industry, and more. 
                    </p>
                </div>
            </div>
            <div className='max-w-[800px] w-full grid sm:grid-cols-2 gap-8 px-4 py-6 sm:py-10'>
                <div>
                    <p className='font-[400] sm:text-right'> The technologies and tools that I live by 
                        <span className='font-[200] italic sm:text-right'> (how I spend my time)</span> :
                    </p>
                   
                </div>
                <div>
                   <ul className="tech-ul">
                        <li><b>VS Code</b> - The perfect all-in-one code editor. Atom is a good second.</li>
                        <li><b>Photoshop</b> - I dabble in photography and this tool is critical for color correction.</li>
                        <li><b>Notion</b> - Habit trackers and personal organization.</li>
                        <li><b>TikTok</b> - Great source of entertainment, tutorials, and recipes.</li>
                   </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Intro