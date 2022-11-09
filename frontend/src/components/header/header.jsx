/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import MainNavbar from "./MainNavBar";
import NavbarContext from "../../contexts/NavbarContext";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  const [openUser, setOpenUser] = useState(false);

  return (
    <NavbarContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={[openNav, setOpenNav, openUser, setOpenUser]}
    >
      <header>
        <MainNavbar />
      </header>
    </NavbarContext.Provider>
  );
}
