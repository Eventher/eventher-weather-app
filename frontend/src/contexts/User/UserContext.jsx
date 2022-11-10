import { createContext, useState, useEffect } from "react";

import axios from "axios";

const userContext = createContext();
export default userContext;

// eslint-disable-next-line react/prop-types
export function UserContextProvider({ children }) {
  const [userData, setUserData] = useState();

  // const id = parseInt(req.params.id, 10);
  const fetchUsers = () => {
    axios
      .get("http://localhost:5000/users/")
      .then(
        (response) => setUserData(response.data)
        // if (users != null) {
        //   setUserData(users);
        // }
      )
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  // console.log(userData);

  // eslint-disable-next-line prettier/prettier
      return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <userContext.Provider value={[userData]}>{children}</userContext.Provider>
  );
}
