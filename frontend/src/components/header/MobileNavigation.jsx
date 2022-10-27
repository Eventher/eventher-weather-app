/* eslint-disable react/prop-types */
import React from "react";
import NavLinks from "./NavLinks";
import SignLogInBar from "./SignLogInBar";
import styles from "./Navbar.module.css";

function MobileNavigation(props) {
  const { openNav, hamburger, close, openUser, user, closeUser } = props;

  return (
    <nav className={styles.MobileNavigation}>
      {openUser ? closeUser : user}
      {openUser && <SignLogInBar />}
      {openNav ? close : hamburger}
      {openNav && <NavLinks />}
    </nav>
  );
}

export default MobileNavigation;
