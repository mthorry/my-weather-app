import React, { Component } from 'react';
import City from './City'

class Cities extends Component {

  state = {
    cities: []
  }

  componentDidMount = () => {
    this.fetchWeather()
  }

  fetchWeather = () => {
    fetch('https://api.openweathermap.org/data/2.5/group?id=5128581,5391959,5368361,4887398,5809844&units=imperial&APPID=0a514753e7884428ac7964736fbbb643')
    .then( res => res.json())
    .then( json => {
      console.log(json)
      this.setState({
        cities: json.list
      })
    })
  }

  renderNames = () => {
    return this.state.cities.map( city => <p key={city.id}>{city.name}</p> )
  }

  renderCityWeather = () => {
    return this.state.cities.map( city => <City city={city}/> )

  }

  render() {
    const { cities } = this.state
    let names

    return (
      <div className="Cities">
        <h1>Cities Component</h1>
        <div className='cities-container'>
        {this.renderCityWeather()}
        </div>
      </div>
    );
  }
}

export default Cities;
