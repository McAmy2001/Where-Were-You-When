import React from "react";
import History from "../components/History";
import Memory from "../components/Memory";

import Auth from "../utils/auth";

import { useQuery } from "@apollo/client";
import { QUERY_MEMORIES } from "../utils/queries";

const Home = () => {
  // add useQuery hook here
  const { data } = useQuery(QUERY_MEMORIES);
  const memory = data?.memory || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <History />
      {loggedIn ? (
        <div>
          <Memory memory={memory} />
        </div>
      ) : null}
    </main>
  );
};

export default Home;
