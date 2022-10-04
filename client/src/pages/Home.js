import React from "react";
import History from "../components/History";
import Memory from "../components/Memory";
import MemoryInput from "../components/MemoryInput";

import Auth from "../utils/auth";

import { useQuery } from "@apollo/client";
import { QUERY_MEMORIES } from "../utils/queries";
import EveryMemory from "../components/EveryMemory";

const Home = () => {
  // add useQuery hook here
  const { data } = useQuery(QUERY_MEMORIES);
  const memory = data?.memories || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      {!loggedIn && (
        <div>
          <History />
        </div>
      )}
      {loggedIn ? (
        <div>
          <MemoryInput />
          <Memory memory={memory} />
          <EveryMemory />
          <History />
        </div>
      ) : null}
    </main>
  );
};

export default Home;
