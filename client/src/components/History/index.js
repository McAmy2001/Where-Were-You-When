import React, { useState, useEffect } from "react";

function History() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://history.muffinlabs.com/date")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="history">
        <h2>On This Day...</h2>
        <ul>
          {items.data.Events.map((item) => (
            <li key={item.index}>
              {item.year} {item.text}{" "}
              <a
                href={item.links[0].link}
                target="_blank"
                rel="noopener norefferrer"
              >
                Learn more.
              </a>
              <br />
            </li>
          ))}
          <br />
        </ul>
        <h5 className="api-reference">
          On this day events from{" "}
          <a href="https://history.muffinlabs.com/#api" target="_blank">
            history.muffinlabs.com/#api
          </a>
          .
        </h5>
      </div>
    );
  }
}

export default History;
