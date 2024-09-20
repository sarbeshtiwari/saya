import React, { useState } from 'react';
import Navbar from '../components/navbar';
import FooterAll from '../components/footer2';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    comments: '',
    query_nature: 'Contact Us',
    created: new Date().toISOString() // Current date and time
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formatDateForMySQL = (date) => {
    const d = new Date(date);
    return d.toISOString().slice(0, 19).replace('T', ' ');
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Format the created date for MySQL
    const formattedDate = formatDateForMySQL(new Date());

    const dataToSend = { ...formData, created: formattedDate };

    try {
      const response = await axios.post('https://ecis.in/apis/sayahomes/customerSupport/upload', dataToSend);
      console.log('Form submitted successfully:', response.data);
      setSuccessMessage('Your message has been sent successfully.');
      setFormData({
        name: '',
        email: '',
        mobile: '',
        comments: '',
        query_nature: 'Contact Us',
        created: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('There was an error submitting your message. Please try again.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="emptyBox"></div>
      <div className="pageTitle py-5 bg-orange w-100">
        <div className="container-lg">
          <h1 className="display-4 mb-0">Contact Us</h1>
        </div>
      </div>
      <div className="breadcrumbContainer">
        <div className="container-lg">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
          </ol>
        </div>
      </div>
      <div className="w-100 padding position-relative">
        <div className="container-lg">
          <div className="row gap-row">
            <div className="col-sm-5">
              <div className="row gap-row">
                <div className="col-sm-12">
                  <div className="card contactCard bg-secondary-light h-100">
                    <div className="card-body">
                      <div className="heading">
                        <h3 className="mb-0 text-serif text-orange">Locate Us</h3>
                      </div>
                      <p className="mb-0 card-text">Plot No. C-01, Sector Ecotech-12, <br />Greater Noida (W) - 201306, <br />Gautam Budh Nagar (U.P.)</p>
                      <ul className="list-inline">
                        <li><i className="fa fa-phone"></i><a href="tel:01204491800"><span className="d-block">0120-4491800</span></a></li>
                        <li><i className="fa fa-map-marker-alt"></i><a href="https://maps.app.goo.gl/kCj3iUB2DmCseyEE8" target="_blank" rel="noopener noreferrer">Get Location</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="card contactCard bg-secondary-light h-100">
                    <div className="card-body">
                      <div className="heading">
                        <h3 className="mb-0 text-serif text-orange">Contact Details</h3>
                      </div>
                      <ul className="list-inline">
                        <li><i className="fa fa-envelope"></i><a href="mailto:contact@sayahomes.in"><span className="__cf_email__">contact@sayahomes.in</span></a></li>
                        <li><i className="fa fa-users"></i><a href="tel:+919899508508"><span className="d-block">Customer Relationship Management</span> <span>+91 95408 12345</span></a></li>
                        <li><i className="fa fa-building"></i><a href="tel:+918888718888"><span className="d-block">Residential Projects</span> <span>+91 8888 71 8888</span></a></li>
                        <li><i className="fa fa-shop"></i><a href="tel:+918888328888"><span className="d-block">Commercial Projects</span> <span>+91 8888 32 8888</span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-7">
              <div className="card contactCard shadow-sm h-100">
                <div className="card-body">
                  <div className="heading">
                    <h3 className="text-serif text-orange">Contact Form</h3>
                    <p className="m-0 w-100">We would love to hear from you.</p>
                  </div>
                  {successMessage && <div className="alert alert-success">{successMessage}</div>}
                  {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                  <form id="contactForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Name *</label>
                      <input type="text" className="form-control form-control-bg" name="name" id="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input type="email" className="form-control form-control-bg" name="email" id="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="mobile">Mobile *</label>
                      <input type="text" className="form-control form-control-bg" name="mobile" id="mobile" value={formData.mobile} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="comments">Query</label>
                      <textarea className="form-control form-control-bg" name="comments" id="comments" rows="4" value={formData.comments} onChange={handleChange}></textarea>
                    </div>
                    <div className="readmore">
                      <input type="hidden" name="query_nature" value="Contact Us" />
                      <button type="submit" className="button justify-content-start" id="contsubmti">
                        <span className="icon"><i className="fa-solid fa-arrow-right"></i></span>
                        <span className="text" id="contidbtn">Submit</span>
                        <span className="icon"><i className="fa-solid fa-arrow-right"></i></span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="card contactCard shadow-sm h-100">
                <div className="card-body">
                  <div className="mapBox">
                    <iframe className="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.910114812492!2d77.44640678745125!3d28.602473222754025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee63cec82b53%3A0xce8c253846aa1a81!2sSaya%20South%20X!5e0!3m2!1sen!2sin!4v1716028532318!5m2!1sen!2sin" frameBorder="0" style={{ border: '0' }} allowFullScreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterAll />
    </div>
  );
}

export default ContactUs;
