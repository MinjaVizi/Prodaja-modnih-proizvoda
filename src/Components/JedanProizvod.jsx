import React from 'react';
import '../App.css';
//import addCartIcon from '../path/to/add-cart-icon.png'; // Zamijenite sa stvarnom putanjom do ikonice
//import favoriteIcon from '../path/to/favorite-icon.png'; // Zamijenite sa stvarnom putanjom do ikonice

const JedanProizvod = ({ naziv, opis, cena, slike }) => {
  const openDetails = () => {
    console.log('Detalji proizvoda');
  };

  return (
    <div className="product-card" onClick={openDetails}>
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
        <img src={addCartIcon} alt="Dodaj u korpu" />
        <img src={favoriteIcon} alt="Omiljeno" />
      </div>
    </div>
  );
};

export default JedanProizvod;
