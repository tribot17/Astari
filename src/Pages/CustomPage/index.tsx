import { useContext, useEffect, useState } from "react";
import { Web3Context } from "../../Context/Web3Context";
import axios from "axios";
import styles from "./CustomPage.module.scss";
import hairs from "../../../assets/svg/Hairs/hairs";
import heads from "../../../assets/svg/Heads/heads";
import eyes from "../../../assets/svg/Eyes/eyes";
import beards from "../../../assets/svg/Beards/beards";
import mouths from "../../../assets/svg/Mouths/mouth";
import noses from "../../../assets/svg/Noses/noses";
import ColorPalette from "./ColorPalette";
import { web3ContextInterface } from "../../../interfaces/ContextInterfaces";
import Body from "./Body";

const index = () => {
  const PART = ["head", "hair", "eyes", "nose", "mouth", "beard"];
  const [partIndex, setPartIndex] = useState<string>(PART[0]);
  const [userAddress, setUserAddress] = useState<string>();
  const [paletteIsOpen, setPaletteIsOpen] = useState<boolean>(false);
  const [isAlreadyInDataBase, setisAlreadyInDataBase] =
    useState<boolean>(false);
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
  const web3Context: any = useContext(Web3Context);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await web3Context.getData();

    setUserAddress(data.address);
    await getUserBody(data.address);
  };

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
    let endIndex: any;

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
  };

  const handleColorChange = (e: any) => {
    setBodyPart({
      ...bodyPart,
      [partIndex]: { index: bodyPart[partIndex].index, color: e.target.value },
    });
  };

  const getUserBody = async (address: string) => {
    if (address)
      await axios
        .get(`http://localhost:5000/send_character/${address}`)
        .then((res) => {
          setBodyPart(JSON.parse(res.data.user.character_specs));
          setisAlreadyInDataBase(true);
        })
        .catch((err) => console.log(err));
  };

  const handleSavePicture = async () => {
    await axios
      .post(`http://localhost:5000/send_character`, {
        address: userAddress,
        specs: bodyPart,
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.custom_page}>
      <div className={styles.page_tiltles}>
        <h1>CREATE YOUR OWN PILOT !</h1>
        <h2>THE PILOT WILL BE LINKED WITH ADDRESS !</h2>
      </div>
      <div className={styles.create_container}>
        <div className={styles.charac_container}>
          <div id={styles.body}>
            <Body hue={bodyPart["head"].color} />
          </div>
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
        <div className={styles.inputs_container}>
          <div className={styles.custom_inputs}>
            <div className={styles.index_arrow}>
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
                <p>
                  {bodyPart[partIndex].index ? bodyPart[partIndex].index : 0}
                </p>
                <img
                  onClick={handleIndexChange}
                  alt="rigth_arrow"
                  id={styles.right_arrow}
                  src={`../../../assets/RightArrow.png`}
                />
              </div>
            </div>
            <div className={styles.color_picker_container}>
              <input
                type="color"
                id={styles.input_color}
                name="color_picker"
                value={bodyPart[partIndex].color}
                onChange={handleColorChange}
              />
              <p>PICK A COLOR</p>
            </div>
            <button
              id={styles.color_palette_modal}
              onClick={() => setPaletteIsOpen(true)}
            >
              COLOR PALETTE
            </button>
          </div>
          <button id={styles.save_button} onClick={handleSavePicture}>
            <p>SAVE</p>
          </button>
        </div>
      </div>
      {paletteIsOpen && (
        <ColorPalette
          setPaletteIsOpen={setPaletteIsOpen}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          partIndex={partIndex}
        />
      )}
    </div>
  );
};

export default index;
