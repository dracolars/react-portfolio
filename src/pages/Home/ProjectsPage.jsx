import React from 'react';
import { projectData } from './data/projectdata';
import ProjectTile from './components/ProjectTile';
import { Slide } from 'react-awesome-reveal';

const Projects = () => {
  return (
    <section name="projects" className='page large-page'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <h2 className='pagetitle'>PROJECTS</h2>
            <p className='mx-auto my-4 pb-4'>Projects developed for learning or business purposes</p>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-6'>
              <Slide cascade damping={0.1} triggerOnce direction='up'>
                {projectData.map( (project, index) => {
                    return(<ProjectTile project={project} key={index}/>)
                })}
              </Slide>
            </div>
        </div>
    </section>
  )
}

export default Projects