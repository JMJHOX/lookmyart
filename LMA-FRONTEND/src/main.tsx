import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import ArtPage from "./pages/Art";
import ArtistPage from "./pages/Artist";
import ExplorePage from "./pages/Explore";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="explore" element={<ExplorePage />}></Route>
      <Route path="/explore/arts/:id" element={<ArtPage />} />
      <Route path="/explore/artist/:id" element={<ArtistPage />} />
      <Route path="contact" />
    </Routes>
  </BrowserRouter>
);
