/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BsFillCloudRainFill, BsFillSunFill } from "react-icons/bs";
import "./city-details.css";
import EventContext from "../../contexts/EventContext";

function CityDetails() {
  const { id } = useParams();
  const [weatherCity, setWeatherCity] = useState("");
  // eslint-disable-next-line no-unused-vars
  const { events } = useContext(EventContext);

  const getWeatherCity = () => {
    axios
      .get(
        `https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${id}.json`
      )
      .then((res) => setWeatherCity(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getWeatherCity();
  }, []);

  return (
    <div className="city-details">
      {weatherCity ? (
        <div className="weather-city-details">
          <div className="first-column">
            <h4 className="today-date">{weatherCity[0]?.forecastDate}</h4>
            {weatherCity[0]?.precipitaProb >= 50 ? (
              <BsFillCloudRainFill className="rain-icon icon" />
            ) : (
              <BsFillSunFill className="sun-icon icon" />
            )}
          </div>
          <div className="second-column">
            <h4 className="weather-item">
              {weatherCity[0]?.tMin} - {weatherCity[0]?.tMax}
            </h4>
            <h4 className="weather-item">{weatherCity[0]?.precipitaProb}%</h4>
            <h4 className="weather-item">{weatherCity[0]?.predWindDir}</h4>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default CityDetails;
