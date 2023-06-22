import { useContext, useEffect } from 'react'

import { GlobalContext } from '../context/Global'

import { API_KEY_WEATHER } from '@env'

export function useWeather () {

  const { 
    currentLocation,
    destination,
    weatherLocal, setWeatherLocal,
    forecastWeatherLocal, setForecastWeatherLocal,
    weatherSpot, setWeatherSpot,
    forecastWeatherSpot, setForecastWeatherSpot,
  } = useContext(GlobalContext)

  useEffect(() => {
    
    if (currentLocation !== undefined) {

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&appid=${API_KEY_WEATHER}`)
      .then((response) => response.json())
      .then((json) => json)
      .then((data) => setWeatherLocal(data))
      .catch()

      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&appid=${API_KEY_WEATHER}`)
      .then((response) => response.json())
      .then((json) => json)
      .then((data) => setForecastWeatherLocal(data))
      .catch()

    }

  }, [currentLocation])

  useEffect(() => {

    if (destination !== undefined) {

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${destination?.latitude}&lon=${destination?.longitude}&appid=${API_KEY_WEATHER}`)
      .then((response) => response.json())
      .then((json) => json)
      .then((data) => setWeatherSpot(data))
      .catch()

      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${destination?.latitude}&lon=${destination?.longitude}&appid=${API_KEY_WEATHER}`)
      .then((response) => response.json())
      .then((json) => json)
      .then((data) => setForecastWeatherSpot(data))
      .catch()

    }

  }, [destination])

  return {
    weatherLocal, forecastWeatherLocal,
    weatherSpot, forecastWeatherSpot
  }
}