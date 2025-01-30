import React from 'react'
import Common from './Common'
import Header from '../components/Header'
import Footer from '../components/Footer'

function About() {
  return (
    <>
      <Header />
      <Common />
      <div className='container mt-5 d-flex justify-content-center align-items-center flex-column'>
        {/* about */}
        <div className='row p-4'>
          <div className='col-md-6'>
            <img src="https://www.theleela.com/prod/content/assets/styles/tl_1920_735/public/aio-banner/dekstop/Sree-Padmanabhaswamy-Temple.jpg.webp?VersionId=VDNkz8ePfS_iIF2Rl5AeMx6lRgzOC9Ff&itok=dNjLCWPH" alt="no image" className='rounded-5' style={{ height: '350px', width: '600px', marginTop: '55px' }} />
          </div>
          <div className='col-md-6'>
            <h2>Sree Padmanabhaswamy Temple</h2>
            <p style={{ textAlign: 'justify', fontWeight: 'lighter', fontSize: '14px' }} className='mt-4'>The Sree Padmanabha Swamy Temple Trust established five marriage halls (mandapams) by modifying the existing buildings or by constructing a new building for letting out to conduct Hindu religious functions like marriages, upanayanams, 60th birthday celebrations, etc. Only vegetarian food could be served to the guests. However, rituals related to death and social functions like general body meetings of the association, etc. are not permitted. The names of the mandapam are Sree Vaikundom mandapam, Ananthasayanam mandapam, Bhajanappura mandapam, Mahaleksmi mandapam and Sudarsan mandapam. Of these, the first three are situated near the South Nada of Sree Padmanabha Swamy Temple in a property known as the Valiyakottaram compound which is filled with palaces of the former Rulers of Travancore and other archaeologically important buildings. The other two mandapams are situated on the western side of Padmatheertam pond (at east nada of the Temple) in a property called Ramanamadam compound. The Ramanamadom building in this compound is also archaeologically important. Eastern direction is the most auspicious direction for conducting most of the Hindu religious functions and the stage of all the mandapams is lying in that direction. Each mandapam is in charge of an employee of the Trust designated as a caretaker. The caretaker will be available in the mandapam to assist in the smooth conduct of the function.</p>
          </div>
        </div>
      </div>
      {/* details */}
      <div className='row mt-5 d-flex justify-content-evenly align-items-center'>
        <div className='col-md-2'></div>
        <div className='col-md-5'>
          <h3>Office Time</h3>
          <p>Monday:- 10:00 AM - 05:00 PM</p>
          <p>Tuesday:- 10:00 AM - 05:00 PM</p>
          <p>Wednesday:- 10:00 AM - 05:00 PM</p>
          <p>Thursday:- 10:00 AM - 05:00 PM</p>
          <p>Friday:- 10:00 AM - 05:00 PM</p>
          <p>Saturday:- 10:00 AM - 05:00 PM</p>
          <p>Sunday:- Closed</p>
        </div>
        <div className='col-md-5'>
          <h3>Office Address</h3>
          <p>Address Sree Padmanabha Swamy Temple</p>
          <p>Trust, Fort Palace Office, East Fort,</p>
          <p>Thiruvananthapuram - 695023,</p>
          <p>Kerala, India</p>
          <p>Ph : 0471 2479245(L),9633470063(M)</p>
          <p>Email : spstrusttvm@gmail.com</p>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default About