/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./city-details.css";
import EventContext from "../../../contexts/EventContext";
import WT1 from "../../../assets/icons_ipma_weather/w_ic_d_01anim.svg";
import WT2 from "../../../assets/icons_ipma_weather/w_ic_d_02anim.svg";
import WT3 from "../../../assets/icons_ipma_weather/w_ic_d_03anim.svg";
import WT4 from "../../../assets/icons_ipma_weather/w_ic_d_04anim.svg";
import WT5 from "../../../assets/icons_ipma_weather/w_ic_d_05anim.svg";
import WT6 from "../../../assets/icons_ipma_weather/w_ic_d_06anim.svg";
import WT7 from "../../../assets/icons_ipma_weather/w_ic_d_07anim.svg";
import WT8 from "../../../assets/icons_ipma_weather/w_ic_d_08anim.svg";
import WT9 from "../../../assets/icons_ipma_weather/w_ic_d_09anim.svg";
import WT10 from "../../../assets/icons_ipma_weather/w_ic_d_10anim.svg";
import WT11 from "../../../assets/icons_ipma_weather/w_ic_d_11anim.svg";
import WT12 from "../../../assets/icons_ipma_weather/w_ic_d_12anim.svg";
import WT13 from "../../../assets/icons_ipma_weather/w_ic_d_13anim.svg";
import WT14 from "../../../assets/icons_ipma_weather/w_ic_d_14anim.svg";
import WT15 from "../../../assets/icons_ipma_weather/w_ic_d_15anim.svg";
import WT16 from "../../../assets/icons_ipma_weather/w_ic_d_16anim.svg";
import WT17 from "../../../assets/icons_ipma_weather/w_ic_d_17anim.svg";
import WT18 from "../../../assets/icons_ipma_weather/w_ic_d_18anim.svg";
import WT19 from "../../../assets/icons_ipma_weather/w_ic_d_19anim.svg";
import WT20 from "../../../assets/icons_ipma_weather/w_ic_d_20anim.svg";
import WT21 from "../../../assets/icons_ipma_weather/w_ic_d_21anim.svg";
import WT22 from "../../../assets/icons_ipma_weather/w_ic_d_22anim.svg";
import WT23 from "../../../assets/icons_ipma_weather/w_ic_d_23anim.svg";
import WT24 from "../../../assets/icons_ipma_weather/w_ic_d_24anim.svg";
import WT25 from "../../../assets/icons_ipma_weather/w_ic_d_25anim.svg";
import WT26 from "../../../assets/icons_ipma_weather/w_ic_d_26anim.svg";
import WT27 from "../../../assets/icons_ipma_weather/w_ic_d_27anim.svg";
import WT28 from "../../../assets/icons_ipma_weather/w_ic_d_28anim.svg";
import WT29 from "../../../assets/icons_ipma_weather/w_ic_d_29anim.svg";
import WT30 from "../../../assets/icons_ipma_weather/w_ic_d_30anim.svg";

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
                  {day.idWeatherType === 0 && (
                    <p>No weather information available</p>
                  )}
                  {day.idWeatherType === 1 && (
                    <img src={WT1} alt="Clear sky" className="weather-icon" />
                  )}
                  {day.idWeatherType === 2 && (
                    <img
                      src={WT2}
                      alt="Partly cloudy"
                      className="weather-icon"
                    />
                  )}
                  {day.idWeatherType === 3 && (
                    <img
                      src={WT3}
                      alt="Sunny intervals"
                      className="weather-icon"
                    />
                  )}
                  {day.idWeatherType === 4 && (
                    <img src={WT4} alt="Cloudy" className="weather-icon" />
                  )}
                  {day.idWeatherType === 5 && (
                    <img
                      src={WT5}
                      alt="Cloudy (High clouds)"
                      className="weather-icon"
                    />
                  )}
                  {day.idWeatherType === 6 && (
                    <img
                      src={WT6}
                      alt="Showers/rain"
                      className="weather-icon"
                    />
                  )}
                  {day.idWeatherType === 7 && (
                    <img
                      src={WT7}
                      alt="Light showers/rain"
                      className="weather-icon"
                    />
                  )}
                  {day.idWeatherType === 8 && (
                    <img
                      src={WT8}
                      alt="Heavy showers/rain"
                      className="weather-icon"
                    />
                  )}
                  {day.idWeatherType === 9 && (
                    <img
                      src={WT9}
                      alt="Rain/showers"
                      className="weather-icon"
                    />
                  )}
                  {day.idWeatherType === 10 && (
                    <img src={WT10} alt="Light rain" className="weather-icon" />
                  )}
                  {day.idWeatherType === 11 && (
                    <img
                      src={WT11}
                      alt="Heavy rain/showers"
                      className="weather-icon"
                    />
                  )}
                  {day.idWeatherType === 12 && (
                    <img
                      src={WT12}
                      alt="Intermittent rain"
                      className="weather-icon"
                    />
                  )}
                  {day.idWeatherType === 13 && (
                    <img
                      src={WT13}
                      alt="Intermittent ligth rain"
                      className="weather-icon"
                    />
                  )}
                  {day.idWeatherType === 14 && (
                    <img
                      src={WT14}
                      alt="Intermittent heavy rain"
                      className="weather-icon"
                    />
                  )}
                  {day.idWeatherType === 15 && (
                    <img src={WT15} alt="Drizzle" className="weather-icon" />
                  )}
                  {day.idWeatherType === 16 && (
                    <img src={WT16} alt="Mist" className="weather-icon" />
                  )}
                  {day.idWeatherType === 17 && (
                    <img src={WT17} alt="Fog" className="weather-icon" />
                  )}
                  {day.idWeatherType === 18 && (
                    <img src={WT18} alt="Snow" className="weather-icon" />
                  )}
                  {day.idWeatherType === 19 && (
                    <img
                      src={WT19}
                      alt="Thunderstorms"
                      className="weather-icon"
                    />
                  )}
                  {day.idWeatherType === 20 && (
                    <img
                      src={WT20}
                      alt="Showers and thunderstorms"
                      className="weather-icon"
                    />
                  )}
                  {day.idWeatherType === 21 && (
                    <img src={WT21} alt="Hail" className="weather-icon" />
                  )}
                  {day.idWeatherType === 22 && (
                    <img src={WT22} alt="Frost" className="weather-icon" />
                  )}
                  {day.idWeatherType === 23 && (
                    <img
                      src={WT23}
                      alt="Rain and thunderstorms"
                      className="weather-icon"
                    />
                  )}
                  {day.idWeatherType === 24 && (
                    <img
                      src={WT24}
                      alt="Convective clouds"
                      className="weather-icon"
                    />
                  )}
                  {day.idWeatherType === 25 && (
                    <img
                      src={WT25}
                      alt="Partly cloudy"
                      className="weather-icon"
                    />
                  )}
                  {day.idWeatherType === 26 && (
                    <img src={WT26} alt="Fog" className="weather-icon" />
                  )}
                  {day.idWeatherType === 27 && (
                    <img src={WT27} alt="Cloudy" className="weather-icon" />
                  )}
                  {day.idWeatherType === 28 && (
                    <img
                      src={WT28}
                      alt="Snow showers"
                      className="weather-icon"
                    />
                  )}
                  {day.idWeatherType === 29 && (
                    <img
                      src={WT29}
                      alt="Rain and snow"
                      className="weather-icon"
                    />
                  )}
                  {day.idWeatherType === 30 && (
                    <img
                      src={WT30}
                      alt="Rain and snow"
                      className="weather-icon"
                    />
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
