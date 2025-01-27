import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginApi, registerApi } from '../services/allApi';
import { loginResponseContext } from '../context/Contextshare';

function Auth({ register }) {
  const { setLoginResponse } = useContext(loginResponseContext)
  const navigate = useNavigate()

  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleRegister = async () => {
    const { username, email, password } = userDetails
    if (!username || !email || !password) {
      alert('Please fill the form completely')
    }
    else {
      const result = await registerApi(userDetails)
      if (result.status == 200) {
        alert('Registration successfully')
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
        navigate('/login')
      }
      else if (result.status == 406) {
        alert(result.response.data)
      }
      else {
        alert('Something went wrong')
      }
    }
  }

  const handleLogin = async () => {
    const { email, password } = userDetails
    if (!email || !password) {
      alert("Please fill the form completely")
    }
    else {
      const result = await loginApi({ email, password })
      if (result.status == 200) {
        alert('Login Successfull')
        setLoginResponse(true)
        sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token", result.data.token)
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
        setTimeout(() => {
          navigate('/dashboard')
        }, 2000)
      }
      else if (result.status == 406) {
        alert(result.response.data)
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
      }
      else {
        alert("Something went wrong")
      }
    }
  }

  return (
    <>
      <div className='row mt-5'>
        <div className='col-md-2'></div>
        <div className='col-md-8 d-flex justify-content-center align-items-center flex-column mt-5 bg-secondary'>
          <img src="https://images.squarespace-cdn.com/content/v1/55e06d0ee4b0718764fcc921/1507805805238-M8XG4RMCMWITZ7LJGEEF/slidebank+login.gif" alt="no imagex" className='mt-4' />
          {!register ? <h3 className='text-light mt-4'>Sign In To Your Account</h3>
            :
            <h3 className='text-light mt-4'>Sign Up To Your Account</h3>}
          {register && <div className='w-50 mt-5'>
            <input type="text" placeholder='Enter your Name' value={userDetails.username} className='form-control' onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} />
          </div>}
          <div className='w-50 mt-4'>
            <input type="text" placeholder='Enter your Email' value={userDetails.email} className='form-control' onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} />
          </div>
          <div className='w-50 mt-4'>
            <input type="password" placeholder='Enter your Password' value={userDetails.password} className='form-control' onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} />
          </div>
          {!register ? <div className='w-50 mt-4'>
            <button onClick={handleLogin} className='btn btn-primary w-100'>Login</button>
            <p className='mt-2'>New User? click Here to <Link to={'/register'} className='text-warning rounded-0'>Register</Link></p>
          </div>
            :
            <div className='w-50'>
              <button onClick={handleRegister} className='btn btn-primary mt-3 w-100'>Register</button>
              <p className='mt-2'>New User? click Here to <Link to={'/login'} className='text-warning rounded-0'>Login</Link></p>
            </div>}
        </div>
        <div className='col-md-2'></div>
      </div>
    </>
  )
}

export default Auth