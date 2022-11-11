// import React, { useState, useContext } from "react";
// import UserContext from "../../contexts/User/UserContext";
// import LogInForm from "./logInPageForm/LogInForm";
// import "./logInPageForm/Login.css";

// function LogIn() {
//   // const adminUser = {
//   //   name: "Administrator",
//   //   email: "admin@admin.com",
//   //   password: "123",
//   // };
//   // getUser();
//   const [error, setError] = useState("");

//   //* State that receives all users from api/db
//   const [userData] = useContext(UserContext);

//   //* State that maps the user info from the db
//   // const [userLogger, setUserLogger] = useState();

//   //* State that allows the login - "door key"
//   const [userLogin, setUserLogin] = useState({ email: "", password: "" });
//   console.log(userLogin, "em login");

//   console.log(userData, "em login");

//   const userEmails = userData.map((users) => users.email);
//   console.log(userEmails);

//   //* Se no map dos USERS, includes details.email - faz o login

//   const Login = (details) => {
//     console.log(details);

//     // const resultUser = userData
//     //   .filter((user) => user.email)
//     //   .map((user) => setuser);
//     // setUserLogin(resultUser.email);

//     // userData
//     //   ?.filter((user) => details.email === user?.email)
//     //   .map((user) => setUserLogin(...user, user.email));
//     // userData
//     //   .filter((user) => details.email === user.email)
//     //   .map((user) => setUserLogin(user));
//     // logUser != null && logUser.length > 0 ? setUserLogin(logUser) : null;
//     // if (
//     //   details.email === userData.email &&
//     //   details.password === userData.password
//     // ) {
//     //   // console.log("Logged in");
//     //   setUserLogin({
//     //     first_name: details.first_name,
//     //     email: details.email,
//     //   });
//     // } else {
//     //   // console.log("Details do not match!");
//     //   setError("Details do not match!");
//     // }
//   };
//   // console.log(userLogin);

//   const Logout = () => {
//     // console.log("Logout");
//     setUserLogin({ first_name: "", email: "" });
//   };

//   return (
//     <div className="LogIn">
//       {userLogin.email !== "" ? (
//         <div className="login-welcome">
//           <h2 className="login-formH2">
//             Welcome,{" "}
//             <span className="login-span-name">{userLogin?.first_name}</span>
//           </h2>
//           <button className="logout-button-none" type="button" onClick={Logout}>
//             <h5 className="logout-button">LogOut!</h5>
//           </button>
//         </div>
//       ) : (
//         <LogInForm Login={Login} error={error} />
//       )}
//     </div>
//   );
// }

// export default LogIn;

/* eslint-disable no-unused-expressions */
import React, { useState, useContext } from "react";
import UserContext from "../../contexts/User/UserContext";
import LogInForm from "./logInPageForm/LogInForm";
import "./logInPageForm/Login.css";

function LogIn() {
  // const adminUser = {
  //   name: "Administrator",
  //   email: "admin@admin.com",
  //   password: "123",
  // };
  // console.log(userData);
  // getUser();
  const { users } = useContext(UserContext);
  // console.log(users);
  const [userLogin, setUserLogin] = useState();
  const [error] = useState("");
  const Login = (details) => {
    // console.log(details);
    users
      ?.filter((user) => details.email === user?.email)
      .map((user) => setUserLogin(user));
    // logUser != null && logUser.length > 0 ? setUserLogin(logUser) : null;
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
  // console.log(userLogin);
  const Logout = () => {
    // console.log("Logout");
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
