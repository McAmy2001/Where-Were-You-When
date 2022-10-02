import React from "react";
import { Navigate, useParams } from "react-router-dom";

import Memory from "../components/Memory";
import MemoryInput from "../components/MemoryInput";


// import Queries
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";


import Auth from "../utils/auth";

const Profile = (props) => {
  const { username: userParam } = useParams();

  // connect to Queries once they are set up
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  const memory = data?.memory || data?.memory || {};

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

  return (
    <div>
      <div>
        <h2>
          Viewing {userParam ? `${user.username}'s` : "your"} memory profile.
        </h2>
      </div>
      <div>
        <MemoryInput />
      </div>

      <div>
        <div>
          <h2>My Memories</h2>
          <Memory memory={memory} title={`${user.username}'s Memories`} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
