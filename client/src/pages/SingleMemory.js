import React from "react";
import { useParams } from "react-router-dom";

import Memory from "../components/Memory";

// connect to mutations to add update/edit and delete memory buttons
import { useMutation } from "@apollo/client";
import { UPDATE_MEMORY, DELETE_MEMORY } from "../utils/mutations";

import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_MEMORY } from "../utils/queries";

const SingleMemory = (props) => {
  const { memoryId } = useParams();

  const { data } = useQuery(QUERY_MEMORY, {
    variables: { memoryId: memoryId },
  });

  const memory = data?.memory || {};

  // const deleteMemory = () => {
  //   ({
  //     DELETE_MEMORY
  //     _id: currentMemory._id
  //   });
  // };

  // const editMemory = () => {
  //   ({
  //     UPDATE_MEMORY
  //     _id: currentMemory._id
  //   })
  // }

  return (
    <div>
      <div>
        <p c>
          <span>
            {" "}
            Memory on {memory.memoryMonth} {memory.memoryDate}{" "}
            {memory.memoryYear}
          </span>
        </p>
        <div>
          <p>{memory.memoryText}</p>
        </div>
        {/* add in edit and delete buttons and functionality here or on Memory component */}
        {/* <button type="submit" onClick={deleteMemory}>
          Edit Memory
        </button>
        <button type="submit" onClick={editMemory}>
          Delete Memory
        </button> */}
        <button>Edit Memory</button>
        <button>Delete Memory</button>
      </div>
    </div>
  );
};

export default SingleMemory;
