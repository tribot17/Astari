import React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to={"/"}>
        <img id={styles.logo} src="../../../assets/Logo.png" />
      </Link>
      <div className={styles.displayLink}>
        <Link to={"/custom"}>
          <a className={styles.links}>WHITEPAPER</a>
        </Link>
        {/* <a className={styles.links}>TEAM</a> */}
        <Link to={"/mint"}>
          <a className={styles.links}>MINT</a>
        </Link>
        {/* <Link to={"/"}>
          <a className={styles.links}>HOME</a>
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
