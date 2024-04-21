import React from "react";
import { Routes, Route } from "react-router-dom";
import ProblemSelectionScreen from "./screens/ProblemSelection/ProblemSelectionScreen";
import ProblemConfirmScreen from "./screens/ProblemConfirm/ProblemConfirmationScreen.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProblemSelectionScreen />} />
      <Route path="/confirm" element={<ProblemConfirmScreen />} />
      <Route path="/select" element={<ProblemSelectionScreen />} />
    </Routes>
  );
}

export default App;
