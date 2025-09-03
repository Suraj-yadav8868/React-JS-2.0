import React, { useState } from "react";
import "./Footer.css";

export default function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been received.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <footer className="footer text-light py-4 mt-5">
      <div className="container">
        <div className="row align-items-start">
          
          {/* User Info */}
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0 mt-5">
            <h5 className="fw-bold">Suraj Yadav</h5>
            <p className="mb-0 small">Full Stack Developer | React Enthusiast</p>
            <p className="mb-0 small">📍 Mumbai, India</p>
          </div>

          {/* Links - Vertical */}
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0 mt-5">
            <div className="footer-links-vertical">
              <a
                href="mailto:surajyadav@example.com"
                className="text-decoration-none d-block mb-2"
              >
                📧 Email
              </a>
              <a
                href="https://github.com/Suraj-yadav8868"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none d-block mb-2"
              >
                💻 GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/surajyadav"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none d-block"
              >
                🔗 LinkedIn
              </a>
            </div>
          </div>

          {/* Query Form */}
          <div className="col-md-4">
            <h6 className="fw-bold text-center text-md-start">Any Query? Contact Me</h6>
            <form onSubmit={handleSubmit} className="query-form">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>

        {/* Credits */}
        <div className="text-center mt-4">
          <small className="text-muted">
            &copy; {new Date().getFullYear()} Suraj Yadav. All Rights Reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}
