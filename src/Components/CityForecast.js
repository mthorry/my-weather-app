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

  render() {
    console.log("CityForecast: ", this.state)
    const { forecast, city } = this.state

    return (
      <div className="CityForecast">
        <h2> Forecast for {city.name}</h2>
      </div>
    );
  }
}

export default CityForecast;
