import React, { useEffect, createContext, useState } from "react";
import { gapi } from 'gapi-script';
import Router from "./components/routes/routesMain";
import  Header from "./components/application/Header";

import './App.css';

const clientId = "81687935679-p868qnia2d0ktqt72pvtfgn0f68rhf4m.apps.googleusercontent.com";

export const handleIsLoggedContext = createContext();
export const isLoggedContext = createContext();

function App(){

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "profile email",
      });
    };

    gapi.load("client:auth2", start);
  }, []);

  const handleIsLogged = async (status) => {
    await setIsLogged(status);
  };

  return (
    <isLoggedContext.Provider value={isLogged}>
      <handleIsLoggedContext.Provider value={handleIsLogged}>
        <div>
          <Header />
          <div className="body">
            <Router />
          </div>
        </div>
      </handleIsLoggedContext.Provider>
    </isLoggedContext.Provider>
  );
}

export default App;