// importing react and useState
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import "./App.css";

// importing Header, Footer, Home, Login, Signup, Profile, NoMatch, and SingleMemory components so they can be called/returned below
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import NoMatch from "./pages/NoMatch";
import SingleMemory from "./pages/SingleMemory";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// App function returning components using Route for pages
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />

          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile">
                <Route path=":username" element={<Profile />} />
                <Route path="" element={<Profile />} />
              </Route>
              <Route path="/memory/:id" element={<SingleMemory />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

// explorting App function
export default App;
