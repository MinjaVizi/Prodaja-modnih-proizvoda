import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css';
import pocetna from '../Images/pocetna.png'; // Ensure this path is correct

const Pocetna = () => {
  return (
    <>
      <Navbar />
      <div className="homepage-container">
        <img src={pocetna} alt="pocetna" className="homepage-background" />
        <div className="welcome-message">
          <h1>Dobrodošli u našu modnu prodavnicu!</h1>
          <p>Otkrijte najnovije trendove i pronađite svoj jedinstveni stil uz našu ekskluzivnu selekciju modnih proizvoda.</p>
          <p>Kupujte sada i prepustite se svetu mode!</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pocetna;
