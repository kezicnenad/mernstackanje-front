import React from 'react';
import PredavanjeKartica from './PredavanjaKartica';

import '../../../assets/css/card.css';

function PredavanjeKartice() {
  return (
    <div className="row main-predavanja">
      <div className="col-md-4">
        <PredavanjeKartica />
      </div>
      <div className="col-md-4">
        <PredavanjeKartica />
      </div>
      <div className="col-md-4">
        <PredavanjeKartica />
      </div>
    </div>
  );
}

export default PredavanjeKartice;