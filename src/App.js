import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pocetna from './Components/Pocetna';
import Navbar from './Components/Navbar';
import OnlineProdavnica from './Components/OnlieProdvnica'; 
import Registracija from './Components/Registracija';
import UlogujSe from './Components/UlogujSe';
import ONama from './Components/oNama'; 
import Footer from './Components/Footer';
import Korpa from './Components/Korpa';
import Omiljeno from './Components/Omiljeno';

import './App.css';

const App = () => {
  const [korpa, setKorpa] = useState([]);
  const [omiljeno, setOmiljeno] = useState([]);

  const dodajUKorpu = (proizvod) => {
    setKorpa([...korpa, proizvod]);
  };

  const dodajUOmiljeno = (proizvod) => {
    setOmiljeno([...omiljeno, proizvod]);
  };

  const ukloniIzOmiljenih = (index) => {
    setOmiljeno(omiljeno.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Pocetna />} />
            <Route path="/online-prodavnica" element={<OnlineProdavnica dodajUKorpu={dodajUKorpu} dodajUOmiljeno={dodajUOmiljeno} />} />
            <Route path="/o-nama" element={<ONama />} /> 
            <Route path="/registracija" element={<Registracija />} />
            <Route path="/uloguj-se" element={<UlogujSe />} />
            <Route path="/Korpa" element={<Korpa korpa={korpa} setKorpa={setKorpa} />} />
            <Route path="/omiljeno" element={<Omiljeno omiljeno={omiljeno} ukloniIzOmiljenih={ukloniIzOmiljenih} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
