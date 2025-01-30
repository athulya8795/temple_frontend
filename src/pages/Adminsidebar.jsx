import { faChartSimple, faMessage, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Adminsidebar() {
  return (
    <>
      <div
        style={{ minHeight: "100vh" }}
        className="bg-danger text-light text-center p-3 d-flex flex-column position-fixed start-0 top-0"
      >
        <h5 className="mb-5 text-warning border fw-bolder rounded p-1 shadow">
          Vazhipad Booking Admin
        </h5>
        <a
          href="/admin"
          className="text-decoration-none text-light fw-bolder mb-4 d-flex align-items-center"
        >
          <FontAwesomeIcon icon={faChartSimple} className='me-2' />
          Dashboard
        </a>
        <a
          href="/admin/bookinglist"
          className="text-decoration-none text-light fw-bolder mb-4 d-flex align-items-center"
        >
          <FontAwesomeIcon icon={faUser} className='me-2' />
          Booking List
        </a>
        <a
          href="/admin/testimony"
          className="text-decoration-none text-light fw-bolder mb-4 d-flex align-items-center"
        >
          <FontAwesomeIcon icon={faMessage} className='me-2' />
          Feedback List
        </a>
      </div>
    </>
  )
}

export default Adminsidebar
