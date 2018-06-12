import React, { Component } from 'react';

class City extends Component {
//http://openweathermap.org/img/w/{city.weather.0.icon}.png
  render() {
    const {city} = this.props
    console.log(city)
    return (
      <div className="City">
      <h3>{(city.name).toUpperCase()}</h3>
      <h4>{Math.round(city.main.temp)}˚F & {city.weather[0].main}</h4>
      <p><strong>Currently:</strong> {city.weather[0].description}</p>
      <p><strong>High:</strong> {Math.round(city.main.temp_max)}˚F</p>
      <p><strong>Low:</strong> {Math.round(city.main.temp_min)}˚F</p>
      <p><strong>Wind:</strong> {Math.round(city.wind.speed)} mph</p>
      <img src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`} alt={city.weather[0].description} />
      </div>
    );
  }
}

export default City;
