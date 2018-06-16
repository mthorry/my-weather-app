import React from 'react';
import {ComposedChart, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Area} from 'recharts'

const CityForecastItem = ({forecasts, timeModifier}) => {
	let data = []

	const renderHourlyForecasts = () => {
		return forecasts.map( forecast => {
			let time = (new Date(forecast.dt_txt)).getHours()
			data.push({time: timeModifier(time), temp: Math.round(forecast.main.temp), clouds: forecast.clouds.all, humidity: forecast.main.humidity, pressure: Math.round(forecast.main.pressure)})

			return <div className='forecast-item' key={time}>
				<h3>{timeModifier(time)}</h3>
				<p>{Math.round(forecast.main.temp)}˚F and {forecast.weather[0].main}</p>
        		<p>{forecast.weather[0].description}</p>
      			{ forecast.rain ? (forecast.rain['3h'] ? <p>{(forecast.rain['3h']).toFixed(2)} mm rain</p> : null ) : null }
        		<img src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`} alt={forecast.weather[0].description} />
      		</div>
		})
	}

	const renderHourlyGraphs = () => {

	}

	let forecastDate
	forecasts.length ? forecastDate = new Date(forecasts[0].dt_txt) : null

	return (
	  <div className="CityForecastItem">
	    <h2>{forecastDate ? `June ${forecastDate.getDate()}` : null}</h2>
      <div className='carousel-container'>
	    <div className='forecast-container'>
	    	{renderHourlyForecasts()}
      </div>
      </div>
      <div className='graph-container'>
	    	{ forecasts.length > 2 ? <ComposedChart width={600} height={300} data={data}>
				<XAxis dataKey="time"/>
		        <YAxis
		        	yAxisId="left"
		        	label={{ value: 'temp (˚F) / clouds (%)', angle: -90, position: 'insideBottomLeft' }}
		        />
		        <YAxis
		        	yAxisId="right"
		        	orientation="right"
		        	domain={[1000, 1040]}
		        	label={{ value: 'pressure (millibars)', angle: 90, position: 'insideBottomRight' }}
		        />
				<Tooltip content={<CustomTooltip/>} />
				<Legend />
				<Line
					type="monotone"
					dataKey="temp"
					yAxisId="left"
					stroke="#1995AD"
				/>
				<Line
					type="monotone"
					dataKey="pressure"
					yAxisId="right"
					stroke="#A1D6E2"
				/>
				<Area
					type="monotone"
					dataKey="clouds"
					yAxisId="left"
					stroke="#BCBABE"
					fill="#F2F2F3"
				/>
			</ComposedChart> : null }
	    </div>
	  </div>
	);
}


export default CityForecastItem;

const CustomTooltip = (props) => {
    const { active, payload, label } = props;

    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label"><strong>{label}</strong></p>
          <p className="temp">{`Temperature: ${payload[0].value}˚F`}</p>
          <p className="pressure">{`Air Pressure: ${payload[1].value} mb`}</p>
          <p className="clouds">{`Cloud Cover: ${payload[2].value}%`}</p>
        </div>
      );
    }

    return null;
  }
