import React from "react";
import { useQuery } from "@apollo/client";
const { QUERY_ME } = require("../../utils/queries");

// connect to mutations to add update/edit and delete memory buttons
// import { useMutation } from "@apollo/client";
// import { UPDATE_MEMORY, DELETE_MEMORY } from "../../utils/mutations";

function Memory() {
  const { loading, error, data } = useQuery(QUERY_ME);

  const myMemories = data?.me.memory || [];
  console.log(myMemories);

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
        <h2>Your memories</h2>
        <ul>
          {myMemories.map((item) => (
            <li key={item.index}>
              {item.memoryMonth}/{item.memoryDate}/{item.memoryYear} <br />
              {item.memoryText}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Memory;
