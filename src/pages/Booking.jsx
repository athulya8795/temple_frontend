import React, { useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BookingApi } from '../services/allApi';
import { addResponseContext } from '../context/Contextshare';

function Booking() {
    const [show, setShow] = useState(false);
    const [token, setToken] = useState("");
    const { setAddResponse } = useContext(addResponseContext)
    const [bookingDetails, setBookingDetails] = useState({
        name: "",
        star: "",
        date: "",
        vazhipad: "",
    });

    const stars = ["Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra"];
    const vazhipads = ["Pushpanjali", "Nayvilakku"];

    const handleClose = () => {
        setShow(false);
        handleCancel();
    };

    const handleShow = () => setShow(true);

    const handleCancel = () => {
        setBookingDetails({
            name: "",
            star: "",
            date: "",
            vazhipad: "",
        });
    };

    const handleAdd = async () => {
        const { name, star, date, vazhipad } = bookingDetails;
        if (!name || !star || !date || !vazhipad) {
            alert("Please fill the form completely");
            return;
        }
        try {
            const result = await BookingApi(bookingDetails, token);
            console.log("Booking Response:", result.data);

            if (result.status === 200) {
                alert("Booking Successful!");
                handleClose();
                setAddResponse(result)
            }
        } catch (error) {
            console.error("Error during booking:", error);
            alert(error.data?.message || "Something went wrong. Please try again.");
        }
    };

    useEffect(() => {
        const savedToken = sessionStorage.getItem("token");
        if (savedToken) {
            setToken(savedToken);
        }
    }, []);

    return (
        <>
            <button className="btn text-light btn-primary" onClick={handleShow}>
                Booking
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Vazhipad Booking</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="text"
                        value={bookingDetails.name}
                        placeholder="Enter Name"
                        className="form-control"
                        onChange={(e) =>
                            setBookingDetails({ ...bookingDetails, name: e.target.value })
                        }
                    />
                    <select
                        className="form-control mt-4"
                        value={bookingDetails.star}
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
                        value={bookingDetails.vazhipad}
                        onChange={(e) =>
                            setBookingDetails({ ...bookingDetails, vazhipad: e.target.value })
                        }
                    >
                        <option value="">--- Select Vazhipad ---</option>
                        {vazhipads.map((vazhipad, index) => (
                            <option key={index} value={vazhipad}>
                                {vazhipad}
                            </option>
                        ))}
                    </select>
                    <input
                        type="date"
                        value={bookingDetails.date}
                        className="form-control mt-4"
                        onChange={(e) =>
                            setBookingDetails({ ...bookingDetails, date: e.target.value })
                        }
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button variant="primary" type="submit" onClick={handleAdd}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Booking;