import React from 'react';
import JedanProizvod from './JedanProizvod';
import '../App.css';

const OnlineProdavnica = () => {
  const dummyData = {
    naziv: 'Haljina H3200',
    opis: 'Elegantna crna haljina sa detaljima na rukavima.',
    cena: '3,490.00',
    slike: ['https://via.placeholder.com/200'] // Ovde stavite pravu putanju do slike
  };

  return (
    <div className="online-prodavnica-container">
      <JedanProizvod {...dummyData} />
    </div>
  );
};

export default OnlineProdavnica;
