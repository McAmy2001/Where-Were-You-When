// import React
import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useParams, useNavigate } from "react-router-dom";
// importing QUERY_MEMORY from queries to use below
import { QUERY_MEMORY } from "../utils/queries";
// importing DELETE_MEMORY from mutations to use below
import { DELETE_MEMORY } from "../utils/mutations";
// importing EditMemoryForm component to use below
import EditMemoryForm from "../components/EditMemoryForm";

// single memory function renders one memory by Id
function SingleMemory() {
  const navigate = useNavigate();

  const { id: memoryId } = useParams();

  const { loading, data } = useQuery(QUERY_MEMORY, {
    variables: { id: memoryId },
  });

  const memory = data?.memory || {};
  // connects with DELETE_MEMORY mutation to delete a memory
  const [deleteMemory] = useMutation(DELETE_MEMORY);

  const handleDeleteClick = async (event) => {
    event.preventDefault();
    try {
      await deleteMemory({ variables: { _id: memoryId } });
    } catch (e) {
      console.error(e);
    }
    navigate("/");
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="page-view">
      <h3>
        My memory of {memory.memoryMonth}/{memory.memoryDate}/
        {memory.memoryYear}:
      </h3>
      <p className="form-input">{memory.memoryText}</p>
      <button onClick={handleDeleteClick} className="submit-btn">
        Delete
      </button>
      <br />
      <br />
      <EditMemoryForm memory={memory} />
    </div>
  );
}

export default SingleMemory;
