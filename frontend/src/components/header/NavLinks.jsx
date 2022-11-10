/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/User/UserContext";
import SignLogInBar from "./SignLogInBar";
import NavbarContext from "../../contexts/NavbarContext";
import styles from "./Navbar.module.css";

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

  const msg = useContext(UserContext);

  return (
    <nav>
      <ul className={styles.MainNavbar}>
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
        <div>Message{msg}</div>
      </ul>
      {openUser && <SignLogInBar />}
    </nav>
  );
}

export default NavLinks;
