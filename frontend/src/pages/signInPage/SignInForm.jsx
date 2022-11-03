/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./signin.css";

function SignInForm({ Signin, error }) {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    passwordRepeat: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    Signin(details);
    // console.log(details);
    // e.target.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>SignIn</h2>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />{" "}
        </div>
        <div className="form-group">
          <label htmlFor="password">Repeat Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, passwordRepeat: e.target.value })
            }
            value={details.passwordRepeat}
          />
        </div>
        <input type="submit" value="SignIn!" />
      </div>
    </form>
  );
}

export default SignInForm;
