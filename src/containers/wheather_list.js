import React, { Component } from 'react';
import {connect } from 'react-redux';
import Chart from '../components/chart'

class WheatherList extends Component {

  renderWeather(cityData) {
    if(!cityData) return

    const temps = cityData.list.map(weather => weather.main.temp);
    const humidities =cityData.list.map(weather => weather.main.humidity);
    const pressure =cityData.list.map(weather => weather.main.pressure);
    console.log('array de temparatura', temps)
    return (
      <tr key = {cityData.city.name}>
        <td>{cityData.city.name}</td>
        <td><Chart data={temps} color="orange" units="K"/></td>
        <td><Chart data={humidities} color="blue" units="hPa"/></td>
        <td><Chart data={pressure} color="green" units="%"/></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Citty</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  return {weather : state.weather}
 // return bindActionCreators({fetchWeather}, dispatch)
}

// export default connect (null, mapDispatchToProps)(Search);
export default connect (mapStateToProps)(WheatherList);