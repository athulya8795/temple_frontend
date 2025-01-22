import React from 'react'
import Common from './Common'

function Contact() {
  return (
    <>
    <Common/>
      <div className='mt-1'>
        <div className='p-5'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.170654726583!2d76.94110857477388!3d8.482781891558394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bba07bee921d%3A0xcd03e3f30b479834!2sSree%20Padmanabha%20Swamy%20Temple%2C%20Fort%2C%20East%20Fort%2C%20Pazhavangadi%2C%20Thiruvananthapuram%2C%20Kerala%20695023!5e0!3m2!1sen!2sin!4v1733722847762!5m2!1sen!2sin" style={{ width: '100%', height: '450px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='row d-flex justify-content-center align-items-center'>
          <div className='col-md-1'></div>
          <div className="col-md-3 d-flex justify-content-center align-items-center flex-column">
            <img src="https://media.istockphoto.com/id/1148705812/vector/location-icon-vector-pin-sign-isolated-on-white-background-navigation-map-gps-direction.jpg?s=612x612&w=0&k=20&c=lqEIzW3QedZfytsX30NoBJbHxZZbWnlLsvEiwOSbaow=" alt="no image" className='w-50' style={{ marginTop: '170px' }} />
            <div>
              <h4 style={{ textAlign: 'center' }} className='mt-2'>Address</h4>
              <p style={{ textAlign: 'center' }}>Sree Padmanabha Swamy</p>
              <p style={{ textAlign: 'center' }}>Temple Trust, Fort Palace</p>
              <p style={{ textAlign: 'center' }}>Office, East</p>
              <p style={{ textAlign: 'center' }}>Fort,Thiruvananthapuram -</p>
              <p style={{ textAlign: 'center' }}>695023,Kerala, India</p>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
            <img src="https://www.clipartmax.com/png/small/314-3144169_call-fax-mail-icon-red-call-icon-png.png" alt="no image" className='w-25 mt-5' />
            <div>
              <h4 style={{ textAlign: 'center' }} className='mt-5'>Phone</h4>
              <p style={{ textAlign: 'center' }}>0471 2479245 (L)</p>
              <p style={{ textAlign: 'center' }}>9633470063 (M)</p>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
            <img src="https://img.freepik.com/premium-vector/email-icon-outline-color-email-icon-white-background-vector-illustration_1004592-6399.jpg" alt="no image" className='w-50 mb-1' />
            <div>
              <h4 style={{ textAlign: 'center' }}>Email</h4>
              <p style={{ textAlign: 'center' }}>spstrusttvm@gmail.com</p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'></div>
          <div className='col-md-4'>
            <form className="border shadow p-5">
              <h3 className="mb-5 text-center">Client Testimony</h3>
              <div className="my-4">
                <input type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="my-4">
                <input type="text" className="form-control" placeholder="Email" />
              </div>
              <div className="my-4">
                <textarea placeholder="Message" className="form-control"></textarea>
              </div>
              <p className="text-secondary">By submitting , You are agreeing to the terms and condition of our website . we may use your details in our site.</p>
              <div className="float-end">
                <button className="btn btn-secondary">Sumbit</button>
              </div>
            </form>
          </div>
          <div className='col-md-4'></div>
        </div>
      </div>
    </>
  )
}
export default Contact