import React, {useEffect} from 'react';
import './App.css';


function App() {

  // const URI = "https://mern-stack-crud-server.herokuapp.com";
  const URI = "http://localhost:5000";

  const fetchApi = () => {
    fetch(URI + "/services/add", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'charset': "utf-8",
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        name: "Name",
        description: "Opis",
        logo: "Slika",
        link: "Link",
      }),
    });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="jumbotron p-5 bg-light">
      <h1>App</h1>
      <button type="button" className="btn btn-primary" onClick={()=>fetchApi()}>Post service</button>
    </div>
  );
}

export default App;
