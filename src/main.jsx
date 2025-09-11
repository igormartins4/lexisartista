import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage.jsx";
import { PeitoSamboPage } from "./pages/PeitoSamboPage.jsx";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import "./index.css";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "lexis-artista-site.firebaseapp.com",
  projectId: "lexis-artista-site",
  storageBucket: "lexis-artista-site.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/peito-sambo" element={<PeitoSamboPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
