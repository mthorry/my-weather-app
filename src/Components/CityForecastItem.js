import React, { Component } from 'react';

class CityForecastItem extends Component {

	renderHourlyForecasts = () => {
		const { forecasts } = this.props
		return forecasts.map( forecast => {
			let time = (new Date(forecast.dt_txt)).getHours()
			return <div className='forecast-item' key={time}>
				<h3>{this.props.timeModifier(time)}</h3>
				<p>{Math.round(forecast.main.temp)}˚F and {forecast.weather[0].main}</p>
        		<p>{forecast.weather[0].description}</p>
        		<img src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`} alt={forecast.weather[0].description} />
        	</div>
		})
	}

	render() {
		const { forecasts } = this.props
		let forecastDate
		forecasts.length ? forecastDate = new Date(forecasts[0].dt_txt) : null

		return (
		  <div className="CityForecastItem">
		    <h2>{forecastDate ? `June ${forecastDate.getDate()}` : null} </h2>
		    <div className='forecast-container'>
		    {this.renderHourlyForecasts()}
		    </div>
		  </div>
		);
	}
}

export default CityForecastItem;