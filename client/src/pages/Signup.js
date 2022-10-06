// import React with useState
import React, { useState } from "react";

import { useMutation } from "@apollo/client";
// importing ADD_USER from mutations to use below
import { ADD_USER } from "../utils/mutations";

// importing Auth to use below to check if users are logged in or not
import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [addUser, { error }] = useMutation(ADD_USER);

  // when input changes, updates state
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // handleFormSubmit submits the form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      // ensures user is logged in after sign up
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main>
      <div className="page-view">
        <div className="signup">
          <h2>Create an Account</h2>

          <div>
            <form onSubmit={handleFormSubmit} className="form-flex">
              <input
                placeholder="Choose a username"
                name="username"
                type="username"
                id="username"
                value={formState.username}
                onChange={handleChange}
                className="form-input"
              />
              <input
                placeholder="Enter your email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
                className="form-input"
              />
              <input
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
                className="form-input"
              />
              <button className="submit-btn">Create New Account</button>
            </form>

            {error && <div>Signup failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
