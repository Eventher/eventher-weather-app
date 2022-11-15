/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-restricted-syntax */
import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import WeatherContext from "../../contexts/WeatherContext";
import WeatherTodayCard from "./WeatherTodayCard/WeatherTodayCard";

function WeatherToday() {
  const {
    weatherToday,
    search,
    city,
    resultDist,
    fetchWeatherToday,
    fetchDistricts,
    handleSearch,
  } = useContext(WeatherContext);

  // As the search state changes, the fetchWeather5Days function gets updated, thus, so it's result =====#
  useEffect(() => {
    fetchWeatherToday();
  }, [search]);
  //  =====#

  // Run fetchDistricts function as the page loads (component renders) =====#
  useEffect(() => {
    fetchDistricts();
  }, []);
  // =====#

  // Return fase =====#
  return (
    <div className="weather-today-wrapper">
      <div>
        <h2>See weather for today!</h2>
      </div>
      <input type="search" value={search} onChange={(e) => handleSearch(e)} />
      <h3>{city || "Lisboa"}</h3>
      <Link
        className="today-link"
        to={
          search === ""
            ? "/home/1110600"
            : `/home/${resultDist[0]?.globalIdLocal}`
        }
      >
        {weatherToday[0] ? (
          <WeatherTodayCard
            weatherDay={weatherToday[0]}
            index={weatherToday[0]}
            key={weatherToday[0]}
          />
        ) : null}
      </Link>
    </div>
  );
}

export default WeatherToday;
