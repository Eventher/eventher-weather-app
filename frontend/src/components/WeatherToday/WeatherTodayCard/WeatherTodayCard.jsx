/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import "./WeatherTodayCard.css";
import { BsFillCloudRainFill, BsFillSunFill } from "react-icons/bs";
import seeMore from "../../../assets/attach-outline.svg";
import WeatherContext from "../../../contexts/WeatherContext";

export default function WeatherTodayCard() {
  const { weatherToday } = useContext(WeatherContext);

  const {
    precipitaProb,
    tMin,
    tMax,
    predWindDir,
    idWeatherType,
    forecastDate,
  } = weatherToday[0];
  // eslint-disable-next-line no-restricted-syntax
  console.log(idWeatherType);

  return (
    <div className="weather5Days_cardWrapper">
      <div className="weather-today">
        <div className="weather5Days_cardCol_1 image-temp">
          <h4 className="today-date">{forecastDate}</h4>
          {precipitaProb >= 50 ? (
            <BsFillCloudRainFill className="weather-icon rain-icon" />
          ) : (
            <BsFillSunFill className="weather-icon sun-icon" />
          )}
        </div>
        <div className="flex-container">
          <div className="weather5Days_cardCol_2">
            <pre>
              <h2 className="tempMin">{tMin}</h2>
            </pre>
            <pre>
              <h2 className="tempMax"> / {tMax}</h2>
            </pre>
          </div>
          <div className="weather5Days_cardCol_3">
            <h4>Rain Probability:</h4> <h2>{precipitaProb}%</h2>
          </div>
          <div className="weather5Days_cardCol_4">
            <h5>{predWindDir}</h5>
            <button type="button">
              <img className="seeMore" src={seeMore} alt="+" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
