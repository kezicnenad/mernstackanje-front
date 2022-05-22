import React, { useEffect, useState } from 'react';
import ArtiklKartica from "../application/modules/ArtiklKartica";
import StripePayCheckoutButton from "../modules/StripeCheckButton";

function Trgovina() {

  const [artikli, setArtikli] = useState([]);

  useEffect(() => {
    getArtikli();
  }, []);

  const getArtikli = async () => {
    await fetch('https://mernstackanje.herokuapp.com/artikli', {
      headers: {"Authorization": "Bearer 32GMVB79jAQ}TJcc3kaV5-&/g;7/Y)RA:\"`]/!`JSR24qM'qGFvB;UW\"R>s-.ud8"}
    })
    .then(res => res.json())
    .then(json => setArtikli(json))
    .catch(err => console.log(err));
  }

  return (
    <div>
      <h2>Trgovina</h2>
      {/* <StripePayCheckoutButton /> */}

      <div className="card-group">
        {artikli &&
          artikli.map((el, index) => (
            <div>
              <ArtiklKartica key={index} artikl={el} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Trgovina