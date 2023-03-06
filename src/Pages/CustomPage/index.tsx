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
  const [index, setIndex] = useState<any>({
    head: 1,
  });
  const [partColor, setPartColor] = useState({
    head: 0,
    beard: 0,
    hair: 0,
    mouth: 0,
    nose: 0,
    eyes: 0,
  });
  const [partIndex, setPartIndex] = useState<string>(PART[0]);
  const limit: { [key: string]: number } = {
    head: 4,
    beard: 4,
    hair: 4,
    mouth: 4,
    nose: 4,
    eyes: 4,
  };

  const handleIndexChange = (part: any) => {
    const arrow: string = part.target.alt;

    if (index[partIndex]) {
      if (arrow === "left_arrow") {
        if (
          index[partIndex] > 0 &&
          index[partIndex] <= limit[partIndex] &&
          index[partIndex] - 1 !== 0
        )
          setIndex({ ...index, [partIndex]: index[partIndex] - 1 });
        else setIndex({ ...index, [partIndex]: limit[partIndex] });
      } else {
        if (index[partIndex] > 0 && index[partIndex] < limit[partIndex])
          setIndex({ ...index, [partIndex]: index[partIndex] + 1 });
        else setIndex({ ...index, [partIndex]: 1 });
      }
    } else setIndex({ ...index, [partIndex]: 1 });
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
      if (arrayIndex - 1 > 0) {
        setPartIndex(PART[arrayIndex - 1]);
        endIndex = PART[arrayIndex - 1];
      } else {
        setPartIndex(PART[PART.length - 1]);
        endIndex = PART[PART.length - 1];
      }
    }

    if (index[endIndex] === undefined) {
      setIndex({ ...index, [index[endIndex]]: 1 });
    }
  };

  const handleColorChange = (e) => {
    const color: string = e.target.value;
    const red = parseInt(color.substring(1, 3), 16);
    const green = parseInt(color.substring(3, 5), 16);
    const blue = parseInt(color.substring(5, 7), 16);

    // setHue(e.target.value);
    setPartColor({ ...partColor, [partIndex]: e.target.value });
  };

  const handleSavePicture = (e) => {
    console.log(e);
  };

  return (
    <div className={styles.custom_page}>
      <div className={styles.page_tiltles}>
        <h1>CREATE YOUR OWN PILOT !</h1>
        <h2>THE PILOT WILL BE LINKED WITH ADDRESS !</h2>
      </div>
      <div className={styles.create_container}>
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
        <div className={styles.charac_container}>
          <img id={styles.body} src="../../../assets/Body.png" />
          <div
            id={styles.head}
            dangerouslySetInnerHTML={{
              __html: `${heads[index["head"]](partColor.head)}`,
            }}
          ></div>
          {index["hair"] && (
            <div
              id={styles.hair}
              dangerouslySetInnerHTML={{
                __html: `${hairs[index["hair"]](partColor.hair)}`,
              }}
            ></div>
          )}
          {index["nose"] && (
            <div
              id={styles.nose}
              dangerouslySetInnerHTML={{
                __html: `${noses[index["nose"]](partColor.nose)}`,
              }}
            ></div>
          )}
          {index["eyes"] && (
            <div
              id={styles.eyes}
              dangerouslySetInnerHTML={{
                __html: `${eyes[index["eyes"]](partColor.eyes)}`,
              }}
            ></div>
          )}
          {index["mouth"] && (
            <div
              id={styles.month}
              dangerouslySetInnerHTML={{
                __html: `${mouths[index["mouth"]](partColor.mouth)}`,
              }}
            ></div>
          )}
          {index["beard"] && (
            <div
              id={styles.beard}
              dangerouslySetInnerHTML={{
                __html: `${beards[index["beard"]](partColor.beard)}`,
              }}
            ></div>
          )}
          <img
            onClick={handleIndexChange}
            alt="rigth_arrow"
            id={styles.right_arrow}
            src={`../../../assets/RightArrow.png`}
          />
          <img
            onClick={handleIndexChange}
            alt="left_arrow"
            id={styles.left_arrow}
            src={`../../../assets/LeftArrow.png`}
          />
        </div>

        <button onClick={handleSavePicture}>
          <p>SAVE</p>
        </button>
        <input type="color" name="color_picker" onChange={handleColorChange} />
      </div>
    </div>
  );
};

export default index;
