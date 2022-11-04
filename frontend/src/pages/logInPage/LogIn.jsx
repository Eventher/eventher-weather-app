import React, { useState } from "react";
import LogInForm from "./logInPageForm/LogInForm";
import "./logInPageForm/Login.css";

function LogIn() {
  const adminUser = {
    name: "Administrator",
    email: "admin@admin.com",
    password: "123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    // console.log(details);

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      // console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      // console.log("Details do not match!");
      setError("Details do not match!");
    }
  };
  const Logout = () => {
    // console.log("Logout");
    setUser({ name: "", email: "" });
  };
  return (
    <div className="LogIn">
      {user.email !== "" ? (
        <div className="login-welcome">
          <h2 className="login-formH2">
            Welcome, <span className="login-span-name">{user.name}</span>
          </h2>
          <button className="logout-button-none" type="button" onClick={Logout}>
            <h5 className="logout-button">LogOut!</h5>
          </button>
        </div>
      ) : (
        <LogInForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default LogIn;
