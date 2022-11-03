/* eslint-disable import/no-extraneous-dependencies */
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function SignLogInBar() {
  return (
    <div className={styles.SignLogIn}>
      <ul className={styles.SignLogInBar}>
        <li className={styles.NavItem}>
          <Link to="/signin">Sign In</Link>
        </li>
        <li className={styles.NavItem}>
          <Link to="/login">Log In</Link>
        </li>
      </ul>
    </div>
  );
}

export default SignLogInBar;
