import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Vazhipad from './Vazhipad';
import Profile from './Profile';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getUserBookingapi } from '../services/allApi';

function Dashboard() {
  const [isLogin, setIsLogin] = useState(false);
  const [userVazhipad, setUserVazhipad] = useState([]);
  const user = JSON.parse(sessionStorage.getItem("existingUser"));

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsLogin(true);
      fetchUserBookings();
    } else {
      setIsLogin(false);
    }
  }, []);

  const fetchUserBookings = async () => {
    if (sessionStorage.getItem("token")) {
      try {
        const token = sessionStorage.getItem("token");
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        };

        const result = await getUserBookingapi(reqHeader);
        if (result?.status === 200 && Array.isArray(result?.data)) {
          setUserVazhipad(result.data);
        }
      } catch (error) {
        console.error("Error fetching user bookings:", error);
      }
    }
  };

  return (
    <>
      <Header />
      {isLogin === false ? (
        <div className="container mt-5 text-center">
          <h5>Please <Link to={'/login'} className='text-danger'>Login</Link> to Explore</h5>
        </div>
      ) : (
        <div className='p-4'>
          <h4>Welcome <span style={{ color: '#14148e' }}>{user.username}</span></h4>
          <div className='row mt-5'>
            <div className='col-md-8'>
              <Vazhipad />
            </div>
            <div className='col-md-4'>
              <Profile />
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Dashboard;