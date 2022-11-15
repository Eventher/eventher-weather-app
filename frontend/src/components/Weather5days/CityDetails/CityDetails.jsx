/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BsFillCloudRainFill, BsFillSunFill } from "react-icons/bs";
import "./city-details.css";
import EventContext from "../../../contexts/EventContext";

function CityDetails() {
  const { id, date } = useParams();
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
      {weatherCity
        ? weatherCity
            .filter((day) => day.forecastDate === date)
            .map((day) => (
              <div className="weather-city-details">
                <div className="first-column">
                  <h4 className="today-date">{day.forecastDate}</h4>
                  {day.precipitaProb >= 50 ? (
                    <BsFillCloudRainFill className="rain-icon icon" />
                  ) : (
                    <BsFillSunFill className="sun-icon icon" />
                  )}
                </div>
                <div className="second-column">
                  <h4 className="weather-item">
                    {day.tMin} - {day.tMax}
                  </h4>
                  <h4 className="weather-item">{day.precipitaProb}%</h4>
                  <h4 className="weather-item">{day.predWindDir}</h4>
                </div>
              </div>
            ))
        : null}
    </div>
  );
}

export default CityDetails;
