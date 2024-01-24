import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import backgroundImg from './Images/pocetna1.png';

const UlogujSe = ({ korisnici }) => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [lozinka, setLozinka] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const korisnik = korisnici.find(k => k.email == email && k.lozinka== lozinka);
    if (korisnik) {
      alert(`Uspešno logovanje! Dobrodošli ${korisnik.ime}`);
      navigate('/online-prodavnica')
    } else {
      alert('Pogrešan email ili lozinka.');
    }
  };

  return (
    <div className="onama-background" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="login-page-content">   
        <div className="login-form-section">
          <div className="login-form">
            <h2>ULOGUJ SE</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Vaš email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Vaš email" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Lozinka:</label>
                <input type="password" id="password" value={lozinka} onChange={(e) => setLozinka(e.target.value)} placeholder="Lozinka" required />
              </div>
              <button type="submit" className="login-button">PRIJAVA</button>
            </form>
            <div className="register-link">
              Novi korisnik? <Link to="/registracija">REGISTRUJTE SE</Link> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UlogujSe;
