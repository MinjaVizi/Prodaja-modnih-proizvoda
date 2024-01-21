import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pocetna from './Components/Pocetna';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import OnlineProdavnica from './Components/OnlieProdvnica';
import Registracija from './Components/Registracija';
import UlogujSe from './Components/UlogujSe';
import ONama from './Components/oNama'; 
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Pocetna />} />
            <Route path="/online-prodavnica" element={<OnlineProdavnica />} />
            <Route path="/o-nama" element={<ONama />} /> 
            <Route path="/registracija" element={<Registracija />} />
            <Route path="/uloguj-se" element={<UlogujSe />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
