import "./assets/css/index.css";
import App from "./App.jsx";
import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import {BrowserRouter} from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
