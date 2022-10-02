import React from "react";
import { useParams } from "react-router-dom";

import Memory from "../components/Memory";

// connect to mutations to add update/edit and delete memory buttons
import { useMutation } from "@apollo/client";
import { UPDATE_MEMORY, DELETE_MEMORY } from "../../utils/mutations";

import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_MEMORY } from "../utils/queries";

const SingleMemory = (props) => {
  const { id: memoryId } = useParams();

  const { data } = useQuery(QUERY_MEMORY, {
    variables: { id: memoryId },
  });

  const memory = data?.memory || {};

  return (
    <div>
      <div>
        <p c>
          <span>{memory.username}</span> Memory on {memory.memoryDate}
        </p>
        <div>
          <p>{memory.memoryText}</p>
        </div>
        {/* add in edit and delete buttons and functionality here or on Memory component */}
        <button type="submit">Edit Memory</button>
        <button type="submit">Delete Memory</button>
      </div>
    </div>
  );
};

export default SingleMemory;
