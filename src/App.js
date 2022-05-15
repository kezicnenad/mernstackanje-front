import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const URI = "https://mernstackanje.herokuapp.com/";
  // const URI = "http://localhost:5000/";

  const [artikli, setArtikli] = useState([]);

  useEffect(() => {
    getArtikli('artikli');
  }, []);

  const getArtikli = async (lokacija) => {
    var myHeaders = new Headers();
    await myHeaders.append(
      "Authorization",
      'Bearer 32GMVB79jAQ}TJcc3kaV5-&/g;7/Y)RA:"`]/!`JSR24qM\'qGFvB;UW"R>s-.ud8'
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    await fetch(URI + lokacija, requestOptions)
      .then((response) => response.json())
      .then((result) => setArtikli(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="jumbotron p-5 bg-light">
      <h1>App</h1>
      {artikli.map(artikl => (
        <div key={artikl._id}>
          <p>Naziv {artikl.naziv}</p>
          <p>Opis {artikl.opis}</p>
          <p>Kategorija {artikl.kategorija}</p>
          <p>Jedinica mjere {artikl.jedinica_mjere}</p>
          <p>Cijena {artikl.cijena}</p>
          <p>Zaliha {artikl.zaliha}</p>
          <p>Porez {artikl.porez}</p>
          <p>Popust {artikl.popust}</p>
          <p>Kreirano {artikl.kreirano}</p>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}

export default App;
