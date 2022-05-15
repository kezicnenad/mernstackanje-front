import React from 'react';
import Login from './login';
import Logout from './logout';
import StripePayCheckoutButton from "../modules/StripePaying";

function Header() {
  return (
    <div className="jumbotron p-5 bg-light">
      <h1>Header</h1>
      <a href="/">Naslovnica</a>
      <a href="/o-meni">O meni</a>
      <a href="/podrska">Podrska</a>
      <a href="/portfolio">Portfolio</a>
      <a href="/profil">Profil</a>
      <a href="/savjeti">Savjeti</a>
      <a href="/trgovina">Trgovina</a>
      <Login />
      <Logout />
      <StripePayCheckoutButton />
    </div>
  );
}

export default Header;