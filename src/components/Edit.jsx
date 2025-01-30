import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useContext, useState } from 'react';
import React from 'react'
import { updateUserVazhipadApi } from '../services/allApi';
import { updateResponseContext } from '../context/Contextshare';

function Edit({ vazhipads }) {
    const { setUpdateResponse } = useContext(updateResponseContext)
    const [bookingDetails, setBookingDetails] = useState({
        name: vazhipads?.name,
        star: vazhipads?.star,
        date: vazhipads?.date,
        vazhipad: vazhipads?.vazhipad,
    })
    // console.log(bookingDetails);

    const stars = ["Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra"];
    const vazhipad = ["Pushpanjali", "Nayvilakku"];

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        handleCancel()
    }

    const handleCancel = () => {
        setBookingDetails({
            name: vazhipads.name,
            star: vazhipads.star,
            date: vazhipads.date,
            vazhipad: vazhipads.vazhipad,
        })
    }

    const handleUpdate = async () => {
        const { name, star, vazhipad, date } = bookingDetails
        if (!name || !star || !vazhipad || !date) {
            alert("please fill the form completely")
        }
        else {
            const reqBody = new FormData()
            reqBody.append("name", name)
            reqBody.append("star", star)
            reqBody.append("vazhipad", vazhipad)
            reqBody.append("date", date)
            const token = sessionStorage.getItem("token")
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            const result = await updateUserVazhipadApi(vazhipads._id, reqBody, reqHeader)
            console.log(result);
            if (result.status == 200) {
                setUpdateResponse(result)
                alert("Updated")
                setTimeout(() => {
                    handleClose()
                }, 2000)
            }
            else {
                handleCancel()
                alert("Something went wrong")
            }
        }
    }

    const handleShow = () => setShow(true);
    return (
        <>
            <FontAwesomeIcon icon={faPenToSquare} className='mx-3' onClick={handleShow} style={{ color: 'rgb(160,98,192' }} />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Vazhipad Booking</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" placeholder='Enter Name' className='form-control' value={bookingDetails?.name} onChange={(e) => setBookingDetails({ ...bookingDetails, name: e.target.value })} />
                    <select
                        className="form-control mt-4"
                        value={bookingDetails?.star}
                        onChange={(e) =>
                            setBookingDetails({ ...bookingDetails, star: e.target.value })
                        }
                    >
                        <option value="">--- Select Star ---</option>
                        {stars.map((star, index) => (
                            <option key={index} value={star}>
                                {star}
                            </option>
                        ))}
                    </select>
                    <select
                        className="form-control mt-4"
                        value={bookingDetails?.vazhipad}
                        onChange={(e) =>
                            setBookingDetails({ ...bookingDetails, vazhipad: e.target.value })
                        }
                    >
                        <option value="">--- Select Vazhipad ---</option>
                        {vazhipad.map((vazhipad, index) => (
                            <option key={index} value={vazhipad}>
                                {vazhipad}
                            </option>
                        ))}
                    </select>
                    <input type="date" placeholder='Please Select the date' className='form-control mt-4' value={bookingDetails?.date} onChange={(e) => setBookingDetails({ ...bookingDetails, date: e.target.value })} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Edit