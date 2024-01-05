import React from 'react'
import AlexPortrait from '../../assets/IMG_5633-Edited-Final.jpg'

const Intro = () => {
  return (
    <section name='intro' className='page large-page'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <h2 className='pagetitle'>INTRO</h2>
            <section className='max-w-[800px] w-full grid sm:grid-cols-2 gap-8 px-4 pt-2'>
                <div className='flex justify-center items-center'>
                <img className="sm:w-50 md:w-40 w-40 mx-auto max-h-65 rounded-md" src={AlexPortrait} alt="Alex Laris's portrait"></img>
                </div>
                <div>
                    <h3 className='text-3xl py-2'>Hi I am Alex. Nice to meet you. Take a look around.</h3>
                    <p>I am passionate about creating intuitive software solutions in healthcare, education, and entrepreneurial fields. My expertise includes developing data pipelines, data modeling, business intelligence, and automation in the healthcare industry.
                    </p>
                </div>
            </section>
            <article className='max-w-[800px] w-full grid sm:grid-cols-2 gap-8 px-4 pt-6 sm:py-10'>
                <div>
                    <p className='font-[400] sm:text-right'> The technologies and tools that I live by 
                        <span className='font-[200] italic sm:text-right'> (how I spend my time)</span> :
                    </p>
                </div>
                <div className='pb-10 md:pb-0'>
                   <ul className="tech-ul">
                        <li><b>VS Code</b> - The perfect all-in-one code editor for programming and web applications.</li>
                        <li><b>Notion</b> - Habit trackers and personal organization.</li>
                        <li><b>Power BI</b> - Custom data visualizations that drive business intelligence and Analysis.</li>
                        <li><b>Codecademy</b> - Amazing source for learning programming languages and keeping you accountable for your progress.</li>
                   </ul>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Intro