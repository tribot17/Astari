import { createContext, useEffect, useState } from "react";
import Web3 from "web3";
import contractABI from "../../ABI/FirstWeaponABI.json";
interface Web3ContextData {
  web3: any;
  walletAddress: string | undefined;
  mintContract: any;
  isLoading: boolean;
  getData: () => Promise<any>;
}

interface Web3Provider {
  children: any;
}

export const Web3Context = createContext<Web3ContextData>({
  web3: {},
  walletAddress: undefined,
  mintContract: {},
  isLoading: false,
  getData: async () => {},
});

export const Web3ContextProvider: React.FC<Web3Provider> = ({ children }) => {
  const [web3, setWeb3] = useState<any>("");
  const [walletAddress, setWalletAddress] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [mintContract, setMintContract] = useState<any>();

  const getData = async () => {
    return new Promise(async (res, rej) => {
      setIsLoading(true);
      const web3Instance = new Web3(Web3.givenProvider);
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          res({ web3Instance, address: accounts[0] });
          setWalletAddress(accounts[0]);
        } catch (error) {
          rej(error);
          console.log("Error connecting...");
        }
      } else {
        window.open("");
        alert("Meta Mask not detected");
      }

      setWeb3(web3Instance);
      setMintContract(
        new web3Instance.eth.Contract(
          contractABI,
          "0xD2310118F25997b21B724B8262aaAf3d51521CdE"
        )
      );
      setIsLoading(false);
    });
  };

  return (
    <Web3Context.Provider
      value={{ web3, walletAddress, mintContract, isLoading, getData }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export default Web3Context;
