import React, {useState} from 'react'

const Contact = () => {

  const[status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const {name, email, message} = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });

    setStatus("Let's Collaborate");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <div name='contact' className='w-full h-screen bg-[#efeeed] flex justify-center items-center p-4'>
      {/* the free backend we used previously: https://getform.io/f/b154eeb6-f032-4311-9edd-2d7ede7fb146 */}
        <form id='portfolio-contact' onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
            <div className='py-4'>
                <p className='pagetitle'>CONTACT</p>
                <p className='text-gray-700 py-6'>Submit the form below or shoot me an email - 
                    <a className='text-decoration-line: underline hover:text-[#979795]' href="mailto: adlaris@uh.edu"> contact@alexdemos.net </a>
                </p>
            </div>
            <input className='p-2 bg-[#ffffff]' type="text" placeholder='Name' name="name" id="name" required/>
            <input className='my-4 p-2 bg-[#ffffff]' type="email" placeholder='Email' name="email" id="email" required/>
            <textarea className='bg-[#ffffff] p-2' type="text" placeholder='Message' name="message" id="message" rows='6' required/>
            <button type="submit" className='text-gray-100 bg-[#6a6a68] border-2 hover:bg-[#979795] hover:border-[#ffffff] px-4 py-3 my-8 mx-auto items-center'> Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact