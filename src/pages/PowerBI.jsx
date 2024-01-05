import React from 'react'


const PowerBI = () => {
  return (
    <main name='title' className='content-page'>
      <h1 className='content-title'>Microsoft Power BI</h1>

      <aside className='project-meta'>
        <p>Snowfox</p>
        <p>2023</p>
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
          <p>Power BI, Python, SQL, DAX</p>
          <p className='font-semibold pt-2'>Results:</p>
          <a href='/'>
            <button className='text-center rounded-lg px-3 py-2 mt-4 bg-white text-gray-700 font-bold hover:bg-black hover:text-white'>View Code</button>
          </a>
        
      </article>

    </main>
  )
}

export default PowerBI