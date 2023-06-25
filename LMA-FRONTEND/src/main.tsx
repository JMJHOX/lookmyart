import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import ArtPage from "./pages/Art";
import ArtistPage from "./pages/Artist";
import ExplorePage from "./pages/Explore";
import LoginPage from "./pages/Login";
import ProfilePage from "./pages/Profile";
import RegisterPage from "./pages/Register";
import SubmitPage from "./pages/Submit";
import { client } from "./services/apollo/apollo-client";
import { store } from "./services/apollo/store/store";
import LookForArtistsPage from "./pages/LookForArtists";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="explore" element={<ExplorePage />}></Route>
          <Route path="search/artist" element={<LookForArtistsPage />}></Route>
          <Route path="submit" element={<SubmitPage />}></Route>
          <Route path="/explore/arts/:id" element={<ArtPage />} />
          <Route path="/explore/artist/:id" element={<ArtistPage />} />
          <Route path="contact" />
        </Routes>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>
);
