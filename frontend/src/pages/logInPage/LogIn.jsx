import React, { useState, useContext } from "react";
import userContext from "../../contexts/User/UserContext";
import LogInForm from "./logInPageForm/LogInForm";
import "./logInPageForm/Login.css";

function LogIn() {
  // const adminUser = {
  //   name: "Administrator",
  //   email: "admin@admin.com",
  //   password: "123",
  // };
  const [userData] = useContext(userContext);
  console.log(userData);
  // getUser();

  const [userLogin, setUserLogin] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    // if (
    //   details.email === userData.email &&
    //   details.password === userData.password
    // ) {
    //   // console.log("Logged in");
    //   setUserLogin({
    //     first_name: details.first_name,
    //     email: details.email,
    //   });
    // } else {
    //   // console.log("Details do not match!");
    //   setError("Details do not match!");
    // }
  };
  const Logout = () => {
    // console.log("Logout");
    setUserLogin({ first_name: "", email: "" });
  };
  return (
    <div className="LogIn">
      {userLogin.email !== "" ? (
        <div className="login-welcome">
          <h2 className="login-formH2">
            Welcome,{" "}
            <span className="login-span-name">{userLogin.first_name}</span>
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
