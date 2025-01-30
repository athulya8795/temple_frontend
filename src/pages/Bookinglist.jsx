import React from 'react';
import Adminsidebar from './Adminsidebar';

function Bookinglist() {

    return (
        <>
            <div className="row">
                <div className="col-md-2">
                    <Adminsidebar />
                </div>
                <div className="col-md-10">
                    <h1 className="text-center">Booking List</h1>
                    <div className="p-4">
                        <table className="table table-bordered shadow fs-4" style={{ width: '100%' }}> {/* Increased width to 100% */}
                            <thead className="table-dark">
                                <tr>
                                    <th className="py-4 w-10">#</th>
                                    <th className="py-4 w-25">Name</th>
                                    <th className="py-4 w-30">Email</th>
                                    <th className="py-4 w-20">Status</th>
                                    <th className="py-4 w-20">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="py-4">
                                    <td className="py-4">dummy</td>
                                    <td className="py-4">dummy</td>
                                    <td className="py-4">dummy</td>
                                    <td className="py-4">dummy</td>
                                    <td className="py-4">
                                        <button className="btn btn-success mx-2 btn-lg px-4">Accept</button>
                                        <button className="btn btn-danger btn-lg px-4">Reject</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="5" className="text-center py-4 fs-3">No bookings found</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Bookinglist;
