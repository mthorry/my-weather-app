import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class City extends Component {
  render() {
    const {city} = this.props
    return (
      <div className="City">
        <h3>{(city.name).toUpperCase()}</h3>
        <h4>{Math.round(city.main.temp)}˚F & {city.weather[0].main}</h4>
        <p><strong>Currently:</strong> {city.weather[0].description}</p>
        <p><strong>High:</strong> {Math.round(city.main.temp_max)}˚F</p>
        <p><strong>Low:</strong> {Math.round(city.main.temp_min)}˚F</p>
        <p><strong>Wind:</strong> {Math.round(city.wind.speed)} mph</p>
        <Link to={`/forecast/${city.id}`}>Full Forecast</Link><br/>
        <img src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`} alt={city.weather[0].description} />
      </div>
    );
  }
}

export default City;
