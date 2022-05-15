import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Main from "../application/Main";
import Savjeti from "../application/Savjeti";
import Trgovina from "../application/Trgovina";
import Portfolio from "../application/Portfolio";
import Podrska from "../application/Podrska";
import Omeni from "../application/Omeni";
import Profil from "../application/Profil";

import Greska from "../application/Greska";

function Router() {
  return (
    <div>
      <Routes>
        <Route index exact element={<Main />} />
        <Route path="/savjeti" element={<Savjeti />} />
        <Route path="/trgovina" element={<Trgovina />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/podrska" element={<Podrska />} />
        <Route path="/o-meni" element={<Omeni />} />
        <Route path="/profil" element={<Profil />} />

        <Route path="/greska" element={<Greska />} />
        <Route path="*" element={<Greska />} />
      </Routes>
    </div>
  );
}

export default Router