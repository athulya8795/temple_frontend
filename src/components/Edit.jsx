import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import React from 'react'

function Edit() {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        handleCancel()
    }
    const handleCancel = () => {
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
                    <input type="text" placeholder='Enter Name' className='form-control' />
                    <select className='form-control mt-4' >
                        <option>--- Select Star ---</option>
                        <option>Makam</option>
                        <option>Puram</option>
                        <option>Chothy</option>
                        <option>Makam</option>
                        <option>Makam</option>
                    </select>
                    <select className='form-control mt-4'>
                        <option>--- Select Vazhipad ---</option>
                        <option>Value</option>
                        <option>Value</option>
                        <option>Value</option>
                        <option>Value</option>
                        <option>Value</option>
                    </select>
                    <input type="date" placeholder='Please Select the date' className='form-control mt-4' />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button variant="primary">
                        Sumbit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Edit