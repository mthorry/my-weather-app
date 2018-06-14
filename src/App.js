import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import CitiesContainer from './Components/CitiesContainer'
import CityForecastsContainer from './Components/CityForecastsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/home' component={CitiesContainer} />
        <Route exact path='/forecast/:id' component={CityForecastsContainer} />
      </div>
    );
  }
}

export default App;
