//bafybeiegnc2kfwl4e254u7ljdl77yavrhxsvu7e7csnz3vj37m4pztdkfe.ipfs.dweb.link/1.png
import Web3 from "web3";
import React, { useEffect, useState } from "react";
import contractABI from "../../../ABI/FirstWeaponABI.json";
import styles from "./MintPage.module.scss";

const index = () => {
  const [web3, setWeb3] = useState<any>("");
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [contract, setContract] = useState<any>("");

  useEffect(() => {
    let web3 = new Web3(Web3.givenProvider);
    setWeb3(web3);
    let contract = new web3.eth.Contract(
      contractABI,
      "0xD2310118F25997b21B724B8262aaAf3d51521CdE"
    );

    setContract(contract);
  }, []);

  const seeContract = async () => {
    // console.log(await contract.methods.name().call());

    console.log(
      await contract.methods
        .balanceOf("0xF5444A4BEdbEb1FC30574D4C0565788ec00AA1f0", 1)
        .call()
    );
  };

  const handleConnect = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log("Error connecting...");
      }
    } else {
      window.open("");
      alert("Meta Mask not detected");
    }
  };

  const handleMint = async () => {
    const mint = await contract.methods.mint().send({ from: walletAddress });

    console.log(mint);
  };

  return (
    <div className={styles.mint_page}>
      {/* <button onClick={() => handleConnect()}>connect</button> */}
      {/* <button onClick={() => seeContract()}>See contract</button> */}
      {/* <button onClick={() => handleMint()}>Mint</button> */}
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
