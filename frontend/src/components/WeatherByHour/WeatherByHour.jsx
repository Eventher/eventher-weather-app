import React from "react";
import WeatherByHoursCard from "./WeatherByHoursCard/WeatherByHoursCard";
import "./WeatherByHoursCard/WeatherByHoursCard.css";

export default function WeatherByHour() {
  return (
    <>
      <div className="separate">The weather divided by hours of the day</div>
      <WeatherByHoursCard />
    </>
  );
}
