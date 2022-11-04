/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./Signin.css";

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
    <form className="signinForm" onSubmit={submitHandler}>
      <div className="signin-form-inner">
        <h2 className="signin-formH2">Sign In</h2>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <div className="signin-form-group">
          <label className="signin-formLabel" htmlFor="name">
            Name:{" "}
          </label>
          <input
            className="signin-formInput"
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>
        <div className="signin-form-group">
          <label className="signin-formLabel" htmlFor="email">
            Email:{" "}
          </label>
          <input
            className="signin-formInput"
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="signin-form-group">
          <label className="signin-formLabel" htmlFor="password">
            Password:{" "}
          </label>
          <input
            className="signin-formInput"
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />{" "}
        </div>
        <div className="signin-form-group">
          <label className="signin-formLabel" htmlFor="password">
            Repeat Password:{" "}
          </label>
          <input
            className="signin-formInput"
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, passwordRepeat: e.target.value })
            }
            value={details.passwordRepeat}
          />
        </div>
        <input className="signin-formSubmit" type="submit" value="SignIn!" />
      </div>
    </form>
  );
}

export default SignInForm;
