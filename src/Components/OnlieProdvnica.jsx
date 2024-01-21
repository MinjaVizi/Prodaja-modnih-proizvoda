import React from 'react';
import JedanProizvod from './JedanProizvod';
import backgroundImg from '../Images/pocetna1.png';
import '../App.css';

const OnlineProdavnica = ({ dodajUKorpu, dodajUOmiljeno }) => {
  const dummyData = [
    {
      naziv: 'Haljina H3200',
      opis: 'Elegantna crna haljina sa detaljima na rukavima.',
      cena: '3,490.00',
     slike: [
        '../Images/ha',
      ]    },
    {
      naziv: 'Kožna Jakna',
      opis: 'Moderan i urbani stil, savršeno se uklapa u svaku kombinaciju.',
      cena: '7,500.00',
      slike: ['https://via.placeholder.com/200']
    },
    {
      naziv: 'Sportske Patike',
      opis: 'Udobne patike za svakodnevnu upotrebu.',
      cena: '4,200.00',
      slike: ['https://via.placeholder.com/200']
    },
    {
      naziv: 'Elegantna Torba',
      opis: 'Prostrana i praktična torba, idealna za posao.',
      cena: '5,000.00',
      slike: ['https://via.placeholder.com/200']
    },
    {
      naziv: 'Pleteni Džemper',
      opis: 'Topao džemper za hladne dane, dostupan u više boja.',
      cena: '2,800.00',
      slike: ['https://via.placeholder.com/200']
    },
    {
      naziv: 'Šik Šešir',
      opis: 'Dodajte malo elegancije vašem izgledu ovim klasičnim šeširom.',
      cena: '1,500.00',
      slike: ['https://via.placeholder.com/200']
    },
    {
      naziv: 'Klasične Pantalone',
      opis: 'Udobne i elegantne, savršene za poslovne prilike.',
      cena: '3,300.00',
      slike: ['https://via.placeholder.com/200']
    },
    {
      naziv: 'Letnja Suknja',
      opis: 'Lagana i prozračna, idealna za tople dane.',
      cena: '2,200.00',
      slike: ['https://via.placeholder.com/200']
    },
    {
      naziv: 'Modne Sandale',
      opis: 'Savršene za prolećne i letnje šetnje.',
      cena: '3,100.00',
      slike: ['https://via.placeholder.com/200']
    },
    {
      naziv: 'Casual Majica',
      opis: 'Jednostavna i udobna, dostupna u različitim bojama.',
      cena: '1,200.00',
      slike: ['https://via.placeholder.com/200']
    },
    {
      naziv: 'Poslovni Sako',
      opis: 'Elegantan sako za formalne prilike.',
      cena: '6,800.00',
      slike: ['https://via.placeholder.com/200']
    },
    {
        naziv: 'Ekskluzivni Sat',
        opis: 'Luksuzni ručni sat sa kožnim kaišem i elegantnim dizajnom.',
        cena: '12,000.00',
        slike: ['https://via.placeholder.com/200']
      }
    ];

    return (
      <div className="onama-background" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="content">
          <div className="online-prodavnica-container">
            {dummyData.map((proizvod, index) => (
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