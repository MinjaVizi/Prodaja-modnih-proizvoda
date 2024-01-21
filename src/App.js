import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pocetna from './Components/Pocetna';
import Navbar from './Components/Navbar'; // Ensure the path to Navbar is correct
import Footer from './Components/Footer'; // Ensure the path to Footer is correct
import OnlineProdavnica from './Components/OnlieProdvnica';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar component will show on every page */}
      <Routes>
        <Route path="/" element={<Pocetna />} />
        <Route path="/online-prodavnica" element={<OnlineProdavnica />} />

        {/* Other routes can be added here */}
      </Routes>
      <Footer /> {/* Footer component will show on every page */}
    </Router>
  );
};

export default App;
