import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageTracker } from "./components/PageTracker.jsx";
import { initAnalytics } from "./lib/analytics";
import { ClaveDeSolPage } from "./pages/ClaveDeSolPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { PeitoSamboPage } from "./pages/PeitoSamboPage.jsx";
import { RaizesPage } from "./pages/RaizesPage.jsx";

import "./index.css";

initAnalytics();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <PageTracker />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/peito-sambo" element={<PeitoSamboPage />} />
          <Route path="/clave-de-sol" element={<ClaveDeSolPage />} />
          <Route path="/raizes" element={<RaizesPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
