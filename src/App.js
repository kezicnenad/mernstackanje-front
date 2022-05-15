import React, { useEffect, createContext, useState } from "react";
import { gapi } from 'gapi-script';
import Router from "./components/routes/routesMain";
import  Header from "./components/application/Header";

const clientId = "81687935679-p868qnia2d0ktqt72pvtfgn0f68rhf4m.apps.googleusercontent.com";

function App(){

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "profile email",
      });
    };

    gapi.load("client:auth2", start);
  }, []);
  

  return (
    <div>
      <Header />
      <div className="p-5">
      <h1>App</h1>
        <Router />
      </div>
    </div>
  );
}

export default App;