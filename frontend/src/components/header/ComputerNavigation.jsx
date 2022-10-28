/* eslint-disable react/prop-types */
import NavLinks from "./NavLinks";
import styles from "./Navbar.module.css";

function ComputerNavigation(props) {
  const { openUser, setOpenUser } = props;

  return (
    <nav className={styles.ComputerNavigation}>
      <NavLinks openUser={openUser} setOpenUser={setOpenUser} />
    </nav>
  );
}

export default ComputerNavigation;
