import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">

          <div className="col-md-4">
            <div className="footer-info">
              <i className="bi bi-geo-alt"></i>
              <h4>Alamat</h4>
              <p>
                Jl. Gatot Subroto No.83<br />
                The Papandayan Hotel 40262 Bandung
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="footer-info">
              <i className="bi bi-phone"></i>
              <h4>Contact</h4>
              <p>
                Phone: +62 85672310992 <br />
                Email: yummyresto@gmail.com
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="footer-info">
              <i className="bi bi-clock"></i>
              <h4>Jam Buka</h4>
              <p>
                Senin-Sabtu: 10 Siang -10 Malam <br />
                Minggu: Tutup
              </p>
            </div>
          </div>
        </div>

        <div className="row copyright">
          <div className="col text-center">
            <p>&copy; 2024 Yummy Restaurant. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
