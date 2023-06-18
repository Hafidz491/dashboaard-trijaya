import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./page/Dashboard/Dashboard";
import AddPage from "./page/AddPage/AddPage";
import ProyekPage from "./page/ProyekPage/ProyekPage";
import FinishedPage from "./page/FinishedPage/FinishedPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/add" element={<AddPage />} />
      {/* <Route path="/work/:id" element={<DetailPage />} /> */}
      <Route path="/proyek" element={<ProyekPage />} />
      <Route path="/finished" element={<FinishedPage />} />
    </Routes>
  );
}

export default App;
