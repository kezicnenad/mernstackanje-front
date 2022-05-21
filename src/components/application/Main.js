import React from 'react';
import imgMernstack from '../../assets/img/mernstack.png';

function Main() {
  return (
    <div>
      <div className="text-center">
        <img src={imgMernstack} alt="MERN" className="mernLogo" />
      </div>
      <h2>
        MERN Stack je framework za razvoj web aplikacija. Sastoji se od MongoDB,
        ExpressJS, ReactJS i NodeJS
      </h2>
      <p>
        Korisit ću sljedeće library-e: Node.js, Express.js, ReactJS, MongoDB,
        Stripe, Bootstrap, Material-UI, OAuth, Routes, Context, Nodemon, Mongoose, Axios, CORS, JSON Web Token...
      </p>
      <p>
        <b>MongoDB: </b>No-SQL baza podataka, dokumentno orijentirana
      </p>
      <p>
        <b>ExpressJS: </b>Lagani NodeJS framework koji se koristi za Backend
      </p>
      <p>
        <b>ReactJS: </b>Library za izgradnju komponenti korisničkog sučelja
        (UI), stvoren od strane Facebooka
      </p>
      <p>
        <b>NodeJS: </b>JavaScript runtime okruženje. Koristi se za izvršavanje
        JavaScripta na računalu a ne samo u browseru
      </p>
      <p>
        Backend je hostan na Heroku (Platforma u Cloudu), dok je Frontend hostan
        na Netlify, također u Cloudu, a sve je pushano na GitHub. Na Google
        računu napravljen token zbog korištenja OAuth. Stripe uredno prijavljen.
        Kod komunikacije sa Backendom se koristi token
      </p>
    </div>
  );
}

export default Main