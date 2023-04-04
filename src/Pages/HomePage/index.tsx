import React, { useEffect } from "react";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  useEffect(() => {}, []);

  return (
    <div className={styles.homePage}>
      <img src="../../../assets/stars.png" id={styles.stars} />
      <img src="../../../assets/earth.png" id={styles.earth} />
      <div className={styles.logo_button}>
        <img src="../../../assets/logoAll.png" id={styles.logoAll} />
        <button>
          <p>EXPLORE</p>
        </button>
      </div>
      <img src="../../../assets/sun.png" id={styles.sun} />
      <img src="../../../assets/planet16.png" id={styles.planet16} />
      <img src="../../../assets/mars.png" id={styles.mars} />
      <img src="../../../assets/jupiter.png" id={styles.jupiter} />
      <img src="../../../assets/planet.png" id={styles.planet} />
      <img src="../../../assets/moon.png" id={styles.moon} />
    </div>
  );
};

export default HomePage;
