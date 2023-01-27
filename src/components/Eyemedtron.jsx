import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'


const Eyemedtron = () => {
  return (
    <div name='title' className='content-page'>

      <div className='text-center m-auto'>
        <p className='content-title'>Eyemedtron</p>
      </div>

      <div className='grid grid-cols-3 place-items-center pt-8 xl:pl-[20em] xl:pr-[20em] overflow-hidden'>
        <div className='p-4 md:ml-30'>
          <div className='h-[8em] min-w-[6em] xl:h-[14em] xl:w-[10em] bg-[#D9D9D9]'></div>
          <p className='text-center pt-[0.5em]'>1-View GUI</p>
        </div>
        <div className='p-2 mr-[3em] xl:mr-[10em]'>
          <HiArrowNarrowRight className='text-3xl'/>
        </div>
        <div className='p-4 mr-6 md:ml-30 relative'>
          <div className='h-[5em] w-[7em] xl:w-[12em] xl:h-[8em] bg-[#fff] -top-[3.5em] -right-[2.5em] xl:-top-[6em] xl:-right-[6em] absolute'></div>
          <div className='h-[5em] w-[7em] xl:w-[12em] xl:h-[8em] bg-[#bbbbbb] -top-[3em] -right-[2.0em] xl:-top-[4em] xl:-right-[4em] absolute'></div>
          <div className='h-[5em] w-[7em] xl:w-[12em] xl:h-[8em] bg-[#a2a1a1] -top-[2.5em] -right-[1.5em] xl:-top-[2.5em] xl:-right-[2em] absolute'></div>
          <div className='h-[5em] w-[7em] xl:w-[12em] xl:h-[8em] bg-[#6f6f6f] -top-[2em] -right-[1em] xl:-top-[1em] xl:-right-[0em] absolute'></div>
          <p className='text-center w-[10em] top-[4.5em] -right-[2.5em] xl:top-[7.5em] xl:right-[1em] absolute '>Multiple Pages</p>
        </div>
      </div>

      <div className='project-meta'>
        <p>Bird's Eye View Optometry</p>
        <p>2021</p>
      </div>

      <div className='xl:px-[4em] xl:py-8'>
        {/* COL 1*/}
        <div>
          <p className='font-semibold'>Issue:</p>
          <p>This office's insurance claim processing system was time consuming, repetitive, and vulnerable to user error.</p>
          <p className='font-semibold pt-2'>Proposed Solution:</p>
          <p>A simple Python Tkinter GUI that will take all user input in one view. Dropdown menus, checkboxes, and error validation statements, will help automize all Eyemed claims.</p>
          <p className='font-semibold pt-2'>Technologies Used:</p>
          <p>Python, Selenium, PyCharm, Tkinter</p>
          <p className='font-semibold pt-2'>Results:</p>
          <p>Reduced online claims' times by 80% </p>
          <p>Reduced user input error by 75% by providing error messages and validation </p>
          <p>Following an agile approach, we improved user experience based on feedback so the entire team could use the automation tool. </p>
        </div>
        
        <div></div>
      </div>

    </div>
  )
}

export default Eyemedtron