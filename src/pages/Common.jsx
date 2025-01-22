import React from 'react';
import { useLocation } from 'react-router-dom';

function Common() {
  const location = useLocation();

  // Determine the name based on the current path
  const getNameFromPath = () => {
    switch (location.pathname) {
      case '/gallery':
        return 'Gallery';
      case '/about':
        return 'About';
      case '/contact':
        return 'Contact';
      default:
        return 'Home'; // Default name for other paths
    }
  };

  const divStyle = {
    background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://explore.rehlat.ae/static/media/searchdestination/thingstodo/images/trivandrum/sree_padmanabhaswamy_temple/large_1280px-Thiruvananthapuram_Padmanabhaswamy_Temple.webp')",
    backgroundSize: 'cover', // Ensures the image covers the entire div
    backgroundPosition: 'center center', // Centers the image both horizontally and vertically
    height: '300px', // Adjust height as needed
    width: '100%', // Adjust width as needed
  };
  

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div style={divStyle}>
            <h1 style={{ color: 'white', paddingTop: '150px', fontSize: '65px' }}>
             {getNameFromPath()}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Common;
