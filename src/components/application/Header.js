import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { isLoggedContext } from '../../App';
import Login from './login';
import Logout from './logout';

function Header() {

  const isLogged = useContext(isLoggedContext);

  return (
    <div className="header">
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-light">
        {/* <!-- Container wrapper --> */}
        <div className="container-fluid">
          {/* <!-- Toggle button --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* <!-- Collapsible wrapper --> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <!-- Navbar brand --> */}
            {/* <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <i className="fa-solid fa-code-branch"></i>
            </a> */}
            {/* <!-- Left links --> */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="linkButton" to="/">
                  Nenad Kežić
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="linkButton" to="/about-me">
                  O meni
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="linkButton" to="/examples">
                  Primjeri
                </NavLink>
              </li>
              {isLogged === true && (
                <>
                  <li className="nav-item">
                    <NavLink className="linkButton" to="/school">
                      Mala škola
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="linkButton" to="/shop">
                      Web shop
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
            {/* <!-- Left links --> */}
          </div>
          {/* <!-- Collapsible wrapper --> */}

          {/* <!-- Right elements --> */}
          {isLogged === true ? (
            <div className="d-flex align-items-center">
              {/* <!-- Icon --> */}
              <a className="text-reset me-3" href="/">
                <i className="fas fa-shopping-cart"></i>
              </a>

              {/* <!-- Notifications --> */}
              <div className="dropdown">
                <a
                  className="text-reset me-3 dropdown-toggle hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-bell"></i>
                  <span className="badge rounded-pill badge-notification bg-danger">
                    1
                  </span>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Nekakve obavijesti #1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Nekakve obavijesti #2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Nekakve obavijesti #3
                    </a>
                  </li>
                </ul>
              </div>

              {/* <!-- Avatar --> */}
              {isLogged === false ? (
                <Login />
              ) : (
                <div className="dropdown">
                  <a
                    className="dropdown-toggle d-flex align-items-center hidden-arrow"
                    href="#"
                    id="navbarDropdownMenuAvatar"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="badge rounded-pill account">
                      <i className="fa-solid fa-user"></i>
                    </span>
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuAvatar"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        My profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <Logout />
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Login />
          )}
          {/* <!-- Right elements --> */}
        </div>
        {/* <!-- Container wrapper --> */}
      </nav>
      {/* <!-- Navbar --> */}
    </div>
  );
}

export default Header;