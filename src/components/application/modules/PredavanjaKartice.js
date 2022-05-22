import React from 'react';
import PredavanjeKartica from './PredavanjaKartica';

import '../../../assets/css/card.css';

function PredavanjeKartice() {
  return (
    <div className="row main-predavanja">
      <h2 className="text-center naredbe">Naredbe, paketi i library</h2>
      <p className="text-center">
        Često korištene i za razvoj aplikacija bitne naredbe, metode i postupci.
        Npr. pushanje projekta na GitHub, izrada novih branchesa, commitanje i
        slično, kao i korisni paketi (npr. mongoose, nodemon, react-routes...)
      </p>
      <div className="row">
        <div className="col-md-6">
          <PredavanjeKartica naslov="Hello World" kategorija="Frontend" />
        </div>
        <div className="col-md-6">
          <PredavanjeKartica naslov="REST API Server" kategorija="Backend" />
        </div>
      </div>
    </div>
  );
}

export default PredavanjeKartice;