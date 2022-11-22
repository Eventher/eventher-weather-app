/* eslint-disable import/no-extraneous-dependencies */
import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import NavbarContext from "../../contexts/NavbarContext";

function SignLogInBar() {
  const [setOpenUser] = useContext(NavbarContext);

  return (
    <div className={styles.SignLogIn}>
      <ul className={styles.SignLogInBar}>
        <li className={styles.NavItem}>
          <Link to="/signin" onClick={() => setOpenUser(false)}>
            Sign In
          </Link>
        </li>
        <li className={styles.NavItem}>
          <Link to="/login" onClick={() => setOpenUser(false)}>
            Log In
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SignLogInBar;
