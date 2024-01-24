import React, { useState, useEffect } from 'react';
import JedanProizvod from './JedanProizvod';
import backgroundImg from './Images/pocetna1.png';
import '../App.css';
import Haljina from './Images/Haljina.jpg';
import satt from './Images/sat.jpeg';
import majica from './Images/majica.jpg';
import jakna from './Images/kozna jakna.jpg';
import dzemper from './Images/dzemper.jpeg';
import Pantalone from './Images/pantalone.jpg';
import patike from './Images/patike.jpeg';
import sako from './Images/sako.jpg';
import sandale from './Images/sandale.jpeg';
import sesir from './Images/sesir.jpg';
import suknja from './Images/suknja.jpg';
import torba from './Images/torba.jpg';

import '../App.css';

const OnlineProdavnica = ({ pretraga, dodajUKorpu, dodajUOmiljeno }) => {
  const proizvodi = [
    {
        naziv: 'Haljina H3200',
        opis: 'Elegantna crna haljina sa detaljima na rukavima.',
        cena: '3,490.00',
        slike: [Haljina], },
    
    {
      naziv: 'Elegantna Torba',
      opis: 'Prostrana i praktična torba, idealna za posao.',
      cena: '5,000.00',
      slike: [torba]
    },
    {
      naziv: 'Pleteni Džemper',
      opis: 'Topao džemper za hladne dane, dostupan u više boja.',
      cena: '2,800.00',
      slike: [dzemper]
    },
    {
      naziv: 'Šik Šešir',
      opis: 'Dodajte malo elegancije vašem izgledu ovim klasičnim šeširom.',
      cena: '1,500.00',
      slike: [sesir]
    },
    {
      naziv: 'Klasične Pantalone',
      opis: 'Udobne i elegantne, savršene za poslovne prilike.',
      cena: '3,300.00',
      slike: [Pantalone]
    },
    {
      naziv: 'Letnja Suknja',
      opis: 'Lagana i prozračna, idealna za tople dane.',
      cena: '2,200.00',
      slike: [suknja]
    },
    {
      naziv: 'Modne Sandale',
      opis: 'Savršene za prolećne i letnje šetnje.',
      cena: '3,100.00',
      slike: [sandale]
    },
    {
      naziv: 'Casual Majica',
      opis: 'Jednostavna i udobna, dostupna u različitim bojama.',
      cena: '1,200.00',
      slike: [majica]
    },
    {
      naziv: 'Poslovni Sako',
      opis: 'Elegantan sako za formalne prilike.',
      cena: '6,800.00',
      slike: [sako]
    },
    {
        naziv: 'Ekskluzivni Sat',
        opis: 'Luksuzni ručni sat sa kožnim kaišem i elegantnim dizajnom.',
        cena: '12,000.00',
        slike: [satt]    
      },
      {
        naziv: 'Kožna Jakna',
        opis: 'Moderan i urbani stil, savršeno se uklapa u svaku kombinaciju.',
        cena: '7,500.00',
        slike: [jakna]
      },
      {
        naziv: 'Sportske Patike',
        opis: 'Udobne patike za svakodnevnu upotrebu.',
        cena: '4,200.00',
        slike: [patike]
      },
    ];
    const filtriraniProizvodi = proizvodi.filter(proizvod =>
      proizvod.naziv.toLowerCase().includes(pretraga.toLowerCase()) ||
      proizvod.opis.toLowerCase().includes(pretraga.toLowerCase())
    );
  
    return (
      <div className="onama-background" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="content">
          <div className="online-prodavnica-container">
            {filtriraniProizvodi.map((proizvod, index) => (
              <JedanProizvod 
                key={index}
                {...proizvod}
                dodajUKorpu={() => dodajUKorpu(proizvod)}
                dodajUOmiljeno={() => dodajUOmiljeno(proizvod)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default OnlineProdavnica;