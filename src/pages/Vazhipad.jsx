import React, { useContext, useEffect, useState } from 'react'
import Booking from './Booking'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import Edit from '../components/Edit'
import { removeUserVazhipadApi, userVazhipadApi } from '../services/allApi'
import { addResponseContext, updateResponseContext } from '../context/Contextshare'

function Vazhipad() {
  const [searchKey, setSearchKey] = useState("")
  const [userVazhipad, setUserVazhipad] = useState([])
  const [removeStatus, setRemoveStatus] = useState({})
  const { addResponse } = useContext(addResponseContext)
  const { updateResponse } = useContext(updateResponseContext)

  // console.log(searchKey);

  const getUserBooking = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await userVazhipadApi(searchKey, reqHeader)
      // console.log(result);
      setUserVazhipad(result.data)
    }
  }
  // console.log(userVazhipad);
  const handleDelete = async (id) => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await removeUserVazhipadApi(id, reqHeader)
      console.log(result);
      if (result.status == 200) {
        setRemoveStatus(result)
      }
      else {
        alert('Something went wrong')
      }
    }
  }

  useEffect(() => {
    getUserBooking()
  }, [addResponse, removeStatus, updateResponse, searchKey])

  return (
    <>
      <div className='d-flex justify-content-center align-items-center w-50 mb-3' style={{ marginLeft: '250px' }}>
        <input type="text" placeholder='Search here!!!' onChange={(e) => setSearchKey(e.target.value)} className='form-control shadow' />
        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-secondary' style={{ marginLeft: '-30px' }} />
      </div>
      <div className='p-4 shadow w-100'>
        <div className='d-flex justify-content-between align-items-center'>
          <h4>All Vazhipad</h4>
          <Booking />
        </div>

        {userVazhipad?.length > 0 ?
          userVazhipad?.map((item) => (
            <div className='p-3 bg-light mt-4 rounded-3 d-flex justify-content-between align-items-center'>
              <h4>{item?.vazhipad}</h4>
              <div className='d-flex'>
                <Edit vazhipads={item} />
                <FontAwesomeIcon icon={faTrashCan} className='text-danger mx-3' onClick={() => handleDelete(item?._id)} />
              </div>
            </div>
          ))

          :
          <h4 className='text-center text-warning'>No Booking yet</h4>}
      </div>
    </>
  )
}

export default Vazhipad