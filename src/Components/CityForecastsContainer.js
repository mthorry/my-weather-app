import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import CityForecastItem from './CityForecastItem'
import CityWeatherItem from './CityWeatherItem'

class CityForecastsContainer extends Component {

  state = {
    forecasts: [],
    city: '',
    loading: true
  }

  componentDidMount = () => {
    this.fetchForecast()
  }

  fetchForecast = () => {
    let today = (new Date()).getUTCDate()
    fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${this.props.match.params.id}&units=imperial&APPID=0a514753e7884428ac7964736fbbb643`)
    .then( res => res.json())
    .then( json => {
      let city = this.props.cities.filter( city => city.name == json.city.name)[0]
      if (!city) {city = json.city}

      let arr = []
      arr.push(json.list.filter( forecast => (new Date(`${forecast.dt_txt}`).getDate()) === today))
      arr.push(json.list.filter( forecast => (new Date(`${forecast.dt_txt}`).getDate()) === today+1))
      arr.push(json.list.filter( forecast => (new Date(`${forecast.dt_txt}`).getDate()) === today+2))
      arr.push(json.list.filter( forecast => (new Date(`${forecast.dt_txt}`).getDate()) === today+3))
      arr.push(json.list.filter( forecast => (new Date(`${forecast.dt_txt}`).getDate()) === today+4))
      arr.push(json.list.filter( forecast => (new Date(`${forecast.dt_txt}`).getDate()) === today+5))

      this.setState({
        forecasts: arr,
        city: city,
        loading: false
      })
    })
  }

  timeModifier = (time) => {
    if (time > 12) {
      return `${time-12} pm`
    } else if (time === 0) {
      return "12 am"
    }else if (time === 12) {
      return "12 pm"
    } else {
      return `${time} am`
    }
  }

  renderForecastItem = () => {
    const {forecasts} = this.state
    if (forecasts.length){
        return forecasts.map( f => {
          return <CityForecastItem key={forecasts.indexOf(f)} forecasts={f} timeModifier={this.timeModifier}/>
        })
      }
    }

  render() {
    const { city, loading } = this.state
      console.log(city)
    const style = {
      border: '0',
      height: '75vh',
      width: "75vw"
    }

    return (
      <div className="CityForecastsContainer">
        <h2>{city.name} 5 Day Forecast </h2>
        <br/>
      { loading ? <div>LOADING</div> : <div>
        <div className='forecast-titles'>
        <h3>Current Radar</h3><h3>Current Weather</h3>
        </div>
        <div className='forecast-header'>
        <iframe src={`https://www.rainviewer.com/map.html?loc=${city.coord.lat},${city.coord.lon},7&oFa=0&oC=0&oU=0&oCUB=1&oCS=1&oF=0&oAP=0&rmt=4`}  frameborder="0" style={style} allowfullscreen></iframe>
        <CityWeatherItem city={city} />
        </div>
        <br/>
        <Link to='/home'>Back</Link>
        <div className='forecast-container'>
          {this.state.city.name ? this.renderForecastItem() : null}
        </div></div> }
      </div>
    );
  }
}

export default CityForecastsContainer;
