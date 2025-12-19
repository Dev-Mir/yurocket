import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import PackagePage from "./components/PackagePage";

import "./styles/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/package" element={<PackagePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
