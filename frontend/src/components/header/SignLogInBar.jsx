import styles from "./Navbar.module.css";

function SignLogInBar() {
  return (
    <ul className={styles.SignLogInBar}>
      <li className={styles.NavItem}>
        <a href="sign-in">Sign In</a>
      </li>
      <li className={styles.NavItem}>
        <a href="log-in">Log In</a>
      </li>
    </ul>
  );
}

export default SignLogInBar;

/* import { Routes, Route, Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import SignIn from "../../pages/signInPage/SignIn";
import LogIn from "../../pages/logInPage/LogIn";

function SignLogInBar() {
  return (
    <div>
      <ul className={styles.SignLogInBar}>
        <li className={styles.NavItem}>
          <Link to="/sign-in">Sign In</Link>
        </li>
        <li className={styles.NavItem}>
          <Link to="/log-in">Log In</Link>
        </li>
      </ul>

      <Routes>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="log-in" element={<LogIn />} />
      </Routes> 
      </div>
      );
    }
    
    export default SignLogInBar;

    */
