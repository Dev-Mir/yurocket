import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import PackagePage from "./components/PackagePage";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import "./styles/App.css";

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<HomePage />} />
        <Route path="/process" element={<HomePage />} />
        <Route path="/results" element={<HomePage />} />
        <Route path="/faq" element={<HomePage />} />
        <Route path="/offer" element={<HomePage />} />

        {/* <Route path="/package" element={<PackagePage />} /> */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />

        <Route path="/package" element={<PackagePage />} />
        <Route path="/package/who_for" element={<PackagePage />} />
        <Route path="/package/how" element={<PackagePage />} />
        <Route path="/package/pilot" element={<PackagePage />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
