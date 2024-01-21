import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pocetna from './Components/Pocetna';
import Navbar from './Components/Navbar'; 
import Footer from './Components/Footer'; 
import OnlineProdavnica from './Components/OnlieProdvnica';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Pocetna />} />
        <Route path="/online-prodavnica" element={<OnlineProdavnica />} />

      </Routes>
      <Footer /> 
    </Router>
  );
};

export default App;
