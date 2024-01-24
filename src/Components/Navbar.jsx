import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import logo from './Images/logo.png';

const Navbar = ({ pretraga, setPretraga }) => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <div className="brand-name">
        Modni<br />
        Proizvodi
      </div>
      <Link to="/" className="navbar-link">Početna</Link>
      <Link to="/online-prodavnica" className="navbar-link">Online Prodavnica</Link>
      <Link to="/korpa" className="navbar-link">Korpa</Link>
      <Link to="/omiljeno" className="navbar-link">Omiljeno</Link>
      {(location.pathname === '/online-prodavnica' || location.pathname === '/omiljeno') && (
        <input type="text" placeholder="Pretraga..." className="search-input" value={pretraga} onChange={(e) => setPretraga(e.target.value)} />
      )}
    </nav>
  );
};

export default Navbar;