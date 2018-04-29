import React, { Component } from 'react';
import Search from '../containers/search_bar';
import WeatherList from '../containers/wheather_list'

export default class App extends Component {
  render() {
    return (
      <div>
        <Search/>
        <WeatherList/>
      </div>
    );
  }
}
