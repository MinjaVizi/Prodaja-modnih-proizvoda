import React from 'react';
// import facebookIcon from '../Images/facebook.png';
// import instagramIcon from '../Images/instagram.png';
// import emailIcon from '../Images/email.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-heading">POMOĆ PRI KUPOVINI</div>
        <a href="/o-nama" className="footer-link">O nama</a>
        <a href="/registracija" className="footer-link">Registracija</a>
        <a href="/reklamacije" className="footer-link">Reklamacije</a>
      </div>
      <div className="footer-section">
        <div className="footer-heading">RADNO VREME CALL CENTRA</div>
        <p>Ponedeljak - Petak</p>
        <p>08:00 - 16:00 h</p>
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com" className="social-icon">
          {/* <img src={facebookIcon} alt="Facebook" /> */}
        </a>
        <a href="https://www.instagram.com" className="social-icon">
          {/* <img src={instagramIcon} alt="Instagram" /> */}
        </a>
        <a href="mailto:info@example.com" className="social-icon">
          {/* <img src={emailIcon} alt="Email" /> */}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
