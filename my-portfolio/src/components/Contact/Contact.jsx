import React from 'react'
import "./Contact.css"



export default function Contact() {
  return (
    <div className="contact-section">
      <h1 className="section-title">Contact Me</h1>
      <p className="section-subtitle">
        Have a project in mind or want to collaborate? Drop me a message!
      </p>

      <div className="contact-container">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn submit-btn">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><strong>Email:</strong> moraco@example.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Location:</strong> Mumbai, India</p>
        </div>
      </div>
    </div>
  )
}
