import React from "react";
import { Link } from "react-router-dom";

// connect to mutations to add update/edit and delete memory buttons
// import { useMutation } from "@apollo/client";
// import { UPDATE_MEMORY, DELETE_MEMORY } from "../../utils/mutations";

const Memory = ({ memory, date }) => {
  if (!memory.length) {
    return (
      <h3>
        You don't have any memories. Use the form above to add a memory to your
        account!
      </h3>
    );
  }

  return (
    <div>
      <h3>{date}</h3>
      {memory &&
        memory.map((memory) => (
          <div key={memory._id}>
            <p>
              <Link to={`/profile/${memory.username}`}>{memory.username}</Link>{" "}
            </p>
            <div>
              <Link to={`/memory/${memory._id}`}>
                <p>{memory.memoryText}</p>
              </Link>
            </div>
            {/* add in edit and delete buttons and functionality here or move to SingleThought page */}
            {/* <button type="submit">Edit Memory</button>
            <button type="submit">Delete Memory</button> */}
          </div>
        ))}
    </div>
  );
};

export default Memory;
