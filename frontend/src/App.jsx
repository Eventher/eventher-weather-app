/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */

import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/homePage/Home";
import SuggestionsPage from "./pages/suggestionsPage/Suggestions";
import Events from "./pages/eventsPage/events";
import SignIn from "./pages/signInPage/SignIn";
import LogIn from "./pages/logInPage/LogIn";
import LandingComponent from "./components/landing-page/LandingComponent";
import CityDetails from "./pages/CityDetails/CityDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingComponent />} />
          <Route path="/home" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/suggestions" element={<SuggestionsPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/home/:id" element={<CityDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
