import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import GitHub from '../assets/github.png'
import AWS from '../assets/aws.png'
import Node from '../assets/node.png'



const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen bg-[#efeeed] text-gray-700'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 pt-10 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='pagetitle'>SKILLS</p>
                <p className='py-4'>Some of the technologies I have worked with - </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='skillbox'>
                    <img className="w-20 mx-auto" src={HTML} alt="HTML Icon"></img>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='skillbox'>
                    <img className="w-20 mx-auto" src={CSS} alt="HTML Icon"></img>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='skillbox'>
                    <img className="w-20 mx-auto" src={JavaScript} alt="HTML Icon"></img>
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='skillbox'>
                    <img className="w-20 mx-auto" src={AWS} alt="HTML Icon"></img>
                    <p className='my-4'>AWS</p>
                </div>
                <div className='skillbox'>
                    <img className="w-20 mx-auto" src={GitHub} alt="HTML Icon"></img>
                    <p className='my-4'>GitHub</p>
                </div>
                <div className='skillbox'>
                    <img className="w-20 mx-auto" src={Node} alt="HTML Icon"></img>
                    <p className='my-4'>Node</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills