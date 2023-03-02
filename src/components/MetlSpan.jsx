import React from 'react'
import MetlSpanHero from '../assets/MetlSpanHero.png'



const GoogleAnalytics = () => {
  return (
    <div name='title' className='content-page'>

      <div className='text-center m-auto'>
        <p className='content-title'>MetlSpan Representatives Directory</p>
      </div>

      <div className='pt-8'>
              <img className="image-hero" src={MetlSpanHero} alt="MetlSpan Find a Representative Page Screenshot"/>
      </div>

      <div className='project-meta'>
        <p>TopSpot IMS</p>
        <p>2022</p>
      </div>

      <div className='xl:px-[4em] xl:py-8'>
        {/* COL 1*/}
        <div>
          <p className='font-semibold'>Synopsis:</p>
          <p>MetlSpan's new website needed a way for users to come into contact with the correct representative that served their project and area. My team and I came up with the design
            while I took charge of the database implementation, code, and map visualization. This way, when a user inputs what kind of project and in what country, state, or city, the correct list of 
            sales representatives and product managers' information can be gathered.
          </p>
          
          <p className='font-semibold pt-2'>Issue:</p>
          <p>MetlSpan's new website needed a better way to connect available reps than calling the businesses' main phone line. The business is international and serves
            all US States, Canada's territories, and Puerto Rico. The client's managers need to be granted access to an easy-to-edit database to make entry updates. </p>

          <p className='font-semibold pt-2'>Proposed Solution:</p>
          <p>A new Find a Representative page with a two-tab custom block that allows the user to choose between filtering using dropboxes (for country, state, city, and project) or a map state selector.
            Once an input is gathered, the list of html elements containing the representatives' name, title, phone number, and email will appear. All interactions with these tabs are gathered as events with Google Analytics and 
            we can then apply analysis to check if this new page is bringing more conversions. </p>

          <p className='font-semibold pt-2'>Technologies Used:</p>
          <p>JavaScript, jQuery, WordPress, jvectormap</p>

          <p className='font-semibold pt-2'>Results:</p>
          <p>A great example of UX Design, with proper implementation that dives an increase of conversions, click-to-call and email-to events.</p>
        </div>
        
        <div></div>
      </div>

    </div>
  )
}

export default GoogleAnalytics