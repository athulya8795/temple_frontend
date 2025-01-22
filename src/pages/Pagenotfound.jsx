import React from 'react'
import { Link } from 'react-router-dom'

function Pagenotfound() {
  return (
    <>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-12 d-flex justify-content-center align-items-center flex-column mt-5'>
          <img src="https://webartdevelopers.com/blog/wp-content/uploads/2021/05/neon-404-page-not-found.gif" alt="no image" className='w-50' />
          <h1 className='mt-5'>Look Like You're Lost</h1>
          <h4>The Page You are Looking is Unavailable</h4>
          <Link to={'/'}><button className='btn btn-secondary mt-3 rounded-0 mb-5'>GO HOME</button></Link>
        </div>
        <div className='col-md-2'></div>
      </div>
    </div>
    </>
  )
}

export default Pagenotfound