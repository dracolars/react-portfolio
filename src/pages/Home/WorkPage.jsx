import React from 'react';
import { jobdata } from './data/workdata';
import WorkTile from './components/WorkTile';
import { Fade } from 'react-awesome-reveal';

const Work = () => {
  return (
    <section name="work" className='page extra-large-page'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 pt-8 flex flex-col justify-center w-full h-full'>
            <h2 className='pagetitle'>WORK</h2>
            <Fade damping={0.1} triggerOnce direction='up'>
                {jobdata.map( (job, index) => {
                   return(
                    <WorkTile key={index} job={job}/>
                   )
                })}
            </Fade>
        </div>
    </section>
  )
}

export default Work