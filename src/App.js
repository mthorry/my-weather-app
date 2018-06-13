import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Cities from './Components/Cities'
import CityForecast from './Components/CityForecast'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/home' component={Cities} />
        <Route exact path='/forecast/:id' component={CityForecast} />
      </div>
    );
  }
}

export default App;
