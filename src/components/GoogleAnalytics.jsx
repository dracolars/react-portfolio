import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import GAUniversal from '../assets/ga-universal.png'
import GA4 from '../assets/GA4-GA4.png'



const GoogleAnalytics = () => {
  return (
    <main name='title' className='content-page'>
      <h1 className='content-title'>Google Analytics Setup and Migration</h1>
      <div className='grid grid-cols-3 place-items-center pt-8 lg:pl-[16em] lg:pr-[16em] overflow-hidden'>
        <div className='p-0 md:p-2'>
          <div className='p-2 bg-[#D9D9D9]'>
            <img className="max-h-[6em] p-2" src={GAUniversal} alt="Google Analytics Universal Logo"></img>
          </div>
          <p className='text-center pt-[0.5em] font-bold'>Universal</p>
        </div>
        <div>
          <HiArrowNarrowRight className='text-3xl'/>
        </div>
        <div className='p-0 md:p-2'>
          <div className='p-2 bg-[#D9D9D9]'>
            <img className="max-h-[6em]" src={GA4} alt="Google Analytics Universal Logo"></img>
          </div>
          <p className='text-center pt-[0.5em] font-bold'>GA4</p>
        </div>
      </div>

      <aside className='project-meta'>
        <p>TopSpot IMS</p>
        <p>2021-2023</p>
      </aside>

      <article className='xl:px-[4em] xl:py-8'>
        {/* COL 1*/}
          <p className='font-semibold'>Synopsis:</p>
          <p>With the sunsetting of Google Analytics Universal in July 2023, lots of websites using Google software as their analytics platform have a critical need
            to switch to Google's newest app and site analytics, GA4. This new platform aims to move away from the user-based model to an event-based one. 
            GA4 is looking to focus on "engaged sessions" and retire the infamous "bounce rate" metric. I have helped over 100 industrial clients enhance their analytics
            setup by carefully crafting their migration strategy from Universal to GA4. 
          </p>
          <p className='font-semibold pt-2'>Issue:</p>
          <p>Websites using Google Analytics Universal must have a migration strategy by the end of Q2 2023. Otherwise, they risk not capturing (and perhaps losing) data subsequently.
            Addtionally, we need to configure various JavaScript events to capture pageviews, form submissions, clicks, chat-bots, video-plays, etc.
          </p>
          <p className='font-semibold pt-2'>Proposed Solution:</p>
          <p>We start by performing an audit on the <i>as-is</i> system, making note of internal filters, conversions, e-commerce data, Google product links, script installation, custom dimensions, and more.
          These parameters will then be used to serve as guidelines to create and improve the configuration. For most clients, the solution will require installation and setup of Google Tag Manager for future-proof script
          addendums. Both GA Universal and 4 will run simultaneously until July 1st.  </p>
          <p className='font-semibold pt-2'>Technologies Used:</p>
          <p>JavaScript, Google Analytics Properties, Google Tag Manager, jQuery</p>
          <p className='font-semibold pt-2'>Results:</p>
          <ul>
          <li>Over 100 successful GA4 migrations in 2022.</li>
          <li>For over 50% of migrations, we fixed setup errors and were able to provide accurate leads and SEO reports. </li>
          <li>Enhanced event accuracy and added new custom events that provided insight as to what is causing visitors to convert. </li>
          </ul>
          
      </article>

    </main>
  )
}

export default GoogleAnalytics