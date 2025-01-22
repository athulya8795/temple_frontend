import { faFacebook, faInstagram, faXTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faGopuram } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='p-5 bg-secondary mt-5'>
                <div className='row'>
                    <div className='col-md-4'>
                        <h3 className='text-light'><FontAwesomeIcon icon={faGopuram} className='me-3' />Vazhipad Booking</h3>
                        <p className='mt-3' style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere exercitationem error deleniti maiores sed! Praesentium ducimus nobis architecto cumque neque sapiente illo, nam necessitatibus ad dolore voluptatum non inventore soluta! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint velit maiores harum </p>
                    </div>
                    <div className='col-md-2 d-md-flex justify-content-center'>
                        <div>
                            <h3 className='text-light'>Links</h3>
                            <Link to={'/'} style={{textDecoration:'none',color:'black'}}><p>Home</p></Link>
                            <Link to={'/vazhipad'} style={{textDecoration:'none',color:'black'}}><p>Vazhipad</p></Link>
                            <Link to={'/dashboard'} style={{textDecoration:'none',color:'black'}}><p>Dashboard</p></Link>
                        </div>
                    </div>
                    <div className='col-md-2 d-md-flex justify-content-center'>
                        <div>
                            <h3 className='text-light'>Guides</h3>
                            <p>React</p>
                            <p>React bootsrap</p>
                            <p>Bootswatch</p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <h3 className='text-light'>Contact US</h3>
                        <div className='d-flex mt-3'>
                            <input type="text" placeholder='Email Id' className='form-control' />
                            <button className='btn btn-warning ms-2'>Subscribe</button>
                        </div>
                        <div className='d-flex mt-3 justify-content-between'>
                            <FontAwesomeIcon icon={faInstagram} className='fa-2x text-light' />
                            <FontAwesomeIcon icon={faFacebook} className='fa-2x text-light' />
                            <FontAwesomeIcon icon={faXTwitter} className='fa-2x text-light' />
                            <FontAwesomeIcon icon={faWhatsapp} className='fa-2x text-light' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer