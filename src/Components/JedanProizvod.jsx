import React from 'react';
import '../App.css';

const JedanProizvod = ({ naziv, opis, cena, slike }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        {slike.map((slika, index) => (
          <img key={index} src={slika} alt={`Proizvod ${index}`} />
        ))}
      </div>
      <div className="product-info">
        <div className="product-header">
          <span className="new-label">NOVO</span>
          <h3>{naziv}</h3>
        </div>
        <p className="product-description">{opis}</p>
        <p className="product-price">{cena} RSD</p>
        <button className="product-option-btn">ODABERITE OPCIJE</button>
      </div>
      <div className="product-actions">
        <img src="https://img.icons8.com/ios-filled/50/000000/add-shopping-cart.png" alt="Dodaj u korpu" className="action-icon" />
        <img src="https://img.icons8.com/ios-filled/50/000000/favorite-cart.png" alt="Omiljeno" className="action-icon" />
      </div>
    </div>
  );
};

export default JedanProizvod;
