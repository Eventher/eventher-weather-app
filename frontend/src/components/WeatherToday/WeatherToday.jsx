/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import WeatherTodayCard from "./WeatherTodayCard/WeatherTodayCard";

function WeatherToday() {
  // weather5Days: State that receives and displays the weather stats for the next five days =====#
  const [weatherToday, setWeatherToday] = useState([]);
  // =====#

  // districts: State that will be used to map all the districts, to
  // get each  district Id(glogalIdLocal) and Name(local) =====#
  const [districts, setDistricts] = useState([]);
  // =====#

  // search: State that will handle the search value on input =====#
  const [search, setSearch] = useState("");
  // =====#

  // city: State to use the city/district name (local) as title on rendering/displaying the component =====#
  const [city, setCity] = useState("Lisboa");
  // =====#

  const resultDist =
    districts &&
    districts
      .filter((district) =>
        district.local
          .toLocaleLowerCase()
          .startsWith(search.toLocaleLowerCase())
      )
      .map((district) => district);

  // Fetching the weather to display, by the district Id (globalIdLocal) =====#
  const fetchWeatherToday = () => {
    setWeatherToday([]);
    //  =====#

    // Match the search value with each mapped district name (local) =====#
    setCity(resultDist[0]?.local);
    // =====#

    // If there's a match, show the fetched result by district id(globalIdLocal) =====#
    if (resultDist[0]?.globalIdLocal) {
      axios
        .get(
          `https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${resultDist[0]?.globalIdLocal}.json`
        )
        .then((res) => setWeatherToday(res.data.data))
        .catch((err) => console.log(err));
      // =====#

      // If not, show Lisbon district as default =====#
    } else {
      axios
        .get(
          `https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/1110600.json`
        )
        .then((res) => setWeatherToday(res.data.data))
        .catch((err) => console.log(err));
    }
  };
  //  =====#

  // As the search state changes, the fetchWeather5Days function gets updated, thus, so it's result =====#
  useEffect(() => {
    fetchWeatherToday();
  }, [search]);
  //  =====#

  // Fetching all districts to get, latter, their id(globalIdLocal) and name(local) =====#
  const fecthDistricts = () => {
    axios
      .get("http://api.ipma.pt/open-data/distrits-islands.json")
      .then((res) => setDistricts(res.data.data))
      .catch((err) => console.log(err));
  };
  // =====#

  // Run fetchDistricts function as the page loads (component renders) =====#
  useEffect(() => {
    fecthDistricts();
  }, []);
  // =====#

  // Function to update the search state, to handle search results =====#
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
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
