import React from 'react';
import '../../../assets/css/card.css';

function PredavanjeKartica({kategorija, naslov, ikona}) {
  return (
    <div className="card">
      <div className="card-block">
        <div className="row align-items-center justify-content-center">
          <div className="col-auto">
            <div
              className="img-fluid rounded-circle ikona"
              style={{ backgroundImage: 'url("' + ikona + '")' }}
            ></div>
          </div>
          <div className="col">
            <h5>{kategorija}</h5>
            <span>{naslov}</span>
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
  );
}

export default PredavanjeKartica;