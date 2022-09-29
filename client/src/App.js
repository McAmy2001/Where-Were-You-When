import React, { useState } from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page from "./components/Page";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  const [pageList] = useState([
    "Main",
    "Profile",
    "Login",
    "Sign Up",
    "Logout",
  ]);

  const [activePage, setActivePage] = useState(pageList[0]);

  const [activePageSelected, setPageSelected] = useState(false);

  return (
    <ApolloProvider client={client}>
      <div>
        <Header
          pageList={pageList}
          activePage={activePage}
          setActivePage={setActivePage}
          activePageSelected={activePageSelected}
          setPageSelected={setPageSelected}
        />

        <main>
          <Page activePage={activePage} />
        </main>

        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
