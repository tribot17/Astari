import React from "react";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div>
      <img src="../../../assets/Stars.png" id={styles.stars} />
      <img src="../../../assets/earth.png" id={styles.earth} />
      <div className={styles.logo_button}>
        <img src="../../../assets/LogoAll.png" id={styles.logoAll} />
        <button>
          <p>EXPLORE</p>
        </button>
      </div>
      <img src="../../../assets/Sun.png" id={styles.sun} />
      <img src="../../../assets/Planet16.png" id={styles.planet16} />
      <img src="../../../assets/Mars.png" id={styles.mars} />
      <img src="../../../assets/Jupiter.png" id={styles.jupiter} />
      <img src="../../../assets/Planet.png" id={styles.planet} />

      <img src="../../../assets/Moon.png" id={styles.moon} />
    </div>
  );
};

export default HomePage;
