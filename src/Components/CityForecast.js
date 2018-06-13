import React, { Component } from 'react';

class CityForecast extends Component {

  state = {
    forecast: '',
    city: ''
  }

  componentDidMount = () => {
    this.fetchForecast()
  }

  fetchForecast = () => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${this.props.match.params.id}&units=imperial&APPID=0a514753e7884428ac7964736fbbb643`)
    .then( res => res.json())
    .then( json => {
      this.setState({
        forecast: json.list,
        city: json.city
      })
    })
  }

  timeModifier = (time) => {
    if (time > 12) {
      return `${time-12} pm`
    } else {
      return `${time} am`
    }
  }

  renderForecastItem = () => {
    console.log('renderForecastItem')
    return this.state.forecast.map( forecast => {
      let d = new Date(`${forecast.dt_txt}`)
      return <div key={forecast.dt_txt} className='forecast-item'>
        <p><strong>{d.getMonth()+1}/{d.getUTCDate()} at {this.timeModifier(d.getUTCHours())}:</strong> {Math.round(forecast.main.temp)}˚F and {forecast.weather[0].main}</p>
        <p>{forecast.weather[0].description}</p>
        <img src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`} alt={forecast.weather[0].description} />
        <br/>
        </div>
    })
  }

  render() {
    console.log("CityForecast: ", this.state)
    const { forecast, city } = this.state

    return (
      <div className="CityForecast">
        <h2> Forecast for {city.name}</h2>
        <br/>
        <div className='forecast-container'>
          {this.state.city.name ? this.renderForecastItem() : null}
        </div>
      </div>
    );
  }
}

export default CityForecast;
