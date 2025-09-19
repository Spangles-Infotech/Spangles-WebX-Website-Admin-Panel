import React, { useState } from "react";
import contact from '../img/contactus.png';
import './Contact.css';
import { toast, ToastContainer, Slide, ToastPosition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";



export default function Contact() {

  const initialFormState = {
  name: '',
  email: '',
  message: '',
  mobile: '',
  type: 'contact',
};
 const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);


  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.mobile) newErrors.mobile = 'Mobile is required';
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' })); // Clear error on change
  };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   if (!validateForm()) return; // Prevent submission if invalid

  //   try {
  //     await axios.post('http://localhost:5050/api/enquiries&messages/add/new', formData);
  //     setFormSubmitted(true);
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //     setErrors(prev => ({ ...prev, form: 'Failed to submit the form. Please try again later.' }));
  //   }
  // };

  const handleFormSubmit = async (event) => {
  event.preventDefault();
  if (!validateForm()) return; // Prevent submission if invalid

  try {
    await axios.post('http://localhost:5050/api/enquiries&messages/add/new', formData);

    // Success toast
    toast.success('Form submitted successfully!', {
      position: "top-right",
      autoClose: 3000, // 5 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    setFormSubmitted(true);
    setFormData(initialFormState);
    setErrors({});
    event.target.reset(); 

  } catch (error) {
    console.error('Error submitting form:', error);

    // Error toast
    toast.error('Failed to submit the form. Please try again later.', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    setErrors(prev => ({ ...prev, form: 'Failed to submit the form. Please try again later.' }));
  }
};




  return (
    <div className="contact-background">
      <div className="container">
        <div className="row">
          <div className="col-md-12 contact-us-headers">
            <p className="contact-subtitle">Contact Us</p>
            <p className="contact-title">Let’s Build Something Great Together</p>
          </div>
        </div>
      </div>

      <div className="container contact-container">
        <div className="row g-4 align-items-center">
          <div className="col-md-4">
            <div className="contact-img">
              <img src={contact} alt="Contact" className="img-fluid rounded-start" />
            </div>
          </div>

          <div className="col-md-8">
            <div className="contact-form">
              <form onSubmit={handleFormSubmit}>
                <div className="row g-3">
                  <div className="col-md-4">
                    <input type="text"
                      name="name"
                      placeholder="Your Name"
                      className="form-control"
                      value={formData.name}
                      required
                      onChange={handleInputChange}
                      isInvalid={!!errors.name} />
                  </div>
                  <div className="col-md-4">
                    <input
  type="text" // use text instead of tel for better control
  name="mobile"
  required
  placeholder="Your Mobile"
  value={formData.mobile}
  onChange={(e) => {
    const onlyNums = e.target.value.replace(/\D/g, ""); // remove non-numeric
    if (onlyNums.length <= 10) {
      handleInputChange({
        target: { name: "mobile", value: onlyNums },
      });
    }
  }}
  pattern="\d{10}"   // must be exactly 10 digits
  maxLength={10}     // restrict length to 10
  className="form-control"
/>

                  </div>
                  <div className="col-md-4">
                    <input type="email"
                      name="email"
                      required
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      isInvalid={!!errors.email} className="form-control" />
                  </div>
                </div>
                <div className="mt-4">
                  <textarea name="message" placeholder="Message *" rows="4" className="form-control"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    isInvalid={!!errors.message}></textarea>
                </div>

                <div className="mt-3">
                  <button type="submit" className="btn ">SEND MESSAGE</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
}
