/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-restricted-syntax */
import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import WeatherContext from "../../contexts/WeatherContext";
import Weather5DaysCard from "./Weather5DaysCard/Weather5DaysCard";

function Weather5Days() {
  const {
    weather5Days,
    search,
    resultDist,
    fetchWeather5Days,
    fetchDistricts,
  } = useContext(WeatherContext);

  // As the search state changes, the fetchWeather5Days function gets updated, thus, so it's result =====#
  useEffect(() => {
    fetchWeather5Days();
  }, [search]);
  //  =====#

  // Run fetchDistricts function as the page loads (component renders) =====#
  useEffect(() => {
    fetchDistricts();
  }, []);
  // =====#

  // Return fase =====#
  return (
    <>
      <div>
        <h2>See weather for the next 5 days!</h2>
      </div>
      <Link
        className="today-link"
        to={
          search === ""
            ? "/home/1110600"
            : `/home/${resultDist[0]?.globalIdLocal}`
        }
      >
        {weather5Days
          ? weather5Days.map((weather5Day, index) => (
              <Weather5DaysCard
                weather5Day={weather5Day}
                index={index}
                key={index}
              />
            ))
          : null}
      </Link>
    </>
  );
}

export default Weather5Days;
