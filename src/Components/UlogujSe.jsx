import React from 'react';
import { Link } from 'react-router-dom'; 
import '../App.css';

const UlogujSe = () => {
  return (
    
    <div className="login-page-content">   
      <div className="login-form-section">
        <div className="login-form">
          <h2>ULOGUJ SE</h2>
          <div className="form-group">
            <label htmlFor="email">Vaš email:</label>
            <input type="email" id="email" placeholder="Vaš email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Lozinka:</label>
            <input type="password" id="password" placeholder="Lozinka" />
          </div>
          <a href="#" className="forgot-password">Zaboravili ste lozinku?</a>
          <button className="login-button">PRIJAVA</button>
          <div className="register-link">
            Novi korisnik?       
            <Link to="/registracija">    REGISTRUJTE SE</Link> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default UlogujSe;
