/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import SignLogInBar from "./SignLogInBar";
import NavbarContext from "../../contexts/NavbarContext";
import styles from "./Navbar.module.css";
import eventherLogo from "../../assets/Eventher.png";

function NavLinks() {
  const [openUser, setOpenUser] = useContext(NavbarContext);

  const userComputer = (
    <FaUserCircle
      className={styles.UserIconComputer}
      onClick={() => setOpenUser(!openUser)}
    />
  );

  const closeUserComputer = (
    <IoIosArrowDropupCircle
      className={styles.UserIconComputer}
      onClick={() => setOpenUser(!openUser)}
    />
  );

  return (
    <nav>
      <ul className={styles.MainNavbar}>
        <img src={eventherLogo} alt="Logo" className="logo" />
        <li className={styles.NavItem}>
          <Link to="/home">Home</Link>
        </li>
        <li className={styles.NavItem}>
          <Link to="/events">Events</Link>
        </li>
        <li className={styles.NavItem}>
          <Link to="/suggestions">Suggestions</Link>
        </li>
        <li className={styles.IconItem}>
          {openUser ? closeUserComputer : userComputer}
        </li>
      </ul>
      {openUser && <SignLogInBar />}
    </nav>
  );
}

export default NavLinks;
