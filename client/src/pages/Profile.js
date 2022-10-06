// import react
import React from "react";
// import Navigate and useParams from react-router-dom
import { Navigate, useParams } from "react-router-dom";

// importing Memory and MemoryInput components to call below
import Memory from "../components/Memory";
import MemoryInput from "../components/MemoryInput";

// import Queries
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";

// importing Auth to use below to check if users are logged in or not
import Auth from "../utils/auth";

const Profile = (props) => {
  const { username: userParam } = useParams();

  // connect to Queries once they are set up
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  const memory = data?.memories || data?.memories || {};

  // if user is logged in, returns profile page
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/profile:username" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  // if user is not logged in, they are told they need to log in to see profile page
  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this information. Please use the links
        above to sign up or log in.
      </h4>
    );
  }

  return (
    <div className="page-view">
      <div>
        <h2>
          Viewing {userParam ? `${user.username}'s` : "your"} memory profile.
        </h2>
      </div>
      <div>
        <MemoryInput />
        <br />
      </div>

      <div>
        <div>
          <h2>My Memories</h2>
          <Memory />
        </div>
      </div>
    </div>
  );
};

export default Profile;
