import React, { useEffect, useState } from 'react';
import Adminsidebar from './Adminsidebar';
import { getUserapi } from '../services/allApi';

function UserList() {
    const [user,setUser] = useState([])

    const getUser = async()=>{
        if(sessionStorage.getItem("token")){
            const token = sessionStorage.getItem("token")
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            };
            try {
                const result = await getUserapi(reqHeader)
                console.log("API Response:",result);
                if(result?.status===200&&Array.isArray(result?.data)){
                    setUser(result.data)
                }
                else{
                    console.error("Invalid API response:", result);
                }
                
            } catch (error) {
                console.error("Error fetching bookings:", error);
            }
        }
    }
    useEffect(()=>{
        getUser()
    },[])
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
                                </tr>
                            </thead>
                            <tbody>
                                {Array.isArray(user) && user.length > 0 ? (
                                    user.map((item, index) => (
                                        <tr key={item._id || index}>
                                            <td className="py-4">{index + 1}</td>
                                            <td className="py-4">{item?.username}</td>
                                            <td className="py-4">{item?.email}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="text-center py-4 fs-3">No users found</td>
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

export default UserList