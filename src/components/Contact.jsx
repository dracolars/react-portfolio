import React from 'react'
import { useForm } from '@formcarry/react'

const Contact = () => {
  let formstatus = "form ready";
    const {state, submit} = useForm({
      id: 'FyAaAv2e5r'
    });

    //success mesage
    if (state.submitted){
      var form = document.getElementById('portfolio-contact');
      var allformcontrols = form.elements;
      allformcontrols[0].value = ""; allformcontrols[1].value = ""; allformcontrols[2].value = "";
      formstatus = "form received. thanks!"
    }

  return (
    <div name='contact' className='w-full h-screen bg-[#efeeed] flex justify-center items-center p-4'>
        <form id='portfolio-contact' onSubmit={submit} className='flex flex-col max-w-[600px] w-full'>
            <div className='py-4'>
                <p className='pagetitle'>CONTACT</p>
                <p className='text-gray-700 py-6'>Submit the form below or shoot me an email - 
                    <a className='text-decoration-line: underline hover:text-[#979795]' href="mailto: adlaris@uh.edu"> contact@alexdemos.net </a>
                </p>
            </div>
            <input className='p-2 bg-[#ffffff]' type="text" placeholder='Name' name="name" id="name" required/>
            <input className='my-4 p-2 bg-[#ffffff]' type="email" placeholder='Email' name="email" id="email" required/>
            <textarea className='bg-[#ffffff] p-2' type="text" placeholder='Message' name="message" id="message" rows='6' required/>
            <button type="submit" className='text-gray-100 bg-[#6a6a68] border-2 hover:bg-[#979795] hover:border-[#ffffff] px-4 py-3 mt-8 mb-2 mx-auto items-center'> Let's Collaborate</button>
            <p className='text-[#c0c0c0] text-center'>{formstatus}</p>
        </form>
    </div>
   )
}

export default Contact