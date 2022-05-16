import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { isLoggedContext } from '../../App';
import Login from './login';
import Logout from './logout';

function Header() {

  const isLogged = useContext(isLoggedContext);

  return (
    <div className="header">
      <NavLink className="linkButton" to="/">
        Nenad Kežić
      </NavLink>
      <NavLink className="linkButton" to="/about-me">
        O meni
      </NavLink>
      <NavLink className="linkButton" to="/examples">
        Primjeri
      </NavLink>
      {isLogged === true && (
        <>
          <NavLink className="linkButton" to="/school">
            Mala škola
          </NavLink>
          <NavLink className="linkButton" to="/shop">
            Web shop
          </NavLink>
        </>
      )}
      {isLogged === false ? <Login /> : <Logout />}
    </div>
  );
}

export default Header;