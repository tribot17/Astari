import Web3 from "web3";
import { useEffect, useState } from "react";
import contractABI from "../../../ABI/FirstWeaponABI.json";
import styles from "./MintPage.module.scss";

const index = () => {
  return (
    <div className={styles.mint_page}>
      {/* <button onClick={() => handleConnect()}>connect</button> */}
      {/* <button onClick={() => seeContract()}>See contract</button> */}
      {/* <button onClick={() => handleMint()}>Mint</button> */}
      <h1>MINT YOUR FIRST WEAPON</h1>
      <div className={styles.mint_container}>
        <div className={styles.NFT_images}></div>
        {/* <button onClick={() => handleMint()}>
          <p>MINT</p>
        </button> */}
      </div>
    </div>
  );
};

export default index;
