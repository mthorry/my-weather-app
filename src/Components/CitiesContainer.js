import React, { Component } from 'react';
import CityWeatherItem from './CityWeatherItem'

class CitiesContainer extends Component {

  state = {
    searchValue: ''
  }

  renderCityWeatherItems = () => {
    return this.props.cities.map( city => <CityWeatherItem city={city} key={city.id} /> )
  }

  handleChange = (e) => {
    this.setState({ searchValue: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleCitySearch(this.state.searchValue)
    this.setState({ searchValue: '' })
  }

  render() {
    return (
      <div className="CitiesContainer">
        <h1>Current Weather</h1>
        <p>Click a city for more details or add another city by name</p>
        <div className='search'>
            { this.props.loading ? null : <form
              onSubmit={this.handleSubmit}
              >
              <input
              className="textbox"
              type="text"
              name="name"
              value={this.state.searchValue}
              onChange={this.handleChange}
              placeholder="Search for city by name, e.g. Honolulu"
              />
              <input
              className="button"
              type="submit"
              value="Add City"
              />
              </form> }
        </div>
        <div className='cities-container'>
        { this.props.loading ? <div>FETCHING DATA</div> : null }
        { this.renderCityWeatherItems() }
        </div>
        <br/>

      </div>
    );
  }
}

export default CitiesContainer;
