import React from 'react';
import '../../../assets/css/timeline.css';

function Timeline() {
  return (
    <div className="main-timeline">
      <div className="timeline">
        <a href="#" className="timeline-content">
          <div className="timeline-icon">
            <i className="fa fa-cloud" aria-hidden="true"></i>
          </div>
          <h3 className="title">NodeJS</h3>
          <p className="description">JavaScript Backend razvojno okruženje</p>
        </a>
      </div>

      <div className="timeline">
        <a href="#" className="timeline-content">
          <div className="timeline-icon">
            <i className="fa fa-window-restore" aria-hidden="true"></i>
          </div>
          <h3 className="title">ReactJS</h3>
          <p className="description">
            JavaScript biblioteka, razvijena od strane Facebooka, za razvoj
            korisničkih sučelja, Frontend aplikacija
          </p>
        </a>
      </div>

      <div className="timeline">
        <a href="#" className="timeline-content">
          <div className="timeline-icon">
            <i className="fa fa-exchange" aria-hidden="true"></i>
          </div>
          <h3 className="title">ExpressJS</h3>
          <p className="description">
            Vrlo lagani NodeJS framework dizajniran za kreiranje API-ja
          </p>
        </a>
      </div>

      <div className="timeline">
        <a href="#" className="timeline-content">
          <div className="timeline-icon">
            <i className="fa fa-database" aria-hidden="true"></i>
          </div>
          <h3 className="title">MongoDB</h3>
          <p className="description">
            NoSQL baza podataka, dokumentnog tipa. Brza, lagana, temeljena na
            JSON-u tj. BSON-u
          </p>
        </a>
      </div>

      <div className="timeline">
        <a href="#" className="timeline-content">
          <div className="timeline-icon">
            <i className="fa fa-link" aria-hidden="true"></i>
          </div>
          <h3 className="title">Netlify</h3>
          <p className="description">Frontend server</p>
        </a>
      </div>

      <div className="timeline">
        <a href="#" className="timeline-content">
          <div className="timeline-icon">
            <i className="fa fa-server" aria-hidden="true"></i>
          </div>
          <h3 className="title">Heroku</h3>
          <p className="description">Backend server</p>
        </a>
      </div>

      <div className="timeline">
        <a href="#" className="timeline-content">
          <div className="timeline-icon">
            <i className="fa fa-code-fork" aria-hidden="true"></i>
          </div>
          <h3 className="title">Naučite GitHub</h3>
          <p className="description">
            Sigurno ćete se susresti sa GitHub-om. GitHub je software za
            verzioniranje. Dosta koristan alat, svakako preporučam
          </p>
        </a>
      </div>

      <div className="timeline">
        <a href="#" className="timeline-content">
          <div className="timeline-icon">
            <i className="fa fa-clone" aria-hidden="true"></i>
          </div>
          <h3 className="title">Software i alati</h3>
          <p className="description">
            Prilikom izrade ove aplikacije uglavnom sam koristio NodeJS,
            ExpressJS, MongoDB, ReactJS, JSON Web Token, HTTP Metode (CRUD),
            Bootstrap. Od korisnog software-a preporučam Visual Studio Code.
            Instalirajte Postman, MongoDB Compass
          </p>
        </a>
      </div>

      <div className="timeline">
        <a href="#" className="timeline-content">
          <div className="timeline-icon">
            <i className="fa fa-mouse-pointer" aria-hidden="true"></i>
          </div>
          <h3 className="title">Čitaj, slušaj, gledaj</h3>
          <p className="description">
            Najbrži put do znanja je... ma koji god, samo uči, čitaj, gledaj,
            slušaj, probavaj i vjeruj mi trud će se isplatiti
          </p>
        </a>
      </div>
    </div>
  );
}

export default Timeline