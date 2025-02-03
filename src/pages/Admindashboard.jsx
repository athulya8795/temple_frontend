import React from 'react'
import Adminsidebar from './Adminsidebar'

function Admindashboard() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-2 p-0 vh-100 position-fixed'>
            <Adminsidebar />
          </div>
          <div className='col-md-10 offset-md-2 p-4'>
            <h2>Admin Dashboard</h2>
            <div>
              <p>Welcome to the Admin Dashboard!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Admindashboard;