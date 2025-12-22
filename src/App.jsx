import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import PackagePage from "./components/PackagePage";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import "./styles/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<HomePage />} />
        <Route path="/process" element={<HomePage />} />
        <Route path="/results" element={<HomePage />} />
        <Route path="/faq" element={<HomePage />} />

        {/* IMPORTANT:
   You already use /package for PackagePage.
   So use /pricing (or /offer) for the "package" SECTION on homepage. */}
        <Route path="/offer" element={<HomePage />} />

        <Route path="/package" element={<PackagePage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
