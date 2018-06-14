import React, { Component } from 'react';
import CityWeatherItem from './CityWeatherItem'

class CitiesContainer extends Component {

  state = {
    cities: [],
    loading: true,
    searchValue: ''
  }

  componentDidMount = () => {
    this.fetchWeather()
  }

  fetchWeather = () => {
    fetch('https://api.openweathermap.org/data/2.5/group?id=5128581,5391959,5368361,4887398,5809844&units=imperial&APPID=0a514753e7884428ac7964736fbbb643')
    .then( res => res.json())
    .then( json => {
      this.setState({
        cities: json.list,
        loading: false
      })
    })
  }

  renderCityWeatherItems = () => {
    return this.state.cities.map( city => <CityWeatherItem city={city} key={city.id} /> )
  }

  handleChange = (e) => {
    this.setState({searchValue: e.target.value});
  }

  handleErrors = res => {
    if (!res.ok) {
      throw Error(res.statusText);
    }
    return res;
  }

  handleCitySearch = (e) => {
    e.preventDefault()
    let formattedSearchValue = this.state.searchValue.split(" ").join("+")
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${formattedSearchValue}&APPID=0a514753e7884428ac7964736fbbb643`)
    .then( res => this.handleErrors(res))
    .then( res => res.json())
    .then( json => {
      this.setState({
        cities: [...this.state.cities, json],
        loading: false,
        searchValue: ''
      })
    })
    .catch( err => {
        alert(err);
    });
  }

  render() {
    return (
      <div className="CitiesContainer">
        <h1>Current Weather</h1>
        <div className='cities-container'>
        { this.state.loading ? <div>FETCHING DATA</div> : null }
        { this.renderCityWeatherItems() }
        </div>
        <br/>
        <div className='search'>

            { this.state.loading ? null : <form
              onSubmit={this.handleCitySearch}
              >
              <input
              type="text"
              name="name"
              value={this.state.searchValue}
              onChange={this.handleChange}
              placeholder="Search for city by name"
              />
              <input
              type="submit"
              value="Add City"
              />
              </form> }

        </div>
      </div>
    );
  }
}

export default CitiesContainer;
