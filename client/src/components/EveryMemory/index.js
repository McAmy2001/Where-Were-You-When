import React, { useState, useAEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
const { QUERY_EVERYMEMORY, QUERY_ME_BASIC, QUERY_USERS } = require('../../utils/queries');


function EveryMemory () {
  const { loading, error, data } = useQuery(QUERY_EVERYMEMORY);
  console.log('every memory return should be here');
  console.log(data);
  const memories = data?.everyMemory || [];
  console.log(memories);
  
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!loading) {
    return <div>Loading...</div>
  } else {
    return (
      <div>
        <h2>User Memories</h2>
        <ul>
          {memories.map(item => (
            <li key={item.index}>
              {item.memoryMonth}/{item.memoryDate}/{item.memoryYear}<br />
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