//import React from 'react';
//import { useQuery } from '@apollo/client';
//import { useParams } from 'react-router-dom';
//import { QUERY_MEMORY } from '../../utils/queries';
//
//
//function SingleMemory() {
//
//const { id: memoryId } = useParams();
//console.log(memoryId);
//
//const { loading, data } = useQuery(QUERY_MEMORY, {
//  variables: { id: memoryId }
//});
//
//const memory = data?.memory || {};
//console.log(memory);
//
//
//if (loading) {
//  return <div>Loading...</div>;
//}
//};
//
//export default SingleMemory;