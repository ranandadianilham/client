import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./css/style.css";
import { BrowserRouter as Router } from "react-router-dom";
import MainContext from "./hook/MainContext.ts";
import ContextProvider from "./hook/ContextProvider.tsx";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ContextProvider>
      <Router>
        <App />
      </Router>
    </ContextProvider>
  </StrictMode>
);
