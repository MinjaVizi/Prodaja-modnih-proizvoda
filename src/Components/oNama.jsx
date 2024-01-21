import React from 'react';
import '../App.css';
import backgroundImg from '../Images/pocena.png'; // Pretpostavka da je ovo tačna putanja

const ONama = () => {
  return (
    <div className="onama-background" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="onama-content">
        <h1>O Nama</h1>
        <p>Dobrodošli u našu online prodavnicu modnih proizvoda. Naš tim se sastoji od strastvenih profesionalaca koji se bave najnovijim trendovima u modi. Naš cilj je da vam pružimo izuzetan izbor odeće i dodataka, osiguravajući vrhunski kvalitet i najbolje iskustvo kupovine.</p>
      </div>
    </div>
  );
};

export default ONama;
