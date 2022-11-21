/* eslint-disable no-sequences */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDropupCircle } from "react-icons/io";
import NavLinks from "./NavLinks";
import SignLogInBar from "./SignLogInBar";
import NavbarContext from "../../contexts/NavbarContext";
import styles from "./Navbar.module.css";
import eventherLogo from "../../assets/Eventher.png";

function MobileNavigation() {
  const [openNav, setOpenNav, openUser, setOpenUser] =
    useContext(NavbarContext);

  const hamburger = (
    <AiOutlineMenu
      className={styles.Hamburger}
      onClick={() => (setOpenNav(!openNav), setOpenUser(false))}
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
      onClick={() => (setOpenUser(!openUser), setOpenNav(false))}
    />
  );

  const closeUser = (
    <IoIosArrowDropupCircle
      className={styles.UserIconMobile}
      onClick={() => setOpenUser(!openUser)}
    />
  );

  return (
    <nav className={styles.MobileNavigation}>
      <div className={styles.MobileLogoContainer}>
        <Link to="/" onClick={() => setOpenNav(false)}>
          <img src={eventherLogo} alt="Logo" className={styles.MobileLogo} />
        </Link>
      </div>
      {openUser ? closeUser : user}
      {openUser && <SignLogInBar />}
      {openNav ? close : hamburger}
      {openNav && <NavLinks />}
    </nav>
  );
}

export default MobileNavigation;
