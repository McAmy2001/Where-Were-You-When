// import React with useState
import React, { useState } from "react";

import { useMutation } from "@apollo/client";

// importing LOGIN_USER from mutations to use below
import { LOGIN_USER } from "../utils/mutations";

// importing Auth to use below to check if users are logged in or not
import Auth from "../utils/auth";

// login function checks if has inputted the correct log in information and if so, logs them in
const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  //  use LOGIN_USER mutation once set up
  const [login, { error }] = useMutation(LOGIN_USER);

  // state is updated based on input changes
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
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
    // clears the form values after submit
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <main>
      <div className="page-view">
        <div className="login">
          <h2>Login</h2>
          <div>
            <form onSubmit={handleFormSubmit} className="form-flex">
              <input
                placeholder="Your email"
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
              <button className="submit-btn">Submit</button>
            </form>

            {error && <div>Login failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};
export default Login;
