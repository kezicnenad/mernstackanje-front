import React from "react";
import "../../../assets/css/usluge.css";

function UslugeLista() {
  return (
    <div className="container usluge">
      <h2 className="text-center">
        Ova aplikacija koristi sljedeće framework-se
      </h2>
      <p className="text-center text">
        Backend je razvijan na NodeJS-u, korištenjem ExpressJS biblioteka. Uz
        dodatak MongoDB NoSQL baza podataka, dobijamo jako moćan i kvalitetan
        REST API kao Backend, dok je za Frontend korišten ReactJS uz dodatak
        nekih biblioteka poput Bootstrap-a
      </p>
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <div className="career-search mb-60">
            <div className="filter-result">
              <div className="job-box d-md-flex align-items-center justify-content-between mb-30">
                <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
                  <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                    MDB
                  </div>
                  <div className="job-content">
                    <h5 className="text-center text-md-left">MongoDB</h5>
                    <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans">
                      <li className="mr-md-4">
                        MongoDB - Lorem Ipsum
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="job-right my-4 flex-shrink-0">
                  <p className="usluge-opis">Baza podataka</p>
                </div>
              </div>

              <div className="job-box d-md-flex align-items-center justify-content-between mb-30">
                <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
                  <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                    EXJS
                  </div>
                  <div className="job-content">
                    <h5 className="text-center text-md-left">ExpressJS</h5>
                    <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans">
                      <li className="mr-md-4">
                        ExpressJS - Lorem Ipsum{" "}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="job-right my-4 flex-shrink-0">
                  <p className="usluge-opis">
                    NodeJS Framework za kreiranje API-ja
                  </p>
                </div>
              </div>

              <div className="job-box d-md-flex align-items-center justify-content-between mb-30">
                <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
                  <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                    RxJS
                  </div>
                  <div className="job-content">
                    <h5 className="text-center text-md-left">ReactJS</h5>
                    <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans">
                      <li className="mr-md-4">
                        ReactJS - Lorem Ipsum
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="job-right my-4 flex-shrink-0">
                  <p className="usluge-opis">Frontend</p>
                </div>
              </div>

              <div className="job-box d-md-flex align-items-center justify-content-between mb-30">
                <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
                  <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                    NJS
                  </div>
                  <div className="job-content">
                    <h5 className="text-center text-md-left">NodeJS</h5>
                    <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans">
                      <li className="mr-md-4">
                        NodeJS - Lorem Ipsum
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="job-right my-4 flex-shrink-0">
                  <p className="usluge-opis">JavaScript Backend Framework</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UslugeLista;
