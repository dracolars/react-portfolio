import React from 'react';
import { jobdata } from './workdata';
import WorkTile from './components/WorkTile';
import { Fade } from 'react-reveal';


const Work = () => {
  return (
    <section name="work" className='page extra-large-page'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 pt-8 flex flex-col justify-center w-full h-full'>
            <h2 className='pagetitle'>WORK</h2>
            <Fade bottom>
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