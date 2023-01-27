import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#efeeed] flex justify-center items-center p-4'>
      {/* the free backend we used previously: https://getform.io/f/b154eeb6-f032-4311-9edd-2d7ede7fb146 */}
        <form id='portfolio-contact' action="" method='POST' encType="multipart/form-data" className='flex flex-col max-w-[600px] w-full'>
            <div className='py-4'>
                <p className='pagetitle'>CONTACT</p>
                <p className='text-gray-700 py-6'>Submit the form below or shoot me an email - 
                    <a className='text-decoration-line: underline hover:text-[#979795]' href="mailto: adlaris@uh.edu"> adlaris@uh.edu </a>
                </p>
            </div>
            <input className='p-2 bg-[#ffffff]' type="text" placeholder='Name' name="name" required/>
            <input className='my-4 p-2 bg-[#ffffff]' type="email" placeholder='Email' name="email" required/>
            <textarea className='bg-[#ffffff] p-2' type="text" placeholder='Message' name="message" rows='6'/>
            <button type="submit" className='text-gray-100 bg-[#6a6a68] border-2 hover:bg-[#979795] hover:border-[#ffffff] px-4 py-3 my-8 mx-auto items-center'> Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact