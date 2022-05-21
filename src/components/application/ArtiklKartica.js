import React from 'react'

function ArtiklKartica({artikl}) {
  return (
    <div className="card m-2" style={{ minWidth: "17.5004rem" }}>
      <div className="card-header">
        <h5 className="card-title">
          <b>
            {(artikl.naziv).charAt(0).toUpperCase() + artikl.naziv.slice(1)} {artikl.cijena + "€"}
          </b>
        </h5>
      </div>
      <div className="card-body">
        <p className="card-text">{(artikl.opis).charAt(0).toUpperCase() + artikl.opis.slice(1)}</p>
      </div>
      <div className="card-footer">
        <a href="#" className="btn btn-primary btn-sm">
          Dodaj u košaricu
        </a>
      </div>
    </div>
  );
}

export default ArtiklKartica
