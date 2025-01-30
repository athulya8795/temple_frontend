import React, { useEffect, useState } from 'react';
import Adminsidebar from './Adminsidebar';
import { getUserBookingapi } from '../services/allApi';

function Bookinglist() {
    const [userVazhipad, setUserVazhipad] = useState([]);

    const getUserBooking = async () => {
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token");
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            };
            try {
                const result = await getUserBookingapi(reqHeader);
                console.log("API Response:", result);

                if (result?.status === 200 && Array.isArray(result?.data)) {
                    setUserVazhipad(result.data);
                } else {
                    console.error("Invalid API response:", result);
                }
            } catch (error) {
                console.error("Error fetching bookings:", error);
            }
        }
    };

    useEffect(() => {
        getUserBooking();
    }, []);

    return (
        <>
            <div className="row">
                <div className="col-md-2">
                    <Adminsidebar />
                </div>
                <div className="col-md-10">
                    <h1 className="text-center">Booking List</h1>
                    <div className="p-4">
                        <table className="table table-bordered shadow fs-4" style={{ width: '100%' }}>
                            <thead className="table-dark">
                                <tr>
                                    <th className="py-4">#</th>
                                    <th className="py-4">Name</th>
                                    <th className="py-4">Star</th>
                                    <th className="py-4">Vazhipad</th>
                                    <th className="py-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.isArray(userVazhipad) && userVazhipad.length > 0 ? (
                                    userVazhipad.map((item, index) => (
                                        <tr key={item._id || index}>
                                            <td className="py-4">{index + 1}</td>
                                            <td className="py-4">{item?.name}</td>
                                            <td className="py-4">{item?.star}</td>
                                            <td className="py-4">{item?.vazhipad}</td>
                                            <td className="py-4 d-flex justify-content-center align-items-center">
                                                <button className="btn btn-success mx-2 btn-lg px-4">Accept</button>
                                                <button className="btn btn-danger btn-lg px-4">Reject</button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="text-center py-4 fs-3">No bookings found</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Bookinglist;
