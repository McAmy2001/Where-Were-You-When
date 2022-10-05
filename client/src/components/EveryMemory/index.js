// import React
import React from "react";
import { useQuery } from "@apollo/client";
// import QUERY_EVERYMEMORY from queries
const { QUERY_EVERYMEMORY } = require("../../utils/queries");

// EveryMemory function returns all memories for all users
function EveryMemory() {
  const { loading, error, data } = useQuery(QUERY_EVERYMEMORY);

  const memories = data?.everyMemory || [];

  const today = new Date();
  const month = today.getMonth() + 1;

  const date = today.getDate();

  const todaysMemories = memories.filter(function (memory) {
    return memory.memoryMonth === month && memory.memoryDate === date;
  });

  const sortedTodaysMemories = todaysMemories.sort(function (a, b) {
    return a.memoryYear - b.memoryYear;
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (loading) {
    return <div>Loading...</div>;
  } else if (!sortedTodaysMemories.length) {
    return (
      <div>
        <h2>All Users' Memories For Today</h2>
        <h3>No User Posted Memories For Today</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h2>All Users' Memories For Today</h2>
        <ul>
          {sortedTodaysMemories.map((item) => (
            <li key={item.index}>
              {item.memoryMonth}/{item.memoryDate}/{item.memoryYear}{" "}
              {item.username} remembers...
              <br />
              {item.memoryText}
            </li>
          ))}
          <br />
        </ul>
      </div>
    );
  }
}

export default EveryMemory;
