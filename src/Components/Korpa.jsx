import React, { useState } from 'react';
import backgroundImg from './Images/pocetna1.png';

const Korpa = ({ korpa, setKorpa }) => {
  const [placanje, setPlacanje] = useState('pouzecem');
  const [cvc, setCVC] = useState('');
  const [brojKartice, setBrojKartice] = useState('');
  const [datumIsteka, setDatumIsteka] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [korak, setKorak] = useState(1);
  const [ime, setIme] = useState('');
  const [prezime, setPrezime] = useState('');
  const [adresa, setAdresa] = useState('');
  const [email, setEmail] = useState('');

  const validacijaPolja = () => {
    if (korak === 2) {
      return ime && prezime && adresa && email;
    }
    if (korak === 3 && placanje === 'karticom') {
      return brojKartice && datumIsteka && cvc;
    }
    return true;
  };

  const potvrdiKupovinu = () => {
    setModalOpen(true);
    setKorpa([]);
  };

  const zatvoriModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="onama-background" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="korpa-wrapper">
        {korak === 1 && (
          <>
            <div className="korpa-container">
              <h2>Proizvodi u korpi</h2>
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
              <button onClick={() => setKorak(2)} className="next-btn">Next</button>
            </div>
          </>
        )}
        {korak === 2 && (
          <>
            <div className="korpa-container">
              <h2>Unesite podatke o kupcu:</h2>
              <div className="form-container">
                <div className="form-group">
                  <label>Ime:</label>
                  <input type="text" value={ime} onChange={(e) => setIme(e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Prezime:</label>
                  <input type="text" value={prezime} onChange={(e) => setPrezime(e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Adresa:</label>
                  <input type="text" value={adresa} onChange={(e) => setAdresa(e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>
              <button onClick={() => validacijaPolja() && setKorak(3)} className="next-btn" disabled={!validacijaPolja()}>Next</button>
            </div>
          </>
        )}
        {korak === 3 && (
          <>
            <div className="korpa-container">
              <h2>Način plaćanja</h2>
              <div className="form-container">
                <label>
                  <select value={placanje} onChange={(e) => setPlacanje(e.target.value)}>
                    <option value="pouzecem">Plaćanje pouzećem</option>
                    <option value="karticom">Plaćanje karticom</option>
                  </select>
                </label>
                {placanje === 'karticom' && (
                  <div>
                    <div className="form-group">
                      <label>Broj kartice:</label>
                      <input type="text" value={brojKartice} onChange={(e) => setBrojKartice(e.target.value)} maxLength={16} />
                    </div>
                    <div className="form-group">
                      <label>Ime na kartici:</label>
                      <input type="text" />
                    </div>
                    <div className="form-group">
                      <label>Datum isteka (mm/yy):</label>
                      <input type="text" value={datumIsteka} onChange={(e) => setDatumIsteka(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label>CVC kod:</label>
                      <input type="text" value={cvc} onChange={(e) => setCVC(e.target.value)} maxLength={4} />
                    </div>
                  </div>
                )}
              </div>
              <button onClick={potvrdiKupovinu} className="potvrdi-btn" disabled={!validacijaPolja()}>Potvrdi kupovinu</button>
            </div>
          </>
        )}
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
