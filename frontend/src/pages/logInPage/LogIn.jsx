import React, { useState } from "react";
import LogInForm from "./LogInForm";
import "./login.css";

function LogIn() {
  const adminUser = {
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
        <div className="welcome">
          <h2>
            Wellcome, <span>{user.name}</span>
          </h2>
          <button type="button" onClick={Logout}>
            <h5>LogOut!</h5>
          </button>
        </div>
      ) : (
        <LogInForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default LogIn;
