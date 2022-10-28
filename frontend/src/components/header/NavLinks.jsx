/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { Routes, Route, Link } from "react-router-dom";
import SignLogInBar from "./SignLogInBar";
import styles from "./Navbar.module.css";
import Home from "../../pages/homePage/Home";
import Suggestions from "../../pages/suggestionsPage/Suggestions";
import Events from "../../pages/eventsPage/Events";

function NavLinks(props) {
  const { openUser, setOpenUser } = props;

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
    <div>
      <ul className={styles.MainNavbar}>
        <li className={styles.NavItem}>
          <Link to="/">Home</Link>
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

      <div>{openUser && <SignLogInBar />}</div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/suggestions" element={<Suggestions />} />
      </Routes>
    </div>
  );
}

export default NavLinks;
