import React from 'react'
import Booking from './Booking'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import Edit from '../components/Edit'

function Vazhipad() {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center w-50 mb-3' style={{ marginLeft: '250px' }}>
        <input type="text" placeholder='Search here!!!' className='form-control shadow' />
        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-secondary' style={{ marginLeft: '-30px' }} />
      </div>
      <div className='p-4 shadow w-100'>
        <div className='d-flex justify-content-between align-items-center'>
          <h4>All Vazhipad</h4>
          <Booking />
        </div>

        <div className='p-3 bg-light mt-4 rounded-3 d-flex justify-content-between align-items-center'>
          <h4>Pushpanjaly</h4>
          <div className='d-flex'>
            <Edit />
            <FontAwesomeIcon icon={faTrashCan} className='text-danger mx-3'/>
          </div>
        </div>
        <div className='p-3 bg-light mt-4 rounded-3 d-flex justify-content-between align-items-center'>
          <h4>Pushpanjaly</h4>
          <div className='d-flex'>
            <Edit />
            <FontAwesomeIcon icon={faTrashCan} className='text-danger mx-3'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Vazhipad