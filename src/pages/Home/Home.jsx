import React from 'react'
import {HiOutlineArrowCircleRight, HiOutlineArrowCircleDown} from 'react-icons/hi'
import {Link} from 'react-scroll';
import Intro from "./IntroPage";
import Contact from "./ContactPage";
import Work from "./WorkPage";
import Projects from "./ProjectsPage";
import ResumePDF from '../../assets/Alex Laris Soft Dev Resume.pdf'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
      <main name="home">
        <section className='page flex flex-col justify-center items-center mx-auto px-4 lg:px-20'>
          <div>
          <TypeAnimation
            sequence={['Hi my name is', 2000, 'Hi', 2000, 'Hi my name is']} speed={50} style={{color: '#c9c5b2'}} repeat={5} />
          <h1 className="text-4xl sm:text-6xl text-[#c3bdb3] px-3">ALEX LARIS</h1>
          <h2 className="text-xl sm:text-4xl text-[#979795] px-3">
            Full Stack Developer
          </h2>
          <p className="max-w[600px] px-3">
            Passionate junior developer with a mind full of curiosity. My experience includes Web Development, Data Analytics, and Optometry.
          </p>
            <button className="w-[200px] group border-1 border-gray-700 py-2 px-1 font-bold flex items-center hover:bg-[#6a6a68] hover:text-[#c8c5b2]">
              <Link
                to="work"
                spy={true}
                smooth={true}
                duration={500}
                className="flex"
              >
                <span className="group-hover:rotate-90 duration-300">
                  {" "}
                  <HiOutlineArrowCircleRight className="mx-1 mt-1" />{" "}
                </span>
                <p> View Featured Work </p>
                
              </Link>
            </button>

          <a
            href={ResumePDF}
            target="_blank"
            rel="noreferrer"
            className="inline-block"
          >
            <button className="w-[200px] group border-1 border-gray-700 py-2 px-1 font-bold flex items-center hover:bg-[#6a6a68] hover:text-[#c8c5b2]">
              <span>
                {" "}
                <HiOutlineArrowCircleDown className="mx-1" />{" "}
              </span>
              <p>Download Resume</p>
            </button>
          </a>
          </div>
          
        </section>
        <Intro />
        <Work />
        <Projects />
        <Contact />
    </main>
  );
};

export default Home;
