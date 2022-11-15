/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./Signin.css";

function SignInForm({ Signin, error, errorPass }) {
  const [details, setDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    city: "",
    language: "",
    entry: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    Signin(details);
    // console.log(details);
  };

  return (
    <form className="signinForm" onSubmit={submitHandler}>
      <div className="signin-form-inner">
        <h2 className="signin-formH2">Sign In</h2>
        {(error !== "" ? <div className="error">{error}</div> : "") ||
          (errorPass !== "" ? <div className="error">{errorPass}</div> : "")}
        <div className="signin-form-group">
          <label className="signin-formLabel" htmlFor="name">
            First Name:{" "}
          </label>
          <input
            className="signin-formInput"
            type="text"
            name="first_name"
            id="first_name"
            onChange={(e) =>
              setDetails({ ...details, first_name: e.target.value })
            }
            value={details.first_name}
          />
        </div>
        <div className="signin-form-group">
          <label className="signin-formLabel" htmlFor="name">
            Last Name:{" "}
          </label>
          <input
            className="signin-formInput"
            type="text"
            name="last_name"
            id="last_name"
            onChange={(e) =>
              setDetails({ ...details, last_name: e.target.value })
            }
            value={details.last_name}
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
            onChange={(e) => setDetails({ ...details, entry: e.target.value })}
            value={details.entry}
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
        <div className="signin-form-group">
          <label className="signin-formLabel" htmlFor="city">
            City:{" "}
          </label>
          <input
            className="signin-formInput"
            type="text"
            name="city"
            id="city"
            onChange={(e) => setDetails({ ...details, city: e.target.value })}
            value={details.city}
          />
        </div>
        <div className="signin-form-group">
          <label className="signin-formLabel" htmlFor="language">
            Language:{" "}
          </label>
          <input
            className="signin-formInput"
            type="text"
            name="language"
            id="language"
            onChange={(e) =>
              setDetails({ ...details, language: e.target.value })
            }
            value={details.language}
          />
        </div>
        <input className="signin-formSubmit" type="submit" value="SignIn!" />
      </div>
    </form>
  );
}

export default SignInForm;
