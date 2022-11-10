/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CityDetails() {
  const { id } = useParams();
  const [cities, setCities] = useState("");

  const getCities = () => {
    axios
      .get(
        `https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${id}.json`
      )
      .then((res) => setCities(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCities();
  }, []);

  return (
    <div>
      <h4 className="today-date">{cities[0].forecastDate}</h4>
      <h4 className="today-date">{cities[0].precipitaProb}%</h4>
      <h4 className="today-date">
        {cities[0].tMin}-{cities[0].tMax}
      </h4>
    </div>
  );
}

export default CityDetails;
