/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import React from "react";
import "./Weather5DaysCard.css";
import { BsFillCloudRainFill, BsFillSunFill } from "react-icons/bs";
// import {weatherIcons} from "../../../assets/icons_ipma_weather"
export default function Weather5DaysCard({ weather5Day }) {
  const {
    precipitaProb,
    tMin,
    tMax,
    predWindDir,
    idWeatherType,
    forecastDate,
  } = weather5Day;
  // eslint-disable-next-line no-restricted-syntax
  console.log(idWeatherType);

  // function precipitaClassValCalc() {
  //   if (precipitaProb <= 0 && precipitaProb < 25) {
  //     precipitaClassVal === 0;
  //   } else if (precipitaProb >= 25 && precipitaProb < 50) {
  //     precipitaClassVal === 1;
  //   } else if (precipitaProb >= 50 && precipitaProb < 75) {
  //     precipitaClassVal === 2;
  //   } else {
  //     precipitaClassVal === 3;
  //   }
  //   console.log("outro" + precipitaClassVal);
  //   return precipitaClassVal;
  // }
  // console.log("este aqui" + precipitaClassVal);

  // useEffect(() => {
  //   precipitaClassValCalc(precipitaClassVal);
  // }, []);

  return (
    <div className="weather5Days_cardWrapper">
      <div className="weather5Days_card">
        <div className="weather5Days_cardCol_1">
          <div>
            <h4>{forecastDate}</h4>
          </div>
          {precipitaProb >= 50 ? (
            <BsFillCloudRainFill className="weather-icon rain-icon" />
          ) : (
            <BsFillSunFill className="weather-icon sun-icon" />
          )}
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
          <h4>Rain Probability:</h4>{" "}
          <h2>
            {/* className={`precipitaClass_${precipitaClassVal}`}> */}
            {precipitaProb}%
          </h2>
        </div>
        <div className="weather5Days_cardCol_4">
          <h5>{predWindDir}</h5>
        </div>
      </div>
    </div>
  );
}
