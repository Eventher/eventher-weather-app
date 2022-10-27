/* eslint-disable react/no-array-index-key */
/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather5DaysCard from "./Weather5DaysCard/Weather5DaysCard";

function Weather5Days() {
  // weather5Days: State that receives and displays the weather stats for the next five days =====#
  const [weather5Days, setWeather5Days] = useState([]);
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

  // Fetching the weather to display, by the district Id (globalIdLocal) =====#
  const fetchWeather5Days = () => {
    setWeather5Days([]);
    //  =====#

    // Match the search value with each mapped district name (local) =====#
    const resultDist =
      districts &&
      districts
        .filter((district) =>
          district.local
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase())
        )
        .map((district) => district);
    setCity(resultDist[0]?.local);
    // =====#

    // If there's a match, show the fetched result by district id(globalIdLocal) =====#
    if (resultDist[0]?.globalIdLocal) {
      axios
        .get(
          `https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${resultDist[0]?.globalIdLocal}.json`
        )
        .then((res) => setWeather5Days(res.data.data))
        .catch((err) => console.log(err));
      // =====#

      // If not, show Lisbon district as default =====#
    } else {
      axios
        .get(
          `https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/1110600.json`
        )
        .then((res) => setWeather5Days(res.data.data))
        .catch((err) => console.log(err));
    }
  };
  //  =====#

  // As the search state changes, the fetchWeather5Days function gets updated, thus, so it's result =====#
  useEffect(() => {
    fetchWeather5Days();
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
    <>
      <input type="search" value={search} onChange={(e) => handleSearch(e)} />
      <div>The weather for the next 5 days!</div>
      <h3>{city || "Lisboa"}</h3>
      {weather5Days
        ? weather5Days.map((weather5Day, index) => (
            <Weather5DaysCard
              weather5Day={weather5Day}
              index={index}
              key={index}
            />
          ))
        : null}
    </>
  );
}

export default Weather5Days;
