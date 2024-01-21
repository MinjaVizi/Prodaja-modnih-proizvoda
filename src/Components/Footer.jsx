import React from 'react';
import facebookIcon from '../Images/facebook.png';
import instagramIcon from '../Images/instagram.png';
import emailIcon from '../Images/email.png';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-heading">PRODAJA MODNIH PROIZVODA</div>
        <a href="/o-nama" className="footer-link">O nama</a>
        <a href="/registracija" className="footer-link">Registracija</a>
        <a href="/uloguj-se" className="footer-link">Uloguj se</a>
      </div>
      <div className="footer-section">
        <div className="footer-heading">RADNO VREME</div>
        <p>Ponedeljak - Petak</p>
        <p>08:00 - 16:00 h</p>
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com" className="social-icon">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com" className="social-icon">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="mailto:info@example.com" className="social-icon">
          <img src={emailIcon} alt="Email" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;