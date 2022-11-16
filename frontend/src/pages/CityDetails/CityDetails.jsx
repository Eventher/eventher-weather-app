/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { BsFillCloudRainFill, BsFillSunFill } from "react-icons/bs";
import "./city-details.css";
import EventContext from "../../contexts/EventContext";
import WeatherContext from "../../contexts/WeatherContext";

function CityDetails() {
  const { id } = useParams();
  const [weatherCity, setWeatherCity] = useState("");
  const [eventsFilter, setEventsFilter] = useState([]);
  const [eventsExits, setEventsExits] = useState(true);

  // eslint-disable-next-line no-unused-vars
  const { events } = useContext(EventContext);
  const { city } = useContext(WeatherContext);

  const filterWeather = () => {
    switch (true) {
      case weatherCity[0]?.precipitaProb <= 50:
        setEventsFilter(
          events.filter((event) => event.outdoor === 1 && event.city === city)
        );
        setEventsExits(true);
        break;
      default:
        setEventsFilter(
          events.filter((event) => event.outdoor === 0 && event.city === city)
        );
        setEventsExits(false);
    }
  };
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
    filterWeather();
  }, []);

  return (
    <div className="city-details">
      {city ? (
        <h2 className="city-title">{city}</h2>
      ) : (
        <h2 className="city-title">Lisboa</h2>
      )}
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
      <div className="eventsFlex">
        {events && eventsFilter
          ? eventsFilter?.map((event) => (
              <div>
                <div className="eventCard" key={event.id}>
                  <h3 className="eventTitle">{event.title}</h3>
                  <img className="image" src={event.image} alt={event.title} />
                  <p className="eventDesc">
                    {event.description} activity in {event.city}
                  </p>
                  {eventsExits ? (
                    <p className="outOrIn">
                      This is a <span className="bold">outdoor</span> event!
                    </p>
                  ) : (
                    <p className="outOrIn">
                      This is a <span className="bold">indoor</span> event!
                    </p>
                  )}
                  <a
                    href={event.url}
                    target="_blank"
                    className="eventLink"
                    rel="noreferrer"
                  >
                    Click for more information...
                  </a>
                </div>
              </div>
            ))
          : null}
      </div>
      <h4 className="suggestEvents">
        We are working on adding more interesting events.
        <br /> If you are wiling to suggest an event{" "}
        <Link to="/suggestions" className="link">
          click here
        </Link>
        !
      </h4>
    </div>
  );
}

export default CityDetails;
