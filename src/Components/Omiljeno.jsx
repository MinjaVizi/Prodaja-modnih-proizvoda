import React from 'react';
import '../App.css';
import backgroundImg from '../Images/pocetna1.png';

const Omiljeno = ({ omiljeno, ukloniIzOmiljenih }) => {
  return (
    <div className="onama-background" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="content">
        {omiljeno.length > 0 ? (
          omiljeno.map((proizvod, index) => (
            <div key={index} className="product-card">
              <button className="remove-btn" onClick={() => ukloniIzOmiljenih(index)}>X</button>
              {proizvod.slike && proizvod.slike[0] && (
                <img src={proizvod.slike[0]} alt={`Slika ${proizvod.naziv}`} className="product-image" />
              )}
              <h3>{proizvod.naziv}</h3>
              <p>{proizvod.opis}</p>
              <p>{proizvod.cena} RSD</p>
            </div>
          ))
        ) : (
          <p>Nemate omiljenih proizvoda.</p>
        )}
      </div>
    </div>
  );
};

export default Omiljeno;
