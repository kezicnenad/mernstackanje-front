import React from 'react';
import Timeline from "./modules/Timeline";
import PredavanjeKartice from "./modules/PredavanjaKartice";

import imgMernstack from '../../assets/img/mernstack.png';

function Main() {
  return (
    <div className="container main">
      <div className="text-center">
        <img src={imgMernstack} alt="MERN" className="mernLogo" />
      </div>
      <h2 className="text-center">
        Aplikacija je nastala vježbanjem i učenjem ReactJS-a a kasnije
        upotpunjena NodeJS Backendom
      </h2>
      <p className="text-center">
        Dva ključna faktora za izradu ove aplikacije su učenje/vježbanje kao i
        edukativne svrhe
      </p>
      <Timeline />
      <PredavanjeKartice />
    </div>
  );
}

export default Main