/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */

import React from "react";
import { Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./contexts/User/UserContext";
import { EventContextProvider } from "./contexts/EventContext";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/homePage/Home";
import SuggestionsPage from "./pages/suggestionsPage/Suggestions";
import EventsList from "./components/EventsList/EventsList";
import SignIn from "./pages/signInPage/SignIn";
import LogIn from "./pages/logInPage/LogIn";
import LandingComponent from "./components/landing-page/LandingComponent";
import CityDetails from "./pages/CityDetails/CityDetails";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <UserContextProvider>
          <EventContextProvider>
            <Routes>
              <Route path="/" element={<LandingComponent />} />
              <Route path="/home" element={<Home />} />
              <Route path="/events" element={<EventsList />} />
              <Route path="/suggestions" element={<SuggestionsPage />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/home/:id" element={<CityDetails />} />
            </Routes>
          </EventContextProvider>
        </UserContextProvider>
      </main>
      <Footer />
    </div>
  );
}

export default App;
