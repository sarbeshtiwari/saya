import React, { useState } from 'react';
import Navbar from '../components/navbar';
import FooterAll from '../components/footer2';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CustomerSupports() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    project_name: '',
    city: '',
    state: '',
    comments: '',
    query_nature: 'Customer Support',
    created: new Date().toISOString() // Current date and time
  });
  const [successMessage, setSuccessMessage] = useState('');
  
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
      const response = await axios.post('http://localhost:8080/customerSupport/upload', dataToSend);
      console.log('Form submitted successfully:', response.data);
      setSuccessMessage('Your request has been submitted successfully!'); // Set success message

      // Clear form data
      setFormData({
        name: '',
        email: '',
        mobile: '',
        project_name: '',
        city: '',
        state: '',
        comments: '',
        query_nature: 'Customer Support',
        created: new Date().toISOString()
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSuccessMessage('There was an error submitting your request.'); // Set error message
    }
  };

  return (
    <div>
      <Navbar />
      <div className="emptyBox"></div>
      <div className="pageTitle py-5 bg-orange w-100">
        <div className="container-lg">
          <h1 className="display-4 mb-0">Customer Support</h1>
        </div>
      </div>
      <div className="breadcrumbContainer">
        <div className="container-lg">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to='/sayahomes-react'>Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Customer Support</li>
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
                        <h3 className="mb-0 text-serif text-orange">Customer Support</h3>
                      </div>
                      <ul className="list-inline">
                        <li><i className="fa fa-phone"></i><a href="tel:+919540812345"><span> +91 95408 12345</span></a></li>
                        <li><i className="fa fa-envelope"></i><a href="mailto: customercare@sayahomes.in"><span className="__cf_email__" data-cfemail="3754424443585a5245545645527744564e565f585a5244195e59">customercare@sayahomes.in</span></a></li>
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
                    <h3 className="text-serif text-orange">Customer Support</h3>
                  </div>
                  <span className="text-danger constatus">{successMessage}</span>
                  <form id="contactForm" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <label htmlFor="name">Name *</label>
                        <input type="text" className="form-control form-control-bg" name="name" id="name" value={formData.name} onChange={handleChange} required />
                      </div>
                      <div className="col-md-6 form-group">
                        <label htmlFor="mobile">Mobile *</label>
                        <input type="text" className="form-control form-control-bg" name="mobile" id="mobile" value={formData.mobile} onChange={handleChange} required />
                      </div>
                      <div className="col-md-6 form-group">
                        <label htmlFor="email">Email *</label>
                        <input type="email" className="form-control form-control-bg" name="email" id="email" value={formData.email} onChange={handleChange} required />
                      </div>
                      <div className="col-md-6 form-group">
                        <label htmlFor="project_name">Project Name *</label>
                        <select id="project_name" name="project_name" className="form-control form-control-bg" value={formData.project_name} onChange={handleChange} required>
                          <option value="">---</option>
                          <option value="Saya Gold Avenue">Saya Gold Avenue</option>
                          <option value="Saya Zion">Saya Zion</option>
                          <option value="Saya Zenith">Saya Zenith</option>
                          <option value="Saya Desire Residency">Saya Desire Residency</option>
                          <option value="Saya South X">Saya South X</option>
                          <option value="Saya Piazza">Saya Piazza</option>
                        </select>
                      </div>
                      <div className="col-md-12 form-group">
                        <label htmlFor="comments">Query</label>
                        <textarea className="form-control form-control-bg" name="comments" id="comments" rows="4" value={formData.comments} onChange={handleChange}></textarea>
                      </div>
                      <div className="col-md-12 readmore">
                        <input type="hidden" id="query_nature" name="query_nature" value="active" />
                        <button type="submit" className="button justify-content-start" id="contsubmti">
                          <span className="icon"><i className="fa-solid fa-arrow-right"></i></span>
                          <span className="text" id="contidbtn">Submit</span>
                          <span className="icon"><i className="fa-solid fa-arrow-right"></i></span>
                        </button>
                      </div>
                    </div>
                  </form>
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

export default CustomerSupports;
