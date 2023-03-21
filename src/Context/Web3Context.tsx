import { createContext, useEffect, useState } from "react";
import Web3 from "web3";
export const Web3Context = createContext({
  web3: {},
  walletAddress: "",
  isLoading: false,
  getData: () => {},
});

interface Web3Provider {
  children: any;
}

export const Web3ContextProvider: React.FC<Web3Provider> = ({ children }) => {
  const [web3, setWeb3] = useState<any>("");
  const [walletAddress, setWalletAddress] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
      setIsLoading(false);
    });
  };

  return (
    <Web3Context.Provider value={{ web3, walletAddress, isLoading, getData }}>
      {children}
    </Web3Context.Provider>
  );
};

export default Web3Context;
