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
        <h2 className="weather-title">See weather for today!</h2>
      </div>
      <div className="search-container">
        <input
          className="search-bar"
          type="search"
          placeholder="Search your city here"
          value={search}
          onChange={(e) => handleSearch(e)}
        />
      </div>
      <h3 className="city">{city || "Lisboa"}</h3>
      {weatherToday[0] ? (
        <Link
          className="today-link"
          to={
            search === "" || resultDist[0] === undefined
              ? `/home/1110600/${weatherToday[0].forecastDate}`
              : `/home/${resultDist[0]?.globalIdLocal}/${weatherToday[0].forecastDate}`
          }
        >
          <WeatherTodayCard
            weatherDay={weatherToday[0]}
            index={weatherToday[0]}
            key={weatherToday[0]}
          />
        </Link>
      ) : null}
    </div>
  );
}

export default WeatherToday;
