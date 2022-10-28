/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */

import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/homePage/Home";
import Suggestions from "./pages/suggestionsPage/Suggestions";
import Events from "./pages/eventsPage/events";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/suggestions" element={<Suggestions />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
