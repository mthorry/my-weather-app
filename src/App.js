import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import CitiesContainer from './Components/CitiesContainer'
import CityForecastsContainer from './Components/CityForecastsContainer'

class App extends Component {

  state = {
	cities: [],
	loading: true
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

  handleErrors = res => {
    if (!res.ok) {
      throw Error(res.statusText);
    }
    return res;
  }

  handleCitySearch = (searchValue) => {
    let formattedSearchValue = searchValue.split(" ").join("+")
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${formattedSearchValue}&units=imperial&APPID=0a514753e7884428ac7964736fbbb643`)
    .then( res => this.handleErrors(res))
    .then( res => res.json())
    .then( json => {
      this.setState({
        cities: [...this.state.cities, json],
        loading: false,
      })
    })
    .catch( err => {
        alert(err);
    });
  }

  renderCitiesContainer = () => {
  	return <CitiesContainer
  		handleErrors={this.handleErrors}
  		handleCitySearch={this.handleCitySearch}
  		cities={this.state.cities}
  		loading={this.state.loading}
  		/>
  }

  render() {
    return (
      <div className="App">
        <Route
        exact path='/'
        render={this.renderCitiesContainer}
        />
        <Route
        exact path='/forecast/:id'
        render={(props) => <CityForecastsContainer {...props} cities={this.state.cities} /> }
        />
      </div>
    );
  }
}

export default App;
