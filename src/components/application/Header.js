import React from 'react';
import Login from './login';
import Logout from './logout';

function Header() {
  return (
    <div className="jumbotron p-5 bg-light">
      <h1>Header</h1>
      <Login />
      <Logout />
    </div>
  );
}

export default Header;