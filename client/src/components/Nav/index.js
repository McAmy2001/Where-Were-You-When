import React from "react";

function Nav(props) {
  const {
    pageList = [],
    setActivePage,
    activePageSelected,
    setPageSelected,
    activePage,
  } = props;

  return (
    <nav>
      <ul>
        {pageList.map((page) => (
          <li
            key={page}
            className={`${activePage === page && activePageSelected}`}
          >
            <span
              onClick={() => {
                setActivePage(page);
                setPageSelected(true);
              }}
            >
              {page}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
