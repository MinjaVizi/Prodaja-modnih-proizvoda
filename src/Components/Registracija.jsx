import React, { useState } from 'react';
import '../App.css';


const Registracija = () => {
  const [form, setForm] = useState({
    ime: '',
    email: '',
    telefon: '',
    grad: '',
    adresa: '',
    postanskiBroj: '',
    lozinka: '',
    potvrdiLozinku: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika za slanje podataka na server ili neku drugu logiku obrade
    console.log('Form data:', form);
  };

  return (
    <div className="registration-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="ime">Ime i prezime:</label>
          <input type="text" id="ime" name="ime" value={form.ime} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Vaš email:</label>
          <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="telefon">Telefon:</label>
          <input type="tel" id="telefon" name="telefon" value={form.telefon} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="grad">Grad:</label>
          <input type="text" id="grad" name="grad" value={form.grad} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="adresa">Adresa:</label>
          <input type="text" id="adresa" name="adresa" value={form.adresa} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="postanskiBroj">Poštanski broj:</label>
          <input type="text" id="postanskiBroj" name="postanskiBroj" value={form.postanskiBroj} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="lozinka">Lozinka:</label>
          <input type="password" id="lozinka" name="lozinka" value={form.lozinka} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="potvrdiLozinku">Ponovite lozinku:</label>
          <input type="password" id="potvrdiLozinku" name="potvrdiLozinku" value={form.potvrdiLozinku} onChange={handleChange} required />
        </div>
        <button type="submit" className="registration-btn">REGISTRACIJA</button>
      </form>
    </div>
  );
};

export default Registracija;