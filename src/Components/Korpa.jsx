import React, { useState } from 'react';
import backgroundImg from '../Images/pocetna1.png';

import '../App.css';

const Korpa = ({korpa, setKorpa}) => {
  const [placanje, setPlacanje] = useState('pouzecem');
  const [cvc, setCVC] = useState('');
  const [brojKartice, setBrojKartice] = useState('');
  const [datumIsteka, setDatumIsteka] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const dodajUKorpu = (proizvod) => {
    setKorpa([...korpa, proizvod]);
  };

  const promeniPlacanje = (event) => {
    setPlacanje(event.target.value);
  };

  const promeniCVC = (event) => {
    const value = event.target.value.slice(0, 4);
    setCVC(value);
  };

  const promeniBrojKartice = (event) => {
    const value = event.target.value.slice(0, 16);
    setBrojKartice(value);
  };

  const promeniDatumIsteka = (event) => {
    const value = event.target.value;
    if (/^\d{0,2}\/\d{0,2}$/.test(value)) {
      setDatumIsteka(value);
    }
  };

  const potvrdiKupovinu = () => {
    setModalOpen(true);
    setKorpa([]); // Isprazni korpu
  };

  const zatvoriModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="onama-background" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="korpa-wrapper">
        <div className="korpa-container">
          <h2>Unesite podatke o kupcu:</h2>
          <div className="form-container">
            <div className="form-group">
              <label>Ime:</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Prezime:</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Adresa:</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="korpa-container">
          <h2>Način plaćanja</h2>
          <div className="form-container">
            <label>
              <select value={placanje} onChange={promeniPlacanje}>
                <option value="pouzecem">Plaćanje pouzećem</option>
                <option value="karticom">Plaćanje karticom</option>
              </select>
            </label>
            {placanje === 'karticom' && (
              <div>
                <div className="form-group">
                  <label>Broj kartice:</label>
                  <input type="text" value={brojKartice} onChange={promeniBrojKartice} maxLength={16} />
                </div>
                <div className="form-group">
                  <label>Ime na kartici:</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>Datum isteka (mm/yy):</label>
                  <input type="text" value={datumIsteka} onChange={promeniDatumIsteka} />
                </div>
                <div className="form-group">
                  <label>CVC kod:</label>
                  <input type="text" value={cvc} onChange={promeniCVC} maxLength={4} />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="korpa-container">
          <h2>Proizvodi u korpi</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Naziv proizvoda</th>
                  <th>Cena</th>
                </tr>
              </thead>
              <tbody>
                {korpa.map((proizvod, index) => (
                  <tr key={index}>
                    <td>{proizvod.naziv}</td>
                    <td>{proizvod.cena} dinara</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <button onClick={potvrdiKupovinu} className="potvrdi-btn">Potvrdi kupovinu</button>
        {modalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span onClick={zatvoriModal} className="modal-close-btn">&times;</span>
              <p>Kupovina uspešna! Rok za dostavu je 3-5 radnih dana.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Korpa;
