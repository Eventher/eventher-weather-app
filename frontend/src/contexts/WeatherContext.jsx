/* eslint-disable no-restricted-syntax */
import { createContext, useState } from "react";
import axios from "axios";

const WeatherContext = createContext();

export default WeatherContext;

// eslint-disable-next-line react/prop-types
export function WeatherContextProvider({ children }) {
  // weatherToday: State that receives and displays the weather stats for the next five days =====#
  const [weatherToday, setWeatherToday] = useState([]);
  // =====#

  // weather5Days: State that receives and displays the weather stats for the next five days =====#
  const [weather5Days, setWeather5Days] = useState([]);
  // =====#

  // districts: State that will be used to map all the districts, to
  // get each  district Id(glogalIdLocal) and Name(local) =====#
  const [districts, setDistricts] = useState([]);
  // =====#

  // search: State that will handle the search value on input =====#
  const [search, setSearch] = useState("");
  // =====#

  // city: State to use the city/district name (local) as title on rendering/displaying the component =====#
  const [city, setCity] = useState("Lisboa");

  const resultDist =
    districts &&
    districts
      .filter((district) =>
        district.local.toLowerCase().startsWith(search?.toLowerCase())
      )
      .map((district) => district);

  // Fetching the weather to display, by the district Id (globalIdLocal) =====#
  const fetchWeatherToday = () => {
    setWeatherToday([]);
    //  =====#

    // Match the search value with each mapped district name (local) =====#
    // eslint-disable-next-line eqeqeq, no-unused-expressions
    search && resultDist[0] !== undefined
      ? setCity(resultDist[0]?.local)
      : setCity("Lisboa");
    // =====#

    // If there's a match, show the fetched result by district id(globalIdLocal) =====#
    // eslint-disable-next-line no-bitwise
    if ((search !== []) & (resultDist[0] !== undefined) && search) {
      axios
        .get(
          `https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${resultDist[0]?.globalIdLocal}.json`
        )
        .then((res) => setWeatherToday(res.data.data))
        .catch((err) => console.log(err));
      // =====#

      // If not, show Lisbon district as default =====#
    } else {
      axios
        .get(
          `https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/1110600.json`
        )
        .then((res) => setWeatherToday(res.data.data))
        .catch((err) => console.log(err));
    }
  };
  //  =====#

  // Fetching the weather to display, by the district Id (globalIdLocal) =====#
  const fetchWeather5Days = () => {
    setWeather5Days([]);
    //  =====#

    // If there's a match, show the fetched result by district id(globalIdLocal) =====#
    // eslint-disable-next-line no-bitwise
    if ((search !== []) & (resultDist[0] !== undefined) && search) {
      axios
        .get(
          `https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${resultDist[0]?.globalIdLocal}.json`
        )
        .then((res) => setWeather5Days(res.data.data))
        .catch((err) => console.log(err));
      // =====#

      // If not, show Lisboa district as default =====#
    } else {
      axios
        .get(
          `https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/1110600.json`
        )
        .then((res) => setWeather5Days(res.data.data))
        .catch((err) => console.log(err));
    }
  };
  //  =====#

  // Fetching all districts to get, latter, their id(globalIdLocal) and name(local) =====#
  const fetchDistricts = () => {
    axios
      .get("http://api.ipma.pt/open-data/distrits-islands.json")
      .then((res) => setDistricts(res.data.data))
      .catch((err) => console.log(err));
  };
  // =====#

  // Function to update the search state, to handle search results =====#
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  // =====#

  return (
    <WeatherContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        weatherToday,
        weather5Days,
        search,
        city,
        resultDist,
        fetchWeatherToday,
        fetchWeather5Days,
        fetchDistricts,
        handleSearch,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
