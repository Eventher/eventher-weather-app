/* eslint-disable no-unused-vars */
import Home from "./pages/homePage/Home";
/* eslint-disable import/no-unresolved */

import "./App.css";
import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/homePage/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
