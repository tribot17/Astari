import React, { useEffect } from "react";
import styles from "./HomePage.module.scss";
import stars from "../../../assets/stars.png";
const HomePage = () => {
  useEffect(() => {}, []);

  return (
    <div className={styles.homePage}>
      <img src={stars} id={styles.stars} />
      <img src="./earth.png" id={styles.earth} />
      <div className={styles.logo_button}>
        <img src="./public/logoAll.png" id={styles.logoAll} />
        <button>
          <p>EXPLORE</p>
        </button>
      </div>
      <img src="./public/sun.png" id={styles.sun} />
      <img src="./public/planet16.png" id={styles.planet16} />
      <img src="./public/mars.png" id={styles.mars} />
      <img src="./public/jupiter.png" id={styles.jupiter} />
      <img src="./public/planet.png" id={styles.planet} />
      <img src="./public/moon.png" id={styles.moon} />
    </div>
  );
};

export default HomePage;
