/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import "./landing.css";
import { Link } from "react-router-dom";
import { TiWeatherSunny, TiWeatherDownpour } from "react-icons/ti";
import Party from "../../assets/party.jpg";
import Concert from "../../assets/concert.jpg";

function LandingComponent() {
  return (
    <div className="main-div">
      <div className="inside-div">
        <section className="first-section">
          <div className="left">
            <h1 className="text title">
              <span id="Eventher">Eventher</span> <span>is </span>
              <span>here</span> <span>!</span>
            </h1>
            <h1 className="text title">Start exploring now!</h1>
            <p className="text paragraph">
              According to the current weather, find the most interesting
              events, locations, and activities around you!
            </p>
          </div>
          <div className="right">
            <TiWeatherSunny className="sun" />
            <img className="images" src={Concert} alt="concert" />
          </div>
        </section>
        <section className="second-section">
          <div className="left">
            <TiWeatherDownpour className="rain" />
            <img className="images" src={Party} alt="party" />
          </div>
          <div className="right">
            <p className="text paragraph">
              If you want a more personalized experience,{" "}
              <Link className="links" to="/signin">
                register now
              </Link>
              ! If you have registered before, you can{" "}
              <Link className="links" to="/login">
                log in
              </Link>{" "}
              or just carry on to the{" "}
              <Link className="links" to="/home">
                home page
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LandingComponent;
