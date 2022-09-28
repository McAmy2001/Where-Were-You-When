import React from "react";
import Main from "../Main";
import Login from "../Login";
import SignUp from "../SignUp";
import Profile from "../Profile";

function Page(props) {
  const { activePage } = props;

  const renderPage = (arg) => {
    if (arg === "Profile") {
      return <Profile />;
    } else if (arg === "Login") {
      return <Login />;
    } else if (arg === "SignUp") {
      return <SignUp />;
    } else {
      return <Main />;
    }
  };

  return <div>{renderPage(activePage)}</div>;
}

export default Page;
