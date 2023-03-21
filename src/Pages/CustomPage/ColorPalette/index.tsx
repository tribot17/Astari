import styles from "./ColorPalette.module.scss";
import React, { useEffect, useState } from "react";
import { colorPaletteInterface } from "../../../../interfaces/interfaces";
import colors from "../../../../assets/colors";
const colorArray = ["Blue", "#FFA000", "Grey", "Black"];

const index: React.FC<colorPaletteInterface> = ({
  setPaletteIsOpen,
  bodyPart,
  setBodyPart,
  partIndex,
}) => {
  const [colorIndex, setColorIndex] = useState<any>();

  useEffect(() => {
    setColorIndex(colors[partIndex]);
  }, []);

  const handleColorSelect = (color: string) => {
    setBodyPart({
      ...bodyPart,
      [partIndex]: { ...bodyPart[partIndex], color },
    });
    setPaletteIsOpen(false);
  };

  return (
    <div className={styles.palette_modal}>
      <div className={styles.palette_modal_container}>
        <div className={styles.palette_modal_title}>
          <h1>COLOR EXEMPLE</h1>
          <div id={styles.close_button} onClick={() => setPaletteIsOpen(false)}>
            X
          </div>
        </div>
        <div className={styles.palette_modal_color_grid}>
          {colorIndex &&
            colorIndex.map((n, index) => (
              <div
                key={index}
                className={styles.card}
                onClick={() => handleColorSelect(n.color)}
              >
                <div
                  className={styles.card_color}
                  style={{ backgroundColor: n.color }}
                ></div>
                <div className={styles.card_footer}>
                  <p className={styles.card_text}>{n.text}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default index;
