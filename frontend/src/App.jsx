/* eslint-disable no-sequences */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./contexts/User/UserContext";
import { EventContextProvider } from "./contexts/EventContext";
import { WeatherContextProvider } from "./contexts/WeatherContext";
import NavbarContext from "./contexts/NavbarContext";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/homePage/Home";
import SuggestionsPage from "./pages/suggestionsPage/Suggestions";
import EventsList from "./components/EventsList/EventsList";
import SignIn from "./pages/signInPage/SignIn";
import LogIn from "./pages/logInPage/LogIn";
import LandingComponent from "./components/landing-page/LandingComponent";
import CityDetails from "./components/Weather5days/CityDetails/CityDetails";
import OutsideSuggestions from "./components/OutsideSuggestions/OutsideSuggestions";
import "./App.css";

function App() {
  const [openNav, setOpenNav] = useState(false);
  const [openUser, setOpenUser] = useState(false);

  return (
    <div className="App">
      <NavbarContext.Provider
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        value={[openNav, setOpenNav, openUser, setOpenUser]}
      >
        <Header />
        <main onClick={() => (setOpenUser(false), setOpenNav(false))}>
          <UserContextProvider>
            <EventContextProvider>
              <WeatherContextProvider>
                <Routes>
                  <Route path="/" element={<LandingComponent />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/home/:id/:date" element={<CityDetails />} />
                  <Route path="/events" element={<EventsList />} />
                  <Route path="/suggestions" element={<SuggestionsPage />} />
                  <Route
                    path="/outside-source"
                    element={<OutsideSuggestions />}
                  />
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/login" element={<LogIn />} />
                </Routes>
              </WeatherContextProvider>
            </EventContextProvider>
          </UserContextProvider>
        </main>
      </NavbarContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
