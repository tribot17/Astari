import React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to={"/"}>
        <img id={styles.logo} src="./logo.png" />
      </Link>
      <div className={styles.displayLink}>
        <Link to={"/custom"}>
          <a className={styles.links}>WHITEPAPER</a>
        </Link>
        <Link to={"/custom"}>
          <a className={styles.links}>CUSTOM</a>
        </Link>
        <Link to={"/mint"}>
          <a className={styles.links}>MINT</a>
        </Link>
        {/* comment */}
        {/* <Link to={"/"}>
          <a className={styles.links}>HOME</a>
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
