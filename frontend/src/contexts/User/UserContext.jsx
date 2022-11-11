// /* eslint-disable react/prop-types */
// import { createContext, useState, useEffect } from "react";
// import axios from "axios";

// const UserContext = createContext();
// export default UserContext;

// export function UserContextProvider({ children }) {
//   const [userData, setUserData] = useState();

//   // const id = parseInt(req.params.id, 10);
//   const fetchUsers = async () => {
//     await axios
//       .get("http://localhost:5000/users/")
//       .then((response) => setUserData(response.data))
//       // if (users != null) {
//       //   setUserData(users);
//       // }

//       .catch((err) => {
//         console.error(err, "this is the error");
//       });
//   };
//   console.log(userData, "em userContext");
//   useEffect(() => {
//     fetchUsers();
//   }, []);
//   // console.log(userData);

//   // eslint-disable-next-line prettier/prettier
//       return (
//     // eslint-disable-next-line react/jsx-no-constructed-context-values
//     <UserContext.Provider value={[userData]}>{children}</UserContext.Provider>
//   );
// }

/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const UserContext = createContext();
export default UserContext;
export function UserContextProvider({ children }) {
  //* create state to store the movies
  const [users, setUsers] = useState([]);
  //* create movie handler for fetching movies
  const fetchUsers = () => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => setUsers(response.data));
  };
  //* use useEffect to fetch movies on mounting
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
}
