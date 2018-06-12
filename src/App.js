import React, { Component } from 'react';
import './App.css';
import Cities from './Components/Cities'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Weather App</h1>
        <Cities />
      </div>
    );
  }
}

export default App;
