import React, { useEffect, useState } from 'react';
import Common from './Common';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchTestimonies, submitTestimony } from '../services/allApi';

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [testimonies, setTestimonies] = useState([]);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await submitTestimony(formData);
      if (response?.success) {
        setSuccessMessage(response.message);
        setFormData({ name: "", email: "", message: "" });

        // Refresh testimonies after successful submission
        const updatedTestimonies = await fetchTestimonies();
        setTestimonies(updatedTestimonies);
        alert('Success')
      }
    } catch (error) {
      console.error("Error submitting testimony:", error);
    }
  };
  // Fetch testimonies on component mount
 // Fetch testimonies on component mount
useEffect(() => {
  const loadTestimonies = async () => {
    try {
      const data = await fetchTestimonies();
      // Filter only accepted testimonies
      const acceptedTestimonies = data.filter(testimony => testimony.status === "Accepted");
      setTestimonies(acceptedTestimonies);
    } catch (error) {
      console.error("Error fetching testimonies:", error);
    }
  };
  loadTestimonies();
}, []);


  return (
    <>
      <Header />
      <Common />
      <div className="mt-1">
        <div className="p-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.170654726583!2d76.94110857477388!3d8.482781891558394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bba07bee921d%3A0xcd03e3f30b479834!2sSree%20Padmanabha%20Swamy%20Temple%2C%20Fort%2C%20East%20Fort%2C%20Pazhavangadi%2C%20Thiruvananthapuram%2C%20Kerala%20695023!5e0!3m2!1sen!2sin!4v1733722847762!5m2!1sen!2sin"
            style={{ width: "100%", height: "450px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Info Section */}
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-3 text-center">
            <img
              src="https://media.istockphoto.com/id/1148705812/vector/location-icon-vector-pin-sign-isolated-on-white-background-navigation-map-gps-direction.jpg"
              alt="Location"
              className="w-50 mt-5"
            />
            <h4 className="mt-2">Address</h4>
            <p>Sree Padmanabha Swamy</p>
            <p>Temple Trust, Fort Palace</p>
            <p>Office, East Fort</p>
            <p>Thiruvananthapuram - 695023</p>
            <p>Kerala, India</p>
          </div>
          <div className="col-md-3 text-center">
            <img
              src="https://www.clipartmax.com/png/small/314-3144169_call-fax-mail-icon-red-call-icon-png.png"
              alt="Phone"
              className="w-25 mt-5"
            />
            <h4 className="mt-5">Phone</h4>
            <p>0471 2479245 (L)</p>
            <p>9633470063 (M)</p>
          </div>
          <div className="col-md-3 text-center">
            <img
              src="https://img.freepik.com/premium-vector/email-icon-outline-color-email-icon-white-background-vector-illustration_1004592-6399.jpg"
              alt="Email"
              className="w-50 mb-1"
            />
            <h4>Email</h4>
            <p>spstrusttvm@gmail.com</p>
          </div>
        </div>

        {/* Testimony Form */}
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <form className="border shadow p-5" onSubmit={handleSubmit}>
              <h3 className="mb-5 text-center">Client Testimony</h3>
              {successMessage && <p className="text-success text-center">{successMessage}</p>}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  placeholder="Message"
                  className="form-control"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <p className="text-secondary">By submitting, you agree to our website’s terms and conditions.</p>
              <div className="text-end">
                <button className="btn btn-secondary" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>

        {/* Display Testimonials */}
        <div className="row p-4">
          {testimonies.length > 0 ? testimonies.map((testimony) => (
            <div className="col-md-4" key={testimony._id}>
              <div className="card shadow-sm p-3 mb-4">
                <h5>{testimony.name}</h5>
                <p>{testimony.message}</p>
              </div>
            </div>
          )) : <p className="text-center">No testimonies yet.</p>}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;