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
  const [pretraga, setPretraga] = useState("");
  const [korisnici, setKorisnici] = useState([
    {
      id: 1,
      ime: 'Ana Anić',
      email: 'ana.anic@gmail.com',
      telefon: '0123456789',
      grad: 'Beograd',
      adresa: 'Ulica 1',
      postanskiBroj: '11000',
      lozinka: 'ana123'
    },
    {
      id: 2,
      ime: 'Nikola Nikolić',
      email: 'nikola.nikolic@gmail.com',
      telefon: '9876543210',
      grad: 'Novi Sad',
      adresa: 'Ulica 2',
      postanskiBroj: '21000',
      lozinka: 'nikola123'
    },
    {
      id: 3,
      ime: 'Jovan Jovanić',
      email: 'jovan.jovanic@gmail.com',
      telefon: '1234567890',
      grad: 'Niš',
      adresa: 'Ulica 3',
      postanskiBroj: '18000',
      lozinka: 'jovan123'
    }
  ]);

  const dodajUKorpu = (proizvod) => {
    setKorpa([...korpa, proizvod]);
  };

  const dodajUOmiljeno = (proizvod) => {
    setOmiljeno([...omiljeno, proizvod]);
  };

  const ukloniIzOmiljenih = (index) => {
    setOmiljeno(omiljeno.filter((_, i) => i !== index));
  };

  const dodajKorisnika = (noviKorisnik) => {
    setKorisnici([...korisnici, {...noviKorisnik, id: korisnici.length + 1 }]);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar pretraga={pretraga} setPretraga={setPretraga} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Pocetna />} />
            <Route path="/online-prodavnica" element={<OnlineProdavnica pretraga={pretraga} dodajUKorpu={dodajUKorpu} dodajUOmiljeno={dodajUOmiljeno} />} />
            <Route path="/o-nama" element={<ONama />} />
            <Route path="/registracija" element={<Registracija dodajKorisnika={dodajKorisnika} />} />
            <Route path="/uloguj-se" element={<UlogujSe korisnici={korisnici} />} />
            <Route path="/korpa" element={<Korpa korpa={korpa} setKorpa={setKorpa} />} />
            <Route path="/omiljeno" element={<Omiljeno omiljeno={omiljeno} ukloniIzOmiljenih={ukloniIzOmiljenih} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
