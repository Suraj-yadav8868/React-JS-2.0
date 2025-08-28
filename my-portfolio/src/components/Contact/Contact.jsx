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
        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn submit-btn">Send Message</button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><strong>Email:</strong> yadavsuraj2334@gmail.com</p>
          <p><strong>Phone:</strong> +91 9169727997</p>
          <p><strong>Location:</strong> Indian Stock Exchange, Mumbai - surajtrades-x</p>
        </div>
      </div>
    </div>
  )
}
