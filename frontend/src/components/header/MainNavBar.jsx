/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDropupCircle } from "react-icons/io";
import MobileNavigation from "./MobileNavigation";
import ComputerNavigation from "./ComputerNavigation";
import styles from "./Navbar.module.css";

function MainNavBar() {
  const [openNav, setOpenNav] = useState(false);
  const [openUser, setOpenUser] = useState(false);

  const hamburger = (
    <AiOutlineMenu
      className={styles.Hamburger}
      onClick={() => {
        setOpenNav(!openNav);
      }}
    />
  );

  const close = (
    <AiOutlineCloseCircle
      className={styles.Close}
      onClick={() => {
        setOpenNav(!openNav);
      }}
    />
  );

  const user = (
    <FaUserCircle
      className={styles.UserIconMobile}
      onClick={() => setOpenUser(!openUser)}
    />
  );

  const closeUser = (
    <IoIosArrowDropupCircle
      className={styles.UserIconMobile}
      onClick={() => setOpenUser(!openUser)}
    />
  );

  return (
    <>
      <ComputerNavigation openUser={openUser} setOpenUser={setOpenUser} />
      <MobileNavigation
        openNav={openNav}
        hamburger={hamburger}
        close={close}
        openUser={openUser}
        user={user}
        closeUser={closeUser}
      />
    </>
  );
}

export default MainNavBar;
