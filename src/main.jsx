// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Import BrowserRouter dari react-router-dom
import { BrowserRouter } from "react-router-dom"; // <--- PASTIKAN INI ADA

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Bungkus komponen <App /> dengan <BrowserRouter> */}
    <BrowserRouter>
      {" "}
      {/* <--- PASTIKAN INI ADA */}
      <App />
    </BrowserRouter>{" "}
    {/* <--- PASTIKAN INI ADA */}
  </StrictMode>
);
