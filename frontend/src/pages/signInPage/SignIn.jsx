import React, { useState } from "react";
import SignInForm from "./signInPageForm/SignInForm";
import "./signInPageForm/Signin.css";

function SignIn() {
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "" });
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  // console.log(newUser);
  // console.log(user);
  // console.log(error);

  const Signin = (details) => {
    // console.log("Logged in");
    if (
      (newUser.first_name || newUser.last_name) === "" &&
      newUser.email === "" &&
      newUser.password === ""
    ) {
      //! ====================
      //* SEND THIS DATA TO A NEW USER OBJECT IN DATABASE - PUSH TO DATABASE
      //! ====================
      setNewUser({
        ...newUser,
        name: details.first_name.concat(details.last_name),
        email: details.email,
        password: details.password,
      });
      // console.log(newUser.name);
      setUser({
        ...user,
        name: details.first_name.concat(details.last_name),
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

  // useEffect(() => {
  //   SignIn();
  // }, []);

  const Logout = () => {
    // console.log("Logout");
    setNewUser({ name: "", email: "" });
  };
  return (
    <div>
      {newUser.email !== "" ? (
        <div className="signin-welcome">
          <h2 className="signin-formH2">
            Thanks for Signing In, <br />
            <span className="signin-span-name">{newUser.name}</span>
          </h2>
          <button className="logout-button-none" type="button" onClick={Logout}>
            <h5 className="logout-button">LogOut!</h5>
          </button>
        </div>
      ) : (
        <SignInForm Signin={Signin} error={error} />
      )}
    </div>
  );
}

export default SignIn;
