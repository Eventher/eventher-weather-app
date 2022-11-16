/* eslint-disable no-unused-expressions */
import React, { useState, useContext } from "react";
// eslint-disable-next-line import/no-named-as-default
import UserContext from "../../contexts/User/UserContext";
import LogInForm from "./logInPageForm/LogInForm";
import "./logInPageForm/Login.css";

function LogIn() {
  const { users } = useContext(UserContext);
  const [userLogin, setUserLogin] = useState();
  const [error, setError] = useState("");

  const Login = (details) => {
    const logger = users
      ?.filter(
        (user) =>
          details.email === user?.email && details.password === user?.entry
      )
      .map((user) => setUserLogin(user));

    if (
      details.email === logger.email &&
      details.password === logger.password
    ) {
      setUserLogin({
        first_name: logger.first_name,
        email: logger.email,
      });
    } else {
      setError("Details do not match!");
    }
  };
  const Logout = () => {
    setUserLogin({ first_name: "", email: "" });
  };
  return (
    <div className="LogIn">
      {userLogin !== undefined && userLogin?.email !== "" ? (
        <div className="login-welcome">
          <h2 className="login-formH2">
            Welcome,{" "}
            <span className="login-span-name">{userLogin?.first_name}</span>
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
