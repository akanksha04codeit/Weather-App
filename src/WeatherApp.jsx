import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 24.8,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 27,
    weather: "haze",
  });


  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App</h2>
      <SearchBox/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
