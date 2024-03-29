/* eslint-disable import/no-unresolved */
import React from "react";
import WeatherToday from "../../components/WeatherToday/WeatherToday";
/* import WeatherByHour from "../../components/WeatherByHour/WeatherByHour"; */
import Weather5Days from "../../components/Weather5Days/Weather5Days";

import "./home.css";

export default function Home() {
  return (
    <div className="cards">
      <div>
        <WeatherToday />
      </div>
      <div>
        <Weather5Days />
      </div>
      {/*   <div>
        <WeatherByHour />
      </div> */}
    </div>
  );
}
