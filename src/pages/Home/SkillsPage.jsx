import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import AWS from '../assets/aws-logo.png';
import Node from '../assets/node.png';
import ReactIcon from '../assets/react-icon.png';
import GitHub from '../assets/github-logo.png';
import Python from '../assets/python-logo.png';



const Skills = () => {
  return (
    <section name="skills" className='page big-page'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <h2 className='pagetitle'>SKILLS</h2>
                <p className='mx-auto my-4'>Technologies I use daily - </p>
            <ul className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <li className='skillbox'>
                    <img className="w-12 h-12 md:w-20 md:h-20 mx-auto mt-2" src={JavaScript} alt="HTML Icon"></img>
                    <p className='my-4'>JavaScript</p>
                </li>
                <li className='skillbox'>
                    <img className="w-12 h-12 md:w-20 md:h-20 mx-auto mt-2" src={HTML} alt="HTML Icon"></img>
                    <p className='my-4'>HTML</p>
                </li>
                <li className='skillbox'>
                    <img className="w-12 h-12 md:w-20 md:h-20 mx-auto mt-2" src={CSS} alt="HTML Icon"></img>
                    <p className='my-4'>CSS</p>
                </li>
                <li className='skillbox'>
                    <img className="w-12 h-12 md:w-20 md:h-20 mx-auto mt-2 scale-125" src={AWS} alt="HTML Icon"></img>
                    <p className='my-4'>AWS</p>
                </li>
                <li className='skillbox'>
                    <img className="w-12 h-12 md:w-24 md:h-20 mx-auto mt-2" src={ReactIcon} alt="HTML Icon"></img>
                    <p className='my-4'>React</p>
                </li>
                <li className='skillbox'>
                    <img className="w-12 h-12 md:w-20 md:h-20 mx-auto mt-2" src={Node} alt="HTML Icon"></img>
                    <p className='my-4'>Node</p>
                </li>
                <li className='skillbox'>
                    <img className="w-12 h-12 md:w-20 md:h-20 mx-auto mt-2" src={GitHub} alt="Github Icon"></img>
                    <p className='my-4'>GitHub</p>
                </li>
                <li className='skillbox'>
                    <img className="w-12 h-12 md:w-20 md:h-20 mx-auto mt-2" src={Python} alt="Python Icon"></img>
                    <p className='my-4'>Python</p>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Skills