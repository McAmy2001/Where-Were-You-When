// import React
import React from "react";
import { Link } from "react-router-dom";

// importing Auth to use below to check if users are logged in or not
import Auth from "../../utils/auth";

// Header function returns header
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
        {/* if logged in, show Profile and Logout buttons */}
        {Auth.loggedIn() ? (
          <>
            <Link to="/profile" className="header-btn">
              Profile
            </Link>
            <a href="/" onClick={logout} className="header-btn">
              Logout
            </a>
          </>
        ) : (
          // if logged out, show log in and sign up buttons
          <>
            <Link to="/login" className="header-btn">
              Login
            </Link>
            <Link to="/signup" className="header-btn">
              Signup
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
