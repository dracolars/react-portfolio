import React from "react";
import { useForm } from "@formcarry/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  let formstatus = false;
  const { state, submit } = useForm({
    id: "FyAaAv2e5r",
  });

  //success mesage
  if (state.submitted) {
    var form = document.getElementById("portfolio-contact");
    var allformcontrols = form.elements;
    allformcontrols[0].value = "";
    allformcontrols[1].value = "";
    allformcontrols[2].value = "";
    formstatus = true;
  }

  return (
    <section name="contact" className="page">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="text-center">
          <h2 className="pagetitle">CONTACT</h2>
          <p className="pt-6"> I am available for Software Development opportunities.</p>
        </div>
        <form
          id="portfolio-contact"
          onSubmit={submit}
          className="flex flex-col max-w-[600px] w-full mx-auto text-gray-700 pt-4"
        >
          <input
            className="p-2 bg-[#ffffff]"
            type="text"
            placeholder="Name"
            name="name"
            id="name"
            required
          />
          <input
            className="my-4 p-2 bg-[#ffffff]"
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            required
          />
          <textarea
            className="bg-[#ffffff] p-2"
            type="text"
            placeholder="Message"
            name="message"
            id="message"
            rows="6"
            required
          />
          <button
            type="submit"
            className="text-gray-100 bg-[#6a6a68] border-2 hover:bg-[#979795] hover:border-[#ffffff] px-4 py-3 mt-8 mb-2 mx-auto items-center"
          >
            Let's Collaborate
          </button>
          <p className="text-[#c0c0c0] text-center">{formstatus}</p>
          {formstatus ? (
            <p className="text-[#c0c0c0] text-center py-2">
              Form recieved. I will contact you shortly. Thanks!
            </p>
          ) : (
            ""
          )}
        </form>

        <aside className="contact-links">
          <ul className="mt-16 flex justify-center">
            <li>
              <a
                className="flex justify-between items-center w-full px-4"
                href="https://linkedin.com/in/alex-laris"
                target="_blank"
                rel="noopener noreferrer"
              >
               <FaLinkedin className="px-1" size={30} /> LinkedIn 
              </a>
            </li>
            <li>
              <a
                className="flex justify-between items-center w-full px-4"
                href="https://github.com/dracolars"
                target="_blank"
                rel="noopener noreferrer"
              >
               <FaGithub className="px-1" size={30} /> GitHub 
              </a>
            </li>
            <li>
              <a
                className="flex justify-between items-center w-full px-4"
                href="mailto:contact@alexdemos.net"
                target="_blank"
                rel="noopener noreferrer"
              >
               <HiOutlineMail className="px-1" size={30} /> Email 
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
