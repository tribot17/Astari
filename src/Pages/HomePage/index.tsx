import React, { useEffect } from "react";
import styles from "./HomePage.module.scss";
const HomePage = () => {
  useEffect(() => {}, []);

  return (
    <div className={styles.homePage}>
      <img src="./stars.png" id={styles.stars} />
      <img src="./earth.png" id={styles.earth} />
      <div className={styles.logo_button}>
        <img src="./logoAll.png" id={styles.logoAll} />
        <button>
          <p>EXPLORE</p>
        </button>
      </div>
      <img src="./sun.png" id={styles.sun} />
      <img src="./planet16.png" id={styles.planet16} />
      <img src="./mars.png" id={styles.mars} />
      <img src="./jupiter.png" id={styles.jupiter} />
      <img src="./planet.png" id={styles.planet} />
      <img src="./moon.png" id={styles.moon} />
    </div>
  );
};

export default HomePage;
