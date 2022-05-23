import React from "react";
import "../../../assets/css/usluge.css";

function UslugeLista() {
  return (
    <div className="container usluge">
      <h2 className="text-center">
        Ova aplikacija u globalu koristi ove framework-se
      </h2>
      <p className="text-center text">
        Backend je razvijan na NodeJS-u, korištenjem ExpressJS biblioteka. Uz
        dodatak MongoDB NoSQL baza podataka, dobijamo jako moćan i kvalitetan
        REST API kao Backend, dok je za Frontend korišten ReactJS uz dodatak
        nekih biblioteka poput Bootstrap-a. Sve to lijepo je deployano na Heroku i Netlify. Heroku za Backend, Netlify za Frontend, dok je u konačnici sve pushano na GitHub, servis za verzioniranje
      </p>

    </div>
  );
}

export default UslugeLista;
