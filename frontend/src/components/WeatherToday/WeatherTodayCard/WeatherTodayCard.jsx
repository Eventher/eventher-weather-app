/* eslint-disable react/prop-types */
import React from "react";
import "./WeatherTodayCard.css";
import seeMore from "../../../assets/attach-outline.svg";

// import {weatherIcons} from "../../../assets/icons_ipma_weather"

export default function WeatherTodayCard({ weatherDay, index }) {
  const { precipitaProb, tMin, tMax, predWindDir, idWeatherType } = weatherDay;
  // eslint-disable-next-line no-restricted-syntax
  console.log(idWeatherType);

  return (
    <div className="weather5Days_cardWrapper">
      <div className="weather5Days_card">
        <div className="weather5Days_cardCol_1">
          <div>
            <h4>Dia: {index + 1}</h4>
          </div>
          <img src="" alt="Imagem" />
        </div>
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
  );
}
