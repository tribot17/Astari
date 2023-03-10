import { CSSProperties, useState } from "react";
import styles from "./CustomPage.module.scss";
import hairs from "../../../assets/svg/Hairs/hairs";
import heads from "../../../assets/svg/Heads/heads";
import eyes from "../../../assets/svg/Eyes/eyes";
import beards from "../../../assets/svg/Beards/beards";
import mouths from "../../../assets/svg/Mouths/mouth";
import noses from "../../../assets/svg/Noses/noses";

const index = () => {
  const PART = ["head", "hair", "eyes", "nose", "mouth", "beard"];
  const [partIndex, setPartIndex] = useState<string>(PART[0]);
  const [bodyPart, setBodyPart] = useState<any>({
    head: {
      index: 1,
      color: "#ffffff",
      limit: 4,
    },
    hair: {
      index: 0,
      color: "#ffffff",
      limit: 4,
    },
    eyes: {
      index: 0,
      color: "#ffffff",
      limit: 4,
    },
    nose: {
      index: 0,
      color: "#ffffff",
      limit: 4,
    },
    mouth: {
      index: 0,
      color: "#ffffff",
      limit: 4,
    },
    beard: {
      index: 0,
      color: "#ffffff",
      limit: 4,
    },
  });

  const handleIndexChange = (e: any) => {
    const arrow: string = e.target.alt;
    console.log(partIndex, bodyPart[partIndex], bodyPart);

    if (arrow === "left_arrow") {
      if (
        bodyPart[partIndex].index > 0 &&
        bodyPart[partIndex].index <= bodyPart[partIndex].limit &&
        bodyPart[partIndex].index - 1 !== 0
      ) {
        setBodyPart({
          ...bodyPart,
          [partIndex]: {
            ...bodyPart[partIndex],
            index: bodyPart[partIndex].index - 1,
          },
        });
      } else
        setBodyPart({
          ...bodyPart,
          [partIndex]: {
            ...bodyPart[partIndex],
            index: bodyPart[partIndex].limit,
          },
        });
    } else {
      if (
        bodyPart[partIndex].index > 0 &&
        bodyPart[partIndex].index < bodyPart[partIndex].limit
      )
        setBodyPart({
          ...bodyPart,
          [partIndex]: {
            ...bodyPart[partIndex],
            index: bodyPart[partIndex].index + 1,
          },
        });
      else
        setBodyPart({
          ...bodyPart,
          [partIndex]: { ...bodyPart[partIndex], index: 1 },
        });
    }
  };

  const handlePartChange = (arrow: any) => {
    const arrayIndex = PART.indexOf(partIndex);
    let endIndex = "";

    if (arrow.target.alt === "up_arrow") {
      if (arrayIndex + 1 < PART.length) {
        setPartIndex(PART[arrayIndex + 1]);
        endIndex = PART[arrayIndex + 1];
      } else {
        setPartIndex(PART[0]);
        endIndex = PART[0];
      }
    } else {
      if (arrayIndex - 1 >= 0) {
        setPartIndex(PART[arrayIndex - 1]);
        endIndex = PART[arrayIndex - 1];
      } else {
        setPartIndex(PART[PART.length - 1]);
        endIndex = PART[PART.length - 1];
      }
    }

    if (BodyIndex[endIndex] === undefined) {
      setIndex({ ...BodyIndex, [BodyIndex[endIndex]]: 1 });
    }
  };

  const handleColorChange = (e) => {
    // const color: string = e.target.value;

    let r = parseInt(e.target.value.substring(1, 3), 16);
    let g = parseInt(e.target.value.substring(3, 5), 16);
    let b = parseInt(e.target.value.substring(5, 7), 16);

    r = Math.max(r - 10, 0);
    g = Math.max(g - 10, 0);
    b = Math.max(b - 10, 0);

    let darkenedHex = "#" + r.toString(16) + g.toString(16) + b.toString(16);

    // ...bodyPart[partIndex]
    setBodyPart({
      ...bodyPart,
      [partIndex]: { index: bodyPart[partIndex].index, color: e.target.value },
    });
  };

  const handleSavePicture = (e) => {
    console.log(bodyPart);
  };

  return (
    <div className={styles.custom_page}>
      <div className={styles.page_tiltles}>
        <h1>CREATE YOUR OWN PILOT !</h1>
        <h2>THE PILOT WILL BE LINKED WITH ADDRESS !</h2>
      </div>
      <div className={styles.create_container}>
        <div className={styles.charac_container}>
          <img id={styles.body} src="../../../assets/Body.png" />
          <div
            id={styles.head}
            dangerouslySetInnerHTML={{
              __html: `${heads[bodyPart["head"].index](
                bodyPart["head"].color
              )}`,
            }}
          ></div>
          {bodyPart["hair"].index > 0 && (
            <div
              id={styles.hair}
              dangerouslySetInnerHTML={{
                __html: `${hairs[bodyPart["hair"].index](
                  bodyPart["hair"].color
                )}`,
              }}
            ></div>
          )}
          {bodyPart["nose"].index > 0 && (
            <div
              id={styles.nose}
              dangerouslySetInnerHTML={{
                __html: `${noses[bodyPart["nose"].index](
                  bodyPart["nose"].color
                )}`,
              }}
            ></div>
          )}
          {bodyPart["eyes"].index > 0 && (
            <div
              id={styles.eyes}
              dangerouslySetInnerHTML={{
                __html: `${eyes[bodyPart["eyes"].index](
                  bodyPart["eyes"].color
                )}`,
              }}
            ></div>
          )}
          {bodyPart["mouth"].index > 0 && (
            <div
              id={styles.month}
              dangerouslySetInnerHTML={{
                __html: `${mouths[bodyPart["mouth"].index](
                  bodyPart["mouth"].color
                )}`,
              }}
            ></div>
          )}
          {bodyPart["beard"].index > 0 && (
            <div
              id={styles.beard}
              dangerouslySetInnerHTML={{
                __html: `${beards[bodyPart["beard"].index](
                  bodyPart["beard"].color
                )}`,
              }}
            ></div>
          )}
        </div>
        <div className={styles.custom_inputs}>
          <div className={styles.change_part_index}>
            <img
              onClick={handlePartChange}
              alt="up_arrow"
              id={styles.up_arrow}
              src={`../../../assets/RightArrow.png`}
            />
            <p>{partIndex.toLocaleUpperCase()}</p>
            <img
              onClick={handlePartChange}
              alt="down_arrow"
              id={styles.down_arrow}
              src={`../../../assets/RightArrow.png`}
            />
          </div>
          <div className={styles.change_index}>
            <img
              onClick={handleIndexChange}
              alt="left_arrow"
              id={styles.left_arrow}
              src={`../../../assets/LeftArrow.png`}
            />
            <p>{bodyPart[partIndex].index ? bodyPart[partIndex].index : 0}</p>
            <img
              onClick={handleIndexChange}
              alt="rigth_arrow"
              id={styles.right_arrow}
              src={`../../../assets/RightArrow.png`}
            />
          </div>
          <div className={styles.color_picker_container}>
            <input
              type="color"
              id={styles.input_color}
              name="color_picker"
              onChange={handleColorChange}
            />
            <p>PICK A COLOR</p>
          </div>
          <button onClick={handleSavePicture}>
            <p>SAVE</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
