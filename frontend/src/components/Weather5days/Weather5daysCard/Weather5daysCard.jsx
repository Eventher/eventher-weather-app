/* eslint-disable react/prop-types */
import React from "react";
import "./Weather5DaysCard.css";

export default function Weather5DaysCard({ weather5Day, index }) {
  const { precipitaProb, tMin, tMax, predWindDir } = weather5Day;

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
          <button type="button"> See more </button>
        </div>
      </div>
    </div>
  );
}
