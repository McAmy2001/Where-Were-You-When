import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { QUERY_MEMORY } from "../utils/queries";
import { DELETE_MEMORY } from "../utils/mutations";
import EditMemoryForm from "../components/EditMemoryForm";

function SingleMemory() {
  const { state } = useLocation();

  const navigate = useNavigate();

  const { id: memoryId } = useParams();

  const { loading, data } = useQuery(QUERY_MEMORY, {
    variables: { id: memoryId },
  });

  const memory = data?.memory || {};

  //const [deleteMemory] = useMutation(DELETE_MEMORY);
  //
  //const handleDeleteClick = async (event) => {
  //
  //  event.preventDefault();
  //  try {
  //    await deleteMemory({ variables: { _id: memoryId } });
  //  }
  //  catch (e) {
  //    console.error(e);
  //  }
  // navigate('/');
  //
  //};

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
      <button className="submit-btn">Delete</button>
      <br />
      <br />
      <EditMemoryForm memory={memory} />
    </div>
  );
}

export default SingleMemory;
