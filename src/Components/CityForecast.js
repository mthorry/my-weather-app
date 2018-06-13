import React, { Component } from 'react';

class CityForecast extends Component {

  state = {
    forecast: {
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: ''
    },
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
      this.setState({
        forecast: {
          1: json.list.filter( forecast => (new Date(`${forecast.dt_txt}`).getUTCDate()) === today),
          2: json.list.filter( forecast => (new Date(`${forecast.dt_txt}`).getUTCDate()) === today+1),
          3: json.list.filter( forecast => (new Date(`${forecast.dt_txt}`).getUTCDate()) === today+2),
          4: json.list.filter( forecast => (new Date(`${forecast.dt_txt}`).getUTCDate()) === today+3),
          5: json.list.filter( forecast => (new Date(`${forecast.dt_txt}`).getUTCDate()) === today+4),
          6: json.list.filter( forecast => (new Date(`${forecast.dt_txt}`).getUTCDate()) === today+5)
        },
        city: json.city
      })
    })
  }

  timeModifier = (time) => {
    if (time > 12) {
      return `${time-12} pm`
    } else {
      return `${time} am`
    }
  }

  renderForecastItem = () => {
    // return this.state.forecast.map( forecast => {
      // let d = new Date(`${forecast.dt_txt}`)
    //   return <div key={forecast.dt_txt} className='forecast-item'>
    //     <p><strong>{d.getMonth()+1}/{d.getUTCDate()} at {this.timeModifier(d.getUTCHours())}:</strong> {Math.round(forecast.main.temp)}˚F and {forecast.weather[0].main}</p>
    //     <p>{forecast.weather[0].description}</p>
    //     <img src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`} alt={forecast.weather[0].description} />
    //     <br/>
    //     </div>
    // })
    let l = Object.keys(this.state.forecast).length
    console.log(this.state.forecast[1])
    if (this.state.forecast[1] !== ''){
      for (let i = 1; i < l; i++) {
        (this.state.forecast[i]).map( currentForecast => {
          let currentDate = new Date(this.state.forecast[i][0].dt_txt)
        return <div><h2>June {currentDate.getUTCDate()}</h2></div>
        })
      }
    }

    // for (let forecast in this.state.forecast) {
    //   console.log(this.state.forecast[forecast].map( currentForecast => console.log(currentForecast)))
    //   let currentDate = new Date(this.state.forecast[forecast][0].dt_txt)
    //   return <div><h2>June {currentDate.getUTCDate()}</h2>{this.state.forecast[forecast].map( currentForecast => {
    //     return <p>{this.timeModifier((new Date(currentForecast.dt_txt)).getUTCHours())}</p>
    //   })}</div>
    // }
  }

  render() {
    console.log("state: ", this.state)
    const { city } = this.state

    return (
      <div className="CityForecast">
        <h2> Forecast for {city.name}</h2>
        <br/>
        <div className='forecast-container'>
          {this.state.city.name ? this.renderForecastItem() : null}
        </div>
      </div>
    );
  }
}

export default CityForecast;
