/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const UserContext = createContext();

export default UserContext;
export function UserContextProvider({ children }) {
  //* create state to store the movies
  const [users, setUsers] = useState([]);
  //* create users handler for fetching users
  const fetchUsers = () => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => setUsers(response.data));
  };
  //* use useEffect to fetch users on mounting
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
}
