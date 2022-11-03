import React, { useState } from "react";
import SignInForm from "./SignInForm";
import "./signin.css";

function SignIn() {
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "" });
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const Signin = (details) => {
    // console.log("Logged in");

    if (
      newUser.name === "" &&
      newUser.email === "" &&
      newUser.password === ""
    ) {
      //! ====================
      //* SEND THIS DATA TO A NEW USER OBJECT IN DATABASE - PUSH TO DATABASE
      //! ====================
      setNewUser({
        ...newUser,
        name: details.name,
        email: details.email,
        password: details.password,
      });
      setUser({
        ...user,
        name: details.name,
        email: details.email,
        password: details.password,
      });
      // console.log(newUser);
      // console.log(user);
    } else {
      // console.log("User already signed in!");
      setError("User already signed in! Log In please!");
    }
  };
  const Logout = () => {
    // console.log("Logout");
    setNewUser({ name: "", email: "" });
  };
  return (
    <div>
      {newUser.email !== "" ? (
        <div className="welcome">
          <h2>
            Thanks for Signing In, <br />
            <span>{newUser.name}</span>
          </h2>
          <button type="button" onClick={Logout}>
            <h5>LogOut!</h5>
          </button>
        </div>
      ) : (
        <SignInForm Signin={Signin} error={error} />
      )}
    </div>
  );
}

export default SignIn;
