import React from 'react';
import { Link } from 'react-router-dom'

const CityForecastWeatherItem = ({city}) => {
  console.log(city)
  return (
    <div className="CityForecastWeatherItem">
      <h3>{Math.round(city.main.temp)}˚F & {city.weather[0].main}</h3>
      <img src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`} alt={city.weather[0].description} /><br/>
      <p><strong>Currently:</strong> {city.weather[0].description}</p>
      <p><strong>High:</strong> {Math.round(city.main.temp_max)}˚F</p>
      <p><strong>Low:</strong> {Math.round(city.main.temp_min)}˚F</p>
      <p><strong>Pressure:</strong> {city.main.pressure} mb</p>
      <p><strong>Humidity:</strong> {city.main.humidity}%</p>
      <p><strong>Cloud Cover:</strong> {city.clouds.all}%</p>
      <p><strong>Wind:</strong> {Math.round(city.wind.speed)} mph</p>
    </div>
  );
}

export default CityForecastWeatherItem