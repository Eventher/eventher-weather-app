import React from "react";
import WeatherToday from "../../components/WeatherToday/WeatherToday";
import WeatherByHour from "../../components/WeatherByHour/WeatherByHour";
import Weather5days from "../../components/Weather5days/Weather5days";

import "./home.css";

export default function Home() {
  return (
    <div className="cards">
      <input type="text" />
      <div>
        <WeatherToday />
      </div>
      <div>
        <WeatherByHour />
      </div>
      <div>
        <Weather5days />
      </div>
    </div>
  );
}
