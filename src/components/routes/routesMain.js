import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Main from "../application/Main";
import Greska from "../application/Greska";

function Router() {
  return (
    <div>
      <Routes>
        <Route index exact element={<Main />} />
        <Route path="/greska" element={<Greska />} />
        <Route path="*" element={<Greska />} />
      </Routes>
    </div>
  );
}

export default Router