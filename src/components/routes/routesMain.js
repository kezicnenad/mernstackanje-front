import React, { useContext } from 'react';
import { isLoggedContext } from '../../App';
import {Routes, Route} from 'react-router-dom';

import Guest from "../application/Guest";
import Main from "../application/Main";
import Savjeti from "../application/Savjeti";
import Trgovina from "../application/Trgovina";
import Primjeri from "../application/Primjeri";
import Omeni from "../application/Omeni";

import Greska from "../application/Greska";

function Router() {

  const isLogged = useContext(isLoggedContext);

  return (
    <div>
      <Routes>
        {isLogged === true ? (
          <>
            <Route index exact element={<Main />} />
            <Route path="/o-meni" element={<Omeni />} />
            <Route path="/primjeri" element={<Primjeri />} />
            <Route path="/savjeti" element={<Savjeti />} />
            <Route path="/trgovina" element={<Trgovina />} />
          </>
        ) : (
          <>
            <Route index exact element={<Guest />} />
            <Route path="/o-meni" element={<Omeni />} />
            <Route path="/primjeri" element={<Primjeri />} />
          </>
        )}
        <Route path="/greska" element={<Greska />} />
        <Route path="*" element={<Greska />} />
      </Routes>
    </div>
  );
}

export default Router