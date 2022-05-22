import React from 'react';
import '../../../assets/css/card.css';

function PredavanjeKartica() {
  return (
    <div className="card">
      <div className="card-block">
        <div className="row align-items-center justify-content-center">
          <div className="col-auto">
            <img
              className="img-fluid rounded-circle"
              src="https://bootdey.com/img/Content/avatar/avatar6.png"
              alt="dashboard-user"
            />
          </div>
          <div className="col">
            <h5>Frontend</h5>
            <span>Hello World App</span>
          </div>
        </div>
        <ul className="task-list">
          <li>
            <i className="task-icon bg-c-green"></i>
            <h6>
              Create React App
            </h6>
            <p className="text-muted">npx create-react-app APP_NAME</p>
          </li>
          <li>
            <i className="task-icon bg-c-green"></i>
            <h6>
              Anton Knudsen
            </h6>
            <p className="text-muted">Lorem ipsum is dolorem…</p>
          </li>
          <li>
            <i className="task-icon bg-c-green"></i>
            <h6>
              Anton Knudsen
            </h6>
            <p className="text-muted">Lorem ipsum is dolorem…</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PredavanjeKartica;