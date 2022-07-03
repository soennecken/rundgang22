import React, { useEffect, useState } from "react";

const Daten = () => {
  const [weatherData, setWeatherData] = useState([{}]);

  const apiKey = "0dfd709673adc4c3e88da5f468855345";

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=48.799832246178916&lon=9.174544167166426&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      });
  }, []);

  console.log(weatherData);

  return (
    <main className="daten">
      {/* <p>ABK Stuttgart</p>
      <p>Temperature: {Math.floor(weatherData.main.temp)}°C</p>
      <p>Feels like: {Math.floor(weatherData.main.feels_like)}°C</p>
      <p>Humidity: {Math.floor(weatherData.main.humidity)}</p>
      <p>{weatherData.weather[0].main}</p> */}
    </main>
  );
};

export default Daten;
