import React from 'react';
import { Link } from 'react-router-dom'

const CityWeatherItem = ({city}) => {
  return (
    <div className="CityWeatherItem">
      <h3>{(city.name).toUpperCase()}</h3>
      <h4>{Math.round(city.main.temp)}˚F & {city.weather[0].main}</h4>
      <img src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`} alt={city.weather[0].description} /><br/>
      <p><strong>Currently:</strong> {city.weather[0].description}</p>
      <p><strong>High:</strong> {Math.round(city.main.temp_max)}˚F</p>
      <p><strong>Low:</strong> {Math.round(city.main.temp_min)}˚F</p>
      <p><strong>Wind:</strong> {Math.round(city.wind.speed)} mph</p>
      <Link to={`/forecast/${city.id}`}>5 Day Forecast</Link>
    </div>
  );
}

export default CityWeatherItem