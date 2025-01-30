import React, { useEffect, useState } from 'react';
import Adminsidebar from './Adminsidebar';
import { getUserTestimonyapi } from '../services/allApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';

function Testimony() {
    const [userTestimony, setUserTestimony] = useState([])

    const getUserTestimony = async () => {
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            };
            try {
                const result = await getUserTestimonyapi(reqHeader)
                console.log("API Response:", result);
                if (result?.status === 200 && Array.isArray(result?.data)) {
                    setUserTestimony(result.data)
                }
                else {
                    console.error("Invalid API response:", result);
                }

            } catch (error) {
                console.error("Error fetching bookings:", error);
            }
        }
    }
    useEffect(() => {
        getUserTestimony()
    }, [])
    return (
        <>
            <div className='row'>
                <div className='col-md-2'>
                    <Adminsidebar />
                </div>
                <div className="col-md-10">
                    <h1 className="text-center">Testimony List</h1>
                    <div className="p-4">
                        <table className="table table-bordered shadow fs-4" style={{ width: '100%' }}> {/* Increased width to 100% */}
                            <thead className="table-dark">
                                <tr>
                                    <th className="py-4">#</th>
                                    <th className="py-4">Name</th>
                                    <th className="py-4">Email</th>
                                    <th className="py-4">Feedback</th>
                                    <th className="py-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.isArray(userTestimony) && userTestimony.length > 0 ? (
                                    userTestimony.map((item, index) => (
                                        <tr key={item._id || index}>
                                            <td className="py-4">{index + 1}</td>
                                            <td className="py-4">{item?.name}</td>
                                            <td className="py-4">{item?.email}</td>
                                            <td className="py-4">{item?.message}</td>
                                            <td className="py-4 d-flex justify-content-center align-items-center">
                                                    <button className="btn btn-success mx-2 btn-lg px-4"><FontAwesomeIcon icon={faCheck} /></button>
                                                    <button className="btn btn-danger btn-lg px-4"><FontAwesomeIcon icon={faX} /></button>
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
    )
}

export default Testimony