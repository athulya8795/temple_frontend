import { faGopuram, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { loginResponseContext } from '../context/Contextshare';

function Header() {
  const [token, setToken] = useState("")
  const navigate = useNavigate()
  const { setLoginResponse } = useContext(loginResponseContext)
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    }
  }, [])

  const handleLogout = () => {
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    setLoginResponse(false)
    navigate('/')
  }
  return (
    <>
      <div className=' bg-secondary'>
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <FontAwesomeIcon icon={faGopuram} size="xl" className='text-light' />
            <h4 className='ms-2 text-light'>Vazhipad Booking</h4>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to={'/'} style={{ textDecoration: 'none' }}><a class="nav-link active" aria-current="page" href="#">Home</a></Link>
                </li>
                <li class="nav-item">
                  <Link to={'/about'} style={{ textDecoration: 'none' }}><a class="nav-link active" aria-current="page" href="#">About</a></Link>
                </li>
                <li class="nav-item">
                  <Link to={'/gallery'} style={{ textDecoration: 'none' }}><a class="nav-link active" aria-current="page" href="#">Gallery</a></Link>
                </li>
                <li class="nav-item">
                  <Link to={'/contact'} style={{ textDecoration: 'none' }}><a class="nav-link active" aria-current="page" href="#">Contact</a></Link>
                </li>
              </ul>
            </div>
            <div className='text-light d-flex justify-content-center align-items-center border-light'>
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic" className='text-light'>
                  <FontAwesomeIcon icon={faUser} className='text-light' />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Link to={'/login'} style={{ textDecoration: 'none' }}><Dropdown.Item href="#/action-1">Login</Dropdown.Item></Link>
                  <Link to={'/register'} style={{ textDecoration: 'none' }}><Dropdown.Item href="#/action-2">Register</Dropdown.Item></Link>
                  {token && <Link style={{ textDecoration: 'none' }}><Dropdown.Item href="#/action-2" onClick={handleLogout}>LogOut</Dropdown.Item></Link>}
                </Dropdown.Menu>
              </Dropdown></div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header