import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import Router from "./Router";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { Web3ContextProvider } from "./Context/Web3Context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Web3ContextProvider>
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    </Web3ContextProvider>
  </React.StrictMode>
);
