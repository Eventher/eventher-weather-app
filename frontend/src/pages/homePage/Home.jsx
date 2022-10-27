import React from "react";
import WeatherToday from "../../components/WeatherToday/WeatherToday";
import WeatherByHour from "../../components/WeatherByHour/WeatherByHour";
import Weather5Days from "../../components/Weather5Days/Weather5Days";

import "./home.css";
// import Footer from "../../components/footer/footer";
// import WeatherList from "../../components/WeatherList/WeatherList";

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
        <Weather5Days />
      </div>
    </div>
  );
}
export default Home;
