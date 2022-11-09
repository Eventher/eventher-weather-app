import React from "react";
/* import "./landing.css"; */
import Party from "../../assets/party.jpg";
import Festival from "../../assets/festival.jpg";
import Aquarium from "../../assets/aquarium.jpg";
import Surf from "../../assets/surf.jpg";
import Concert from "../../assets/concert.jpg";
import Museum from "../../assets/museum.jpg";

function LandingComponent() {
  return (
    <div className="main">
      <div className="image-container">
        <div>
          <img src={Party} alt="party" className="background horizontal" />
          <h1>Eventher</h1>
          <h4 className="text">
            According to the current weather, find the most interesting events,
            locations, and activities around you!
          </h4>
        </div>
        <img src={Festival} alt="festival" className="horizontal" />
        <img src={Aquarium} alt="aquarium" className="vertical" />
        <img src={Museum} alt="museum" className="vertical" />
        <img src={Surf} alt="surf" className="horizontal" />
        <img src={Concert} alt="concert" className="horizontal" />
      </div>
      <section className="colored-sections">
        <p>
          If you want a more personalized experience, register now! If you have
          registered before, you can log in or just carry on to the home page
        </p>
      </section>
    </div>
  );
}

export default LandingComponent;
