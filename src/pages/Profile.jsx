import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Profile() {
  return (
    <>
    <div className='p-4 shadow'>
        <div className='d-flex justify-content-between'>
            <h4 className='text-primary'>Profile</h4>
            <button className='btn border-primary'><FontAwesomeIcon icon={faAngleUp} /></button>
        </div>
        <div className='d-flex justify-content-center align-items-center flex-column mt-3'>
            <label htmlFor="profileImg" className='mb-4 d-flex justify-content-center align-items-center'>
                <input type="file" id="profileImg" style={{display:'none'}} />
                <img src="https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small_2x/user-icon-on-transparent-background-free-png.png" alt="no image" className='w-75' />
            </label>
            <div className='w-100'>
                <div className='mb-3'>
                    <button className='btn btn-primary w-100'>Update</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile