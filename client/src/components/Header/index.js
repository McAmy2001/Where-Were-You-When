import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header>
      <Link to="/">
        {" "}
        <h1 className="page-title">Where Were You When</h1>
      </Link>
      <nav>
        {Auth.loggedIn() ? (
          <>
            <Link to="/profile" className="header-btn">Profile</Link>
            <a href="/" onClick={logout} className="header-btn">
              Logout
            </a>
          </>
        ) : (
          <>
            <Link to="/login" className="header-btn">Login</Link>
            <Link to="/signup" className="header-btn">Signup</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
