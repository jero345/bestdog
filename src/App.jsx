// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Services from "./views/Services";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
}

export default App;
