import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page from "./components/Page";

function App() {
  const [pageList] = useState([
    "Main",
    "Profile",
    "Login",
    "Sign Up",
    "Logout",
  ]);

  const [activePage, setActivePage] = useState(pageList[0]);

  const [activePageSelected, setPageSelected] = useState(false);

  return (
    <div>
      <Header
        pageList={pageList}
        activePage={activePage}
        setActivePage={setActivePage}
        activePageSelected={activePageSelected}
        setPageSelected={setPageSelected}
      />

      <main>
        <Page activePage={activePage} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
