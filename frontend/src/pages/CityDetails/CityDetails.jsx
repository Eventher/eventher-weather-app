/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CityDetails() {
  const { id } = useParams();
  const [cities, setCities] = useState();
  const getCities = () => {
    axios
      .get(
        `https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${id}.json`
      )
      .then((res) => setCities(res.data.data))
      .catch((err) => console.log(err));
  };
  const { name } = cities;
  useEffect(() => {
    getCities();
  }, [id]);
  return <div>{name} Details</div>;
}

export default CityDetails;
