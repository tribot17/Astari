import Web3 from "web3";
import { useEffect, useState, useContext } from "react";
import contractABI from "../../../ABI/FirstWeaponABI.json";
import styles from "./MintPage.module.scss";
import Web3Context from "../../Context/Web3Context";

const index = () => {
  const { web3, walletAddress, mintContract, isLoading, getData } =
    useContext(Web3Context);

  useEffect(() => {
    getData();
  }, []);

  const handleMint = async () => {
    if (mintContract) {
      const mint = await mintContract.methods
        .mint()
        .send({ from: walletAddress });
    }
  };

  return (
    <div className={styles.mint_page}>
      <h1>MINT YOUR FIRST WEAPON</h1>
      <div className={styles.mint_container}>
        <div className={styles.NFT_images}></div>
        <button onClick={() => handleMint()}>
          <p>MINT</p>
        </button>
      </div>
    </div>
  );
};

export default index;
