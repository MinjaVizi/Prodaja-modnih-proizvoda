import React from 'react';
import backgroundImg from '../Images/pocetna1.png';

import '../App.css';

const Pocetna = () => {
  return (
    <div className="onama-background" style={{ backgroundImage: `url(${backgroundImg})` }}>

    <div className="content pocetna-background">
      <div className="homepage-container">
        <div className="welcome-message">
          <h1>Dobrodošli u našu modnu prodavnicu!</h1>
          <p>Otkrijte najnovije trendove i pronađite svoj jedinstveni stil uz našu ekskluzivnu selekciju modnih proizvoda.</p>
          <p>Kupujte sada i prepustite se svetu mode!</p>
        </div>
      </div>
    </div>    </div>

  );
};

export default Pocetna;
