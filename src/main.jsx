import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import WhatsAppButton from "./components/WhatsAppButton";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <WhatsAppButton />
  </StrictMode>
);
