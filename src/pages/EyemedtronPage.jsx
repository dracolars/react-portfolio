import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'


const Eyemedtron = () => {
  return (
    <main name='title' className='content-page'>
      <h1 className='content-title'>Eyemedtron</h1>
      <section className='grid grid-cols-3 place-items-center pt-8 xl:pl-[20em] xl:pr-[20em] overflow-hidden'>
        <div className='p-4 md:ml-30'>
          <div className='h-[8em] min-w-[6em] xl:h-[14em] xl:w-[10em] bg-[#D9D9D9]'></div>
          <p className='text-center pt-[0.5em]'>One-View GUI</p>
        </div>
        <div className='p-2 mr-[3em] xl:mr-[8em]'>
          <HiArrowNarrowRight className='text-3xl'/>
        </div>
        <div className='p-4 mr-6 md:ml-30 relative'>
          <div className='h-[5em] w-[7em] xl:w-[12em] xl:h-[8em] bg-[#fff] -top-[3.5em] -right-[2.5em] xl:-top-[6em] xl:-right-[6em] absolute'></div>
          <div className='h-[5em] w-[7em] xl:w-[12em] xl:h-[8em] bg-[#bbbbbb] -top-[3em] -right-[2.0em] xl:-top-[4em] xl:-right-[4em] absolute'></div>
          <div className='h-[5em] w-[7em] xl:w-[12em] xl:h-[8em] bg-[#a2a1a1] -top-[2.5em] -right-[1.5em] xl:-top-[2.5em] xl:-right-[2em] absolute'></div>
          <div className='h-[5em] w-[7em] xl:w-[12em] xl:h-[8em] bg-[#6f6f6f] -top-[2em] -right-[1em] xl:-top-[1em] xl:-right-[0em] absolute'></div>
          <p className='text-center w-[10em] top-[4.5em] -right-[2.5em] xl:top-[7.5em] xl:right-[1em] absolute '>Multiple Claim Pages</p>
        </div>
      </section>

      <aside className='project-meta'>
        <p>Bird's Eye View Optometry</p>
        <p>2021</p>
      </aside>

      <article className='xl:px-[4em] xl:py-8'>
        {/* COL 1*/}
          <p className='font-semibold'>Issue:</p>
          <p>This office's insurance claim processing system was time consuming, repetitive, and vulnerable to user error. At the time, they were entering each patient manually and
           not keeping clear documentation of claims that were completed. The insurance company's website is outdated and it took 
           going to about 5 pages to submit a claim. Submitting a claim was costing them organization and resources.</p>
          <p className='font-semibold pt-2'>Proposed Solution:</p>
          <p>A graphical interface whose input (Date, Insured ID, Practicioner, Medical Code and Procedures) will be gathered in one view and this will then trigger validation, then transfer data to
            the insurance website. After all data was inputted, the program takes the user to a review page that can then be submitted if all charges show correctly. This review can be printed and kept for claim documentation. <br/> 
            Validation came in the form of custom error messages, input field value validation, and input limits like checkboxes and dropdown lists.</p>
          <p className='font-semibold pt-2'>Technologies Used:</p>
          <p>Python, Selenium, PyCharm, Tkinter</p>
          <p className='font-semibold pt-2'>Results:</p>
          <ul>
            <li>Reduced online claims' times by 80%.</li>
            <li>Reduced user input error by 75% by providing error messages and validation.</li>
            <li>Following an agile approach, we improved user experience based on feedback so the entire team could use the automation tool.</li>
          </ul>
          <a href='https://github.com/dracolars/eyemed-autoclaim/blob/main/main.py'>
            <button className='text-center rounded-lg px-3 py-2 mt-4 bg-white text-gray-700 font-bold hover:bg-black hover:text-white'>View Code</button>
          </a>
        
      </article>

    </main>
  )
}

export default Eyemedtron