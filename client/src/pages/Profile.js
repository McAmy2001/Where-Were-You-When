import React from "react";
import { Navigate, useParams } from "react-router-dom";

// import Queries and Mutations once they're set up
// import { useQuery, useMutation } from '@apollo/client';
// import { QUERY_USER, QUERY_ME, QUERY_MEMORIES } from '../utils/queries';
// import {  } from '../utils/mutations';

import Auth from "../utils/auth";

const Profile = (props) => {
  const { username: userParam } = useParams();

  // connect to Queries once they are set up
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/profile:username" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this information. Please use the links
        above to sign up or log in.
      </h4>
    );
  }

  // need to set up add memory button/form

  return (
    <div>
      <div>
        <h2>
          Viewing {userParam ? `${user.username}'s` : "your"} memory profile.
        </h2>
      </div>
      <div>
        <p>Form to input new memory will go here</p>
      </div>

      <div>
        <p>User's memory list will go here </p>
      </div>
    </div>
  );
};

export default Profile;
