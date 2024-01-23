import React from 'react';
import backgroundImg from './Images/pocetna1.png';
import '../App.css';

const Pocetna = () => {
  return (
    <div className="onama-background" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="content">
        <div className="welcome-message">
          <h1>Otkrijte Modni Raj</h1>
          <p>Uđite u svet gde se svaki vaš korak prati divljenjem. Gde se elegancija spaja s komforom, a luksuz s pristupačnošću. Naša kolekcija donosi vam sve - od savršenog para cipela koje će odzvanjati svakim vašim korakom, do haljina koje pričaju priče.</p>
          <p>Istražite našu paletu proizvoda, gde svaki komad govori o pažnji i ljubavi prema detaljima. Naša prodavnica je više od mesta za kupovinu - to je mesto gde se moda živi i diše, gde se svaki komad brižljivo bira da bi vašem stilu dao novu dimenziju.</p>
          <p>Neka vaša garderoba bude odraz vaše ličnosti. Odaberite odjeću koja će vas pratiti u svim avanturama života. Kupujte sada i dozvolite da moda bude vaš vodič kroz priče koje ćete tek ispričati.</p>
        </div>
      </div>
    </div>
  );
};

export default Pocetna;
