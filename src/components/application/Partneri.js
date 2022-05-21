import React from 'react';
import imgGitHub from "../../assets/img/partneri/github.png";
import imgNode from "../../assets/img/partneri/node.png";
import imgExpress from "../../assets/img/partneri/express.png";
import imgMongo from "../../assets/img/partneri/mongo.png";
import imgReact from "../../assets/img/partneri/react.png";
import imgBootstrap from "../../assets/img/partneri/bootstrap.png";

function Partneri() {
  return (
    <div className="row partneri text-center">
      <div className="col-2 imgPartner">
        <a href="https://nodejs.org" target="_blank">
          <img src={imgNode} alt="NodeJS" className="partnerLogo" />
        </a>
      </div>
      <div className="col-2 imgPartner">
        <a href="https://github.com" target="_blank">
          <img src={imgGitHub} alt="GitHub" className="partnerLogo" />
        </a>
      </div>
      <div className="col-2 imgPartner">
        <a href="https://getbootstrap.com" target="_blank">
          <img src={imgBootstrap} alt="Bootstrap" className="partnerLogo" />
        </a>
      </div>
      <div className="col-2 imgPartner">
        <a href="https://reactjs.org" target="_blank">
          <img src={imgReact} alt="React.JS" className="partnerLogo" />
        </a>
      </div>
      <div className="col-2 imgPartner">
        <a href="https://expressjs.com" target="_blank">
          <img src={imgExpress} alt="Express.JS" className="partnerLogo" />
        </a>
      </div>
      <div className="col-2 imgPartner">
        <a href="https://account.mongodb.com" target="_blank">
          <img src={imgMongo} alt="MongoDB" className="partnerLogo" />
        </a>
      </div>
    </div>
  );
}

export default Partneri;
