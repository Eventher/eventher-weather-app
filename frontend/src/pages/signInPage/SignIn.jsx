/* eslint-disable no-restricted-syntax */
import React, { useState } from "react";
import axios from "axios";
import SignInForm from "./signInPageForm/SignInForm";

import "./signInPageForm/Signin.css";

function SignIn() {
  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    city: "",
    language: "",
    entry: "",
  });
  // const [user, setUser] = useState({ name: "", email: "", entry: "" });
  const [error, setError] = useState("");
  const [errorPass, setErrorPass] = useState("");

  // console.log(newUser);
  // console.log(user);
  // console.log(error);

  const Signin = (details) => {
    // console.log(details, "Logged in");

    if (details.entry !== details.passwordRepeat) {
      setErrorPass("Password do not match!");
    } else if (
      newUser.first_name === "" &&
      newUser.email === "" &&
      newUser.entry === ""
    ) {
      setNewUser({
        ...newUser,
        first_name: details.first_name,
        last_name: details.last_name,
        email: details.email,
        entry: details.entry,
      });
      // .then((req) => req.body === newUser);

      // setUser({
      //   ...user,
      //   name: details.first_name.concat(" ", details.last_name),
      //   email: details.email,
      //   password: details.entry,
      // });
    } else {
      // console.log("User already signed in!");
      setError("User already signed in! Log In please!");
    }
    axios
      .post("http://localhost:5000/users", details)
      .then((data) => {
        console.log(data.status);
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log(newUser);

  const Logout = () => {
    // console.log("Logout");
    setNewUser({ first_name: "", email: "", entry: "" });
  };
  return (
    <div>
      {newUser.email !== "" ? (
        <div className="signin-welcome">
          <h2 className="signin-formH2">
            Thanks for Signing In, <br />
            <span className="signin-span-name">{newUser.first_name}</span>
          </h2>
          <button className="logout-button-none" type="button" onClick={Logout}>
            <h5 className="logout-button">LogOut!</h5>
          </button>
        </div>
      ) : (
        <SignInForm Signin={Signin} error={error} errorPass={errorPass} />
      )}
    </div>
  );
}
export default SignIn;
