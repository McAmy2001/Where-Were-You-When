// import React
import React from "react";

// importing History, Memory, and MemoryInput components to use below
import History from "../components/History";
import Memory from "../components/Memory";
import MemoryInput from "../components/MemoryInput";

// importing Auth to use below to check if users are logged in or not
import Auth from "../utils/auth";

import { useQuery } from "@apollo/client";

// importing QUERY_MEMORIES from queries to use below
import { QUERY_MEMORIES } from "../utils/queries";

// importing EveryMemory component to use below
import EveryMemory from "../components/EveryMemory";

// Home function returns the hompage, and the components renders are dependent on if the user is logged in or logged out
const Home = () => {
  // add useQuery hook here
  const { data } = useQuery(QUERY_MEMORIES);
  const memory = data?.memories || [];

  // loggedIn checks if user is logged in
  const loggedIn = Auth.loggedIn();

  return (
    <main className="page-view">
      {!loggedIn && (
        <div>
          <History />
        </div>
      )}
      {loggedIn ? (
        <div>
          <MemoryInput />
          <br />
          <h2>Your Memories for Today</h2>
          <Memory memory={memory} />
          <br />
          <EveryMemory />
          <History />
        </div>
      ) : null}
    </main>
  );
};

export default Home;
