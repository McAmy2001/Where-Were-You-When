import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

// import Auth from "../utils/auth";

// import { useQuery } from "@apollo/client";
// import {} from "../utils/queries";

const Home = () => {
  // add useQuery hook here

  // const loggedIn = Auth.loggedIn();

  return (
    <main>
      <Header />
      <Main />
      <Footer />
    </main>
  );
};

export default Home;
