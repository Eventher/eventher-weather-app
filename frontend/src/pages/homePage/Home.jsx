import React from "react";
import Header from "../../components/header/header";
import "./home.css";
import Footer from "../../components/footer/footer";
import WeatherList from "../../components/WeatherList/WeatherList";

export default function Home() {
function Home() {
  return (
    <div>
      <Header />
      <WeatherList />
      <Footer />
    </div>
  );
}

export default Home;
