//import React from "react";
//import { useParams } from "react-router-dom";
//
//import Memory from "../components/Memory";
//
//// connect to mutations to add update/edit and delete memory buttons
//import { useMutation } from "@apollo/client";
//import { UPDATE_MEMORY, DELETE_MEMORY } from "../../utils/mutations";
//
//import Auth from "../utils/auth";
//import { useQuery } from "@apollo/client";
//import { QUERY_MEMORY } from "../utils/queries";
//
//const SingleMemory = (props) => {
//  const { id: memoryId } = useParams();
//
//  const { loading, data } = useQuery(QUERY_MEMORY, {
//    variables: { id: memoryId },
//  });
//
//  const memory = data?.memory || {};
//
//  // const deleteMemory = () => {
//  //   ({
//  //     DELETE_MEMORY
//  //     _id: currentMemory._id
//  //   });
//  // };
//
//  // const editMemory = () => {
//  //   ({
//  //     UPDATE_MEMORY
//  //     _id: currentMemory._id
//  //   })
//  // }
//  if (loading) {
//    return <div>Loading...</div>;
//  }
//
//  return (
//    <div>
//      <div>
//        <p c>
//          <span>{memory.username}</span> Memory on {memory.memoryDate}
//        </p>
//        <div>
//          <p>{memory.memoryText}</p>
//        </div>
//        {/* add in edit and delete buttons and functionality here or on Memory component */}
//        <button type="submit" onClick={deleteMemory}>
//          Edit Memory
//        </button>
//        <button type="submit" onClick={editMemory}>
//          Delete Memory
//        </button>
//      </div>
//    </div>
//  );
//};
//
//export default SingleMemory;
//

import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_MEMORY } from '../utils/queries';
import { DELETE_MEMORY } from '../utils/mutations';




function SingleMemory() {

const { id: memoryId } = useParams();
console.log(memoryId);

const { loading, data } = useQuery(QUERY_MEMORY, {
  variables: { id: memoryId }
});

const memory = data?.memory || {};
console.log(memory);

//function deleteMemory() {
//  console.log('delete memory function invoked');
//  console.log(memoryId);
//
//}
const [deleteMemory] = useMutation(DELETE_MEMORY);

const handleDeleteClick = async (event) => {

  event.preventDefault();
  try {
    console.log(['XXX', memoryId]);
    await deleteMemory({ variables: { _id: memoryId }});
  }
  catch (e) {
    console.error(e);
  }
  window.open('/profile');
};


if (loading) {
  return <div>Loading...</div>;
}
return (
  <div>
    My memory of: {memory.memoryMonth}/{memory.memoryDate}/{memory.memoryYear}: <br/>
    {memory.memoryText} <br/>
    <button onClick={handleDeleteClick}>Delete</button>
    <button>Edit</button>
  </div>
)
};

export default SingleMemory;