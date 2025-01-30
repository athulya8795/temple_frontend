import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Vazhipad from './Vazhipad'
import Profile from './Profile'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Dashboard() {
  const [isLogin, setIsLogin] = useState(false)
  const user = JSON.parse(sessionStorage.getItem("existingUser"))

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsLogin(true)
    }
    else {
      setIsLogin(false)
    }
  }, [])
  return (
    <>
      <Header />
      {isLogin == false ? <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-1'></div>
          <div className='col-md-10'>
            <img src="https://i.pinimg.com/originals/13/d0/2a/13d02ad0776fbb737e126383937ba034.gif" alt="no image" style={{ width: '300px' }} />
            <h5 className='mt-4 text-center'>Please <Link to={'/login'} className='text-danger'>Login</Link> to Explore</h5>
          </div>
          <div className='col-md-1'></div>
        </div>
      </div>
        :
        <div className='p-4'>
          <h4>Welcome <span style={{ color: '#14148e' }}>{user.username}</span></h4>
          <div className='row mt-5 d-flex'>
            <div className='col-md-8'>
              <Vazhipad />
            </div>
            <div className='col-md-4' style={{ marginTop: '50px' }}>
              <Profile />
            </div>
          </div>
        </div>}
      <Footer />
    </>
  )
}

export default Dashboard