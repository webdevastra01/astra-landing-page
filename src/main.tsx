import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.tsx";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </BrowserRouter>,
);
