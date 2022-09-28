import React from "react";
import Nav from "../Nav";

function Header(props) {
  const {
    setActivePage,
    pageList,
    activePageSelected,
    setPageSelected,
    activePage,
  } = props;

  return (
    <header>
      <h1>Where Were You When</h1>
      <div>
        <Nav
          activePage={activePage}
          setActivePage={setActivePage}
          pageList={pageList}
          activePageSelected={activePageSelected}
          setPageSelected={setPageSelected}
        />
      </div>
    </header>
  );
}

export default Header;
