import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MintPage from "./Pages/MintPage";
import CustomPage from "./Pages/CustomPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mint" element={<MintPage />} />
      <Route path="/custom" element={<CustomPage />} />
    </Routes>
  );
};

export default Router;
