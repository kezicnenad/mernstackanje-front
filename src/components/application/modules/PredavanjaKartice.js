import React from 'react';
import PredavanjeKartica from './PredavanjaKartica';

import frontendIkona from "../../../assets/img/ikonice/frontend.png";
import backendIkona from "../../../assets/img/ikonice/backend.png";

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
          <div className="card">
            <div className="card-block">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <div
                    className="img-fluid rounded-circle ikona"
                    style={{ backgroundImage: 'url("' + frontendIkona + '")' }}
                  ></div>
                </div>
                <div className="col">
                  <h5>Frontend</h5>
                  <span>Kreiranje React aplikacije</span>
                </div>
              </div>
              <ul className="task-list">
                <li>
                  <i className="task-icon bg-c-green"></i>
                  <h6>Kreiranje React aplikacije</h6>
                  <p className="text-muted">npx create-react-app APP_NAME</p>
                </li>
                <li>
                  <i className="task-icon bg-c-green"></i>
                  <h6>U terminalu otvorite folder novonastale aplikacije</h6>
                  <p className="text-muted">cd APP_NAME</p>
                </li>
                <li>
                  <i className="task-icon bg-c-green"></i>
                  <h6>Instaliranje nužnih paketa</h6>
                  <p className="text-muted">npm install</p>
                </li>
                <li>
                  <i className="task-icon bg-c-green"></i>
                  <h6>Pokretanje lokalnog servera</h6>
                  <p className="text-muted">npm start</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-block">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <div
                    className="img-fluid rounded-circle ikona"
                    style={{ backgroundImage: 'url("' + backendIkona + '")' }}
                  ></div>
                </div>
                <div className="col">
                  <h5>Backend</h5>
                  <span>Kreiranje NodeJS Backend servera</span>
                </div>
              </div>
              <ul className="task-list">
                <li>
                  <i className="task-icon bg-c-green"></i>
                  <h6>Kreiranje React aplikacije</h6>
                  <p className="text-muted">npx create-react-app APP_NAME</p>
                </li>
                <li>
                  <i className="task-icon bg-c-green"></i>
                  <h6>U terminalu otvorite folder novonastale aplikacije</h6>
                  <p className="text-muted">cd APP_NAME</p>
                </li>
                <li>
                  <i className="task-icon bg-c-green"></i>
                  <h6>Instaliranje nužnih paketa</h6>
                  <p className="text-muted">npm install</p>
                </li>
                <li>
                  <i className="task-icon bg-c-green"></i>
                  <h6>Pokretanje lokalnog servera</h6>
                  <p className="text-muted">npm start</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PredavanjeKartice;