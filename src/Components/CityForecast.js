import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import CityForecastItem from './CityForecastItem'

class CityForecast extends Component {

  state = {
    forecast: [],
    city: ''
  }

  componentDidMount = () => {
    this.fetchForecast()
  }

  fetchForecast = () => {
    let today = (new Date()).getUTCDate()
    fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${this.props.match.params.id}&units=imperial&APPID=0a514753e7884428ac7964736fbbb643`)
    .then( res => res.json())
    .then( json => {
      let arr = []
      arr.push(json.list.filter( forecast => (new Date(`${forecast.dt_txt}`).getDate()) === today))
      arr.push(json.list.filter( forecast => (new Date(`${forecast.dt_txt}`).getDate()) === today+1))
      arr.push(json.list.filter( forecast => (new Date(`${forecast.dt_txt}`).getDate()) === today+2))
      arr.push(json.list.filter( forecast => (new Date(`${forecast.dt_txt}`).getDate()) === today+3))
      arr.push(json.list.filter( forecast => (new Date(`${forecast.dt_txt}`).getDate()) === today+4))
      arr.push(json.list.filter( forecast => (new Date(`${forecast.dt_txt}`).getDate()) === today+5))
      this.setState({
        forecast: arr,
        city: json.city
      })
    })
  }

  timeModifier = (time) => {
    if (time > 12) {
      return `${time-12} pm`
    } else if (time === 0) {
      return "12 am"
    }else {
      return `${time} am`
    }
  }

  renderForecastItem = () => {
    if (this.state.forecast.length){
        return this.state.forecast.map( f => {
          console.log(f)
          return <CityForecastItem forecasts={f} timeModifier={this.timeModifier}/> 
        })
      }
    }

  render() {
    const { city } = this.state

    return (
      <div className="CityForecast">
        <h2> 5 Day Forecast for {city.name}</h2>
        <br/>
        <Link to='/home'>Back</Link>
        <div className='forecast-container'>
          {this.state.city.name ? this.renderForecastItem() : null}
        </div>
      </div>
    );
  }
}

export default CityForecast;
