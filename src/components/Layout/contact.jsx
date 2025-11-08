import React, { useState } from 'react';
import './ContactPage.css';
import {NavLink} from 'react-router-dom'
export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="cp-root">
      <div className="cp-container">
        <div className="cp-hero">
          <h1>Contact Us</h1>
          <p>Get in touch with us for any questions or concerns</p>
        </div>

        <div className="cp-layout">
          <div className="cp-info-section">
            <div className="cp-panel">
              <h2>Contact Information</h2>
              <div className="cp-info-grid">
                <div className="cp-info-item">
                  <div className="cp-info-icon">📧</div>
                  <div className="cp-info-content">
                    <h3>Email</h3>
                    <p>support@example.com</p>
                  </div>
                </div>
                <div className="cp-info-item">
                  <div className="cp-info-icon">📞</div>
                  <div className="cp-info-content">
                    <h3>Phone</h3>
                    <p>+91 (955) 1234567</p>
                  </div>
                </div>
                <div className="cp-info-item">
                  <div className="cp-info-icon">📍</div>
                  <div className="cp-info-content">
                    <h3>Address</h3>
                    <p>123, Scheme-2 , New Delhi<br />New Delhi, India</p>
                  </div>
                </div>
                <div className="cp-info-item">
                  <div className="cp-info-icon">💬</div>
                  <div className="cp-info-content">
                    <h3>Social Media</h3>
                    <div className="cp-social-list">
                      <a href="#" className="cp-social-link">Twitter</a>
                      <a href="#" className="cp-social-link">LinkedIn</a>
                      <a href="#" className="cp-social-link">Facebook</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cp-form-section">
            <div className="cp-panel">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="cp-form-field">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="cp-form-field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="cp-form-field">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="cp-form-field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="cp-submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <NavLink to="/" className="error-button">
        Return Home
      </NavLink>
    </div>
  );
};