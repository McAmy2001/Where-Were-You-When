import React from 'react';
import { useQuery } from '@apollo/client';
const { QUERY_EVERYMEMORY } = require('../../utils/queries');


function EveryMemory() {
  const { loading, error, data } = useQuery(QUERY_EVERYMEMORY);
  console.log('every memory return should be here');
  console.log(data);

  const memories = data?.everyMemory || [];
  console.log(memories);

  const today = new Date();
  const month = today.getMonth() + 1;
  console.log(month);

  const date = today.getDate();
  console.log(date);

  const todaysMemories = memories.filter(function (memory) {
    return (memory.memoryMonth === month && memory.memoryDate === date);
  })

  const sortedTodaysMemories = todaysMemories.sort(function(a,b) {
    return a.memoryYear - b.memoryYear;
  })

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (loading) {
    return <div>Loading...</div>
  } else {
    return (
      <div>
        <h2>All Users' Memories For Today</h2>
        <ul>
          {sortedTodaysMemories.map(item => (
            <li key={item.index}>
              {item.memoryMonth}/{item.memoryDate}/{item.memoryYear}  {item.username} remembers...<br />
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