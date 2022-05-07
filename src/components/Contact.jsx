import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      {/* the free backend we used previously: https://getform.io/f/b154eeb6-f032-4311-9edd-2d7ede7fb146 */}
        <form id='portfolio-contact' action="" method='POST' enctype="multipart/form-data" className='flex flex-col max-w-[600px] w-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-green-200 text-gray-200'>Contact</p>
                <p className='text-gray-200 py-4'>//Submit the form below or shoot me an email - 
                    <a className='text-decoration-line: underline hover:text-green-200' href="mailto: adlaris@uh.edu"> adlaris@uh.edu </a>
                </p>
            </div>
            <input className='p-2 bg-[@ccd6f6]' type="text" placeholder='Name' name="name" required/>
            <input className='my-4 p-2 bg-[@ccd6f6]' type="email" placeholder='Email' name="email" required/>
            <textarea className='bg-[@ccd6f6] p-2' type="text" placeholder='Message' name="message" rows='6'/>
            <button type="submit" className='text-white border-2 hover:bg-green-200 hover:border-green-200 hover:text-gray-700 px-4 py-3 my-8 mx-auto items-center'> Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact