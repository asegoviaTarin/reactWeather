import axios from 'axios';

const API_WEATHER = '83011e1fbb4983cd89484531aa3db707';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_WEATHER;
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  console.log('Request', request)
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}