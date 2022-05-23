import React from 'react';
import Timeline from "./modules/Timeline";
import PredavanjeKartice from "./modules/PredavanjaKartice";
import UslugeLista from './modules/UslugeLista';

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
        Obratite pažnju na pojedinosti, kao na primjer, za početak se koristi Google OAuth2 autorizacija korisnika. Zatim imamo fiktivni Web Shop koji artikle fetcha sa Backend servera u obliku REST API-ja, tako da je tu pokriven rad sa API-jima, potom se u tom fake Web Shopu koristi paket Stripe, kojim dobijamo mogućnost online kartičnog plaćanja, tipično za Web Shopove. Dva ključna faktora za izradu ove aplikacije edukacija sebe i po
        mogućnosti ostalih, te vježbanje, odnosno primjenjivanje, dosadašnjeg
        znanja. Kako biste postali Fullstack odnosno MERN Stack developer, trebali biste znati sljedeće vještine, tehnologije, metode, principe i slično
      </p>
      <Timeline />
      <PredavanjeKartice />
      <UslugeLista />
    </div>
  );
}

export default Main