import React, { useContext } from 'react';
import { isLoggedContext } from '../../App';
import {Routes, Route} from 'react-router-dom';

import Main from "../application/Main";
import Skola from "../application/Skola";
import Trgovina from "../application/Trgovina";
import Primjeri from "../application/Primjeri";
import Omeni from "../application/Omeni";

import Greska from "../application/Greska";

function Router() {

  const isLogged = useContext(isLoggedContext);

  return (
    <div>
      <Routes>
        <Route index exact element={<Main />} />
        <Route path="/about-me" element={<Omeni />} />
        <Route path="/examples" element={<Primjeri />} />
        {isLogged === true && (
          <>
            <Route path="/school" element={<Skola />} />
            <Route path="/shop" element={<Trgovina />} />
          </>
        )}
        <Route path="*" element={<Greska />} />
      </Routes>
    </div>
  );
}

export default Router