// import react with useState and useEffect
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
// import QUERY_ME from queries
const { QUERY_ME } = require("../../utils/queries");

// memory function loads all of the user's memories
function Memory() {
  const { loading, error, refetch, data } = useQuery(QUERY_ME);

  useEffect(() => {
    refetch();
  });

  const myMemories = data?.me.memories || [];
  // user message if they don't have any memories created
  if (!myMemories.length) {
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
          {myMemories.map((memory) => (
            <Link to={`/memory/${memory._id}`}>
              <li key={memory.index}>
                My memory of: {memory.memoryMonth}/{memory.memoryDate}/
                {memory.memoryYear}: <br />
                {memory.memoryText}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default Memory;
