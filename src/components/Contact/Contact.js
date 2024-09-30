import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="contact-title">Contact Us</h2>
        
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="info-box">
              <i className="bi bi-envelope"></i>
              <h3>Email Us</h3>
              <p>yummyresto@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="info-box">
              <i className="bi bi-clock"></i>
              <h3>Jam Buka</h3>
              <p>Senin-Sabtu: 10 Siang - 10 Malam; Minggu: Tutup</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <form className="contact-form">
              <div className="row">
                <div className="col-md-6">
                  <input type="text" className="form-control" name="name" placeholder="Your Name" required />
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-danger">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
