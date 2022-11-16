/* eslint-disable no-bitwise */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import React from "react";
import "./Weather5DaysCard.css";
import seeMore from "../../../assets/attach-outline.svg";
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
import North from "../../../assets/icons_ipma_weather/north.png";
import NorthWest from "../../../assets/icons_ipma_weather/n_west.png";
import West from "../../../assets/icons_ipma_weather/west.png";
import SouthWest from "../../../assets/icons_ipma_weather/s_west.png";
import South from "../../../assets/icons_ipma_weather/south.png";
import SouthEast from "../../../assets/icons_ipma_weather/s_east.png";
import East from "../../../assets/icons_ipma_weather/east.png";
import NorthEast from "../../../assets/icons_ipma_weather/n_east.png";

export default function Weather5DaysCard({ weather5Day }) {
  const {
    precipitaProb,
    tMin,
    tMax,
    classWindSpeed,
    predWindDir,
    idWeatherType,
    forecastDate,
  } = weather5Day;

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
          {idWeatherType === 0 && <p>No weather information available</p>}
          {idWeatherType === 1 && (
            <img src={WT1} alt="Clear sky" className="weather-icon5" />
          )}
          {idWeatherType === 2 && (
            <img src={WT2} alt="Partly cloudy" className="weather-icon5" />
          )}
          {idWeatherType === 3 && (
            <img src={WT3} alt="Sunny intervals" className="weather-icon5" />
          )}
          {idWeatherType === 4 && (
            <img src={WT4} alt="Cloudy" className="weather-icon5" />
          )}
          {idWeatherType === 5 && (
            <img
              src={WT5}
              alt="Cloudy (High clouds)"
              className="weather-icon5"
            />
          )}
          {idWeatherType === 6 && (
            <img src={WT6} alt="Showers/rain" className="weather-icon5" />
          )}
          {idWeatherType === 7 && (
            <img src={WT7} alt="Light showers/rain" className="weather-icon5" />
          )}
          {idWeatherType === 8 && (
            <img src={WT8} alt="Heavy showers/rain" className="weather-icon5" />
          )}
          {idWeatherType === 9 && (
            <img src={WT9} alt="Rain/showers" className="weather-icon5" />
          )}
          {idWeatherType === 10 && (
            <img src={WT10} alt="Light rain" className="weather-icon5" />
          )}
          {idWeatherType === 11 && (
            <img
              src={WT11}
              alt="Heavy rain/showers"
              className="weather-icon5"
            />
          )}
          {idWeatherType === 12 && (
            <img src={WT12} alt="Intermittent rain" className="weather-icon5" />
          )}
          {idWeatherType === 13 && (
            <img
              src={WT13}
              alt="Intermittent ligth rain"
              className="weather-icon5"
            />
          )}
          {idWeatherType === 14 && (
            <img
              src={WT14}
              alt="Intermittent heavy rain"
              className="weather-icon5"
            />
          )}
          {idWeatherType === 15 && (
            <img src={WT15} alt="Drizzle" className="weather-icon5" />
          )}
          {idWeatherType === 16 && (
            <img src={WT16} alt="Mist" className="weather-icon5" />
          )}
          {idWeatherType === 17 && (
            <img src={WT17} alt="Fog" className="weather-icon5" />
          )}
          {idWeatherType === 18 && (
            <img src={WT18} alt="Snow" className="weather-icon5" />
          )}
          {idWeatherType === 19 && (
            <img src={WT19} alt="Thunderstorms" className="weather-icon5" />
          )}
          {idWeatherType === 20 && (
            <img
              src={WT20}
              alt="Showers and thunderstorms"
              className="weather-icon5"
            />
          )}
          {idWeatherType === 21 && (
            <img src={WT21} alt="Hail" className="weather-icon5" />
          )}
          {idWeatherType === 22 && (
            <img src={WT22} alt="Frost" className="weather-icon5" />
          )}
          {idWeatherType === 23 && (
            <img
              src={WT23}
              alt="Rain and thunderstorms"
              className="weather-icon5"
            />
          )}
          {idWeatherType === 24 && (
            <img src={WT24} alt="Convective clouds" className="weather-icon5" />
          )}
          {idWeatherType === 25 && (
            <img src={WT25} alt="Partly cloudy" className="weather-icon5" />
          )}
          {idWeatherType === 26 && (
            <img src={WT26} alt="Fog" className="weather-icon5" />
          )}
          {idWeatherType === 27 && (
            <img src={WT27} alt="Cloudy" className="weather-icon5" />
          )}
          {idWeatherType === 28 && (
            <img src={WT28} alt="Snow showers" className="weather-icon5" />
          )}
          {idWeatherType === 29 && (
            <img src={WT29} alt="Rain and snow" className="weather-icon5" />
          )}
          {idWeatherType === 30 && (
            <img src={WT30} alt="Rain and snow" className="weather-icon5" />
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
          <h5>
            {classWindSpeed <= 3 ? <p>Light breeze</p> : null}
            {(classWindSpeed > 3) & (classWindSpeed <= 5) ? (
              <p>Moderate winds</p>
            ) : null}
            {(classWindSpeed > 5) & (classWindSpeed <= 8) ? (
              <p>Strong winds</p>
            ) : null}
            {(classWindSpeed > 8) & (classWindSpeed <= 10) ? (
              <p>Storm</p>
            ) : null}
            {(classWindSpeed > 10) & (classWindSpeed <= 11) ? (
              <p>Violent storm</p>
            ) : null}
            {(classWindSpeed > 11) & (classWindSpeed <= 12) ? (
              <p>Hurricane</p>
            ) : null}
            {predWindDir === "N" ? <img src={North} alt="North" /> : null}
            {predWindDir === "S" ? <img src={South} alt="South" /> : null}
            {predWindDir === "E" ? <img src={East} alt="East" /> : null}
            {predWindDir === "W" ? <img src={West} alt="West" /> : null}
            {predWindDir === "NW" ? (
              <img src={NorthWest} alt="North West" />
            ) : null}
            {predWindDir === "NE" ? (
              <img src={NorthEast} alt="North East" />
            ) : null}
            {predWindDir === "SW" ? (
              <img src={SouthWest} alt="South West" />
            ) : null}
            {predWindDir === "SE" ? (
              <img src={SouthEast} alt="South East" />
            ) : null}
          </h5>
          <button type="button" href="#">
            <img className="seeMore" src={seeMore} alt="+" />
          </button>
        </div>
      </div>
    </div>
  );
}
