/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./Login.css";

function LogInForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <form className="loginForm" onSubmit={submitHandler}>
      <div className="login-form-inner">
        <h2 className="login-formH2">Login</h2>
        {error !== "" ? <div className="error">{error}</div> : ""}
        {/* <div className="login-form-group">
          <label className="login-formLabel" htmlFor="name">
            Name:{" "}
          </label>
          <input
            className="login-formInput"
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div> */}
        <div className="login-form-group">
          <label className="login-formLabel" htmlFor="email">
            Email:{" "}
          </label>
          <input
            className="login-formInput"
            type="email"
            name="email"
            id="email"
            onChange={(e) =>
              setDetails({
                ...details,
                email: e.target.value,
                name: "Administrator",
              })
            }
            value={details.email}
          />
        </div>
        <div className="login-form-group">
          <label className="login-formLabel" htmlFor="password">
            Password:{" "}
          </label>
          <input
            className="login-formInput"
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <input className="login-formSubmit" type="submit" value="LogIn!" />
      </div>
    </form>
  );
}

export default LogInForm;
