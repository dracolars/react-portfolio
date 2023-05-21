
import React from 'react'

function WorkTile({job}) {
    return(
        <section className='work-tile'>
            <div className='job-title'>
                <h3><b>{job.title}</b> @ {job.company}</h3>
                <p className='pt-1'><b>{job.dates}</b></p>
            </div>
            <p><i>{job.location}</i></p>
            <p>{job.summary}</p>
            <div className='flex flex-wrap py-2'> {job.technologies.map( (tech, index) => {
                return (
                    <p className="tech" key={"k_"+index}>{tech}</p>
                )
            })}
            </div>
            <div className='divider'></div>
        </section>
    )
}

export default WorkTile