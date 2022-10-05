import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useQuery } from "@apollo/client";
const { QUERY_ME } = require("../../utils/queries");

// connect to mutations to add update/edit and delete memory buttons
// import { useMutation } from "@apollo/client";
// import { UPDATE_MEMORY, DELETE_MEMORY } from "../../utils/mutations";

function TodaysUserMemories() {

  const { loading, error, refetch, data } = useQuery(QUERY_ME);

  useEffect(() => {
    refetch();
  })

  const myMemories = data?.me.memories || [];
  console.log(myMemories);

  const today = new Date();
  const month = today.getMonth() + 1;
  console.log(month);

  const date = today.getDate();
  console.log(date);

  const todaysMyMemories = myMemories.filter(function (memory) {
    return (memory.memoryMonth === month && memory.memoryDate === date);
  });
  console.log(todaysMyMemories);

  if (!todaysMyMemories.length) {
    return (
      <h3>
        You don't have any memories. Use the form above to add a memory to your
        account!
      </h3>
    );
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <ul>
          {todaysMyMemories.map((memory) => (
            <Link to={`/memory/${memory._id}`}>
            <li key={memory.index}>
              My memory of: {memory.memoryMonth}/{memory.memoryDate}/{memory.memoryYear}: <br />
              {memory.memoryText}
            </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodaysUserMemories;
