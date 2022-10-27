import React from "react";
import WeatherToday from "../../components/WeatherToday/WeatherToday";
import WeatherByHour from "../../components/WeatherByHour/WeatherByHour";
import Weather5days from "../../components/Weather5days/Weather5days";

import "./home.css";
import Footer from "../../components/footer/footer";
import WeatherList from "../../components/WeatherList/WeatherList";

function Home() {
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
export default Home;
