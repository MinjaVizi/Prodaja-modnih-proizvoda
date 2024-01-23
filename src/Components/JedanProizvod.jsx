import React from 'react';
import '../App.css';
import dodajukorpu from './Images/dodajukorpu.png'; 
import omiljeno from './Images/omiljeno.png';

const JedanProizvod = ({ naziv, opis, cena, slike, dodajUKorpu, dodajUOmiljeno }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        {slike.map((slika, index) => (
          <img key={index} src={slika} alt={`Proizvod ${index}`} />
        ))}
      </div>
      <div className="product-info">
        <div className="product-header">
          <h3>{naziv}</h3>
        </div>
        <p className="product-description">{opis}</p>
        <p className="product-price">{cena} RSD</p>
      </div>
      <div className="product-actions">
        <img src={dodajukorpu} alt="Dodaj u korpu" className="action-icon" onClick={() => {
          dodajUKorpu();
          alert("Proizvod je uspešno dodat u korpu.");
        }} />
        <img src={omiljeno} alt="Omiljeno" className="action-icon" onClick={() => {
          dodajUOmiljeno();
          alert("Uspesno dodato u omiljene.");
        }} />
      </div>
    </div>
  );
};

export default JedanProizvod;
