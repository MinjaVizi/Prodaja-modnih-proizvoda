import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../Images/logo.png';

const Navbar = () => {
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
      <input type="text" placeholder="Pretraga proizvoda..." className="search-input" />
    </nav>
  );
};

export default Navbar;
