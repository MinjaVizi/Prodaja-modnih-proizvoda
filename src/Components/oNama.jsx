import React from 'react';
import backgroundImg from '../Images/pocetna1.png';
import '../App.css';

const oNama = () => {
  return (
    <div className="onama-background" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="onama-content">
        <h1>Prodaja modnih proizvoda</h1>
        <p>
          Dobrodošli u svet gde moda susreće eleganciju i stil. Naša prodavnica je dom svakog komada odeće koji možete zamisliti - od vrhunskih džempera do elegantnih večernjih haljina.
        </p>
        <p>
          Osnovani s vizijom da pružimo nezaboravno iskustvo kupovine, posvećeni smo tome da vam donesemo najnovije trendove i bezvremensku klasiku koja će osnažiti vašu individualnost.
        </p>
        <p>
          Svaki komad naše pažljivo odabrane kolekcije odražava našu strast za kvalitetom i dizajnom. Bilo da tražite casual izgled za svaki dan ili nešto što će vas izdvojiti na posebnim događajima, kod nas ćete pronaći savršen fit.
        </p>
        <p>
          Dođite i istražite naš široki asortiman - od šik bluza i pantalona pa sve do aksesoara koji svaki outfit podižu na viši nivo. U Modnom Proizvodu, modno putovanje postaje avantura koja čeka da je otkrijete.
        </p>
        <p>
          Posvećeni smo pružanju izvanredne usluge i personalizovanog iskustva koje će učiniti da se vraćate po još. Vaš stil je naša misija, i radujemo se što ćemo biti deo vaše modne priče.
        </p>
      </div>
    </div>
  );
};

export default oNama;
