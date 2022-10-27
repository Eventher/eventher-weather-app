/* eslint-disable react/prop-types */
import React from "react";
import "./Weather5daysCard.css";

export default function Weather5daysCard({ weather5Day, index }) {
  const { precipitaProb, tMin, tMax, predWindDir, globalIdLocal } = weather5Day;

  return (
    <div>
      <div>Dia: {index + 1}</div>
      <h5>{precipitaProb}</h5>
      <h5>{tMin}</h5>
      <h5>{tMax}</h5>
      <h5>{predWindDir}</h5>
      <h5>{globalIdLocal}</h5>
    </div>
  );
}
