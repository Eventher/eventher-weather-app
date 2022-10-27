import styles from "./Navbar.module.css";

function SignLogInBar() {
  return (
    <ul className={styles.SignLogInBar}>
      <li className={styles.NavItem}>
        <a href="/">Sign In</a>
      </li>
      <li className={styles.NavItem}>
        <a href="/events">Log In</a>
      </li>
    </ul>
  );
}

export default SignLogInBar;
