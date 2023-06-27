import { useContext, useEffect } from 'react'

import { GlobalContext } from '../context/Global'

import { API_KEY_WEATHER } from '@env'

export function useWeather () {

  const {
    loadingWeather,
    setLoadingWeather,
    currentLocation, selectedSpot,
    destination,
    weatherLocal, setWeatherLocal,
    forecastWeatherLocal, setForecastWeatherLocal,
    weatherSpot, setWeatherSpot,
    forecastWeatherSpot, setForecastWeatherSpot,
    setShowWeather
  } = useContext(GlobalContext)

  useEffect(() => {
    
    if (currentLocation !== undefined) {

      setLoadingWeather(true)

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&appid=${API_KEY_WEATHER}`)
      .then((response) => response.json())
      .then((json) => json)
      .then((data) => setWeatherLocal(data))
      .catch(() => setLoadingWeather(false))
      .finally(() => setLoadingWeather(false))

      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&appid=${API_KEY_WEATHER}`)
      .then((response) => response.json())
      .then((json) => json)
      .then((data) => setForecastWeatherLocal(data))
      .catch(() => setLoadingWeather(false))
      .finally(() => {setShowWeather(true); setLoadingWeather(false)})

    }

  }, [currentLocation])

  useEffect(() => {

    if (destination !== undefined) {

      setLoadingWeather(true)

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${destination?.latitude}&lon=${destination?.longitude}&appid=${API_KEY_WEATHER}`)
      .then((response) => response.json())
      .then((json) => json)
      .then((data) => setWeatherSpot(data))
      .catch(() => setLoadingWeather(false))
      .finally(() => setLoadingWeather(false))

      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${destination?.latitude}&lon=${destination?.longitude}&appid=${API_KEY_WEATHER}`)
      .then((response) => response.json())
      .then((json) => json)
      .then((data) => setForecastWeatherSpot(data))
      .catch(() => setLoadingWeather(false))
      .finally(() => {setShowWeather(true); setLoadingWeather(false)})

    }

  }, [destination])

  const getSeason = () => {

    const hemisphereNorthern = ['Winter', 'Spring', 'Summer', 'Autumn'][d => Math.floor((d.getMonth() / 12 * 4)) % 4(new Date())]
    const hemisphereSouthern = ['Summer', 'Autumn', 'Winter', 'Spring'][d => Math.floor((d.getMonth() / 12 * 4)) % 4(new Date())]

    return { hemisphereNorthern, hemisphereSouthern}
  }

  return {
    loadingWeather,
    getSeason,
    weatherLocal, forecastWeatherLocal,
    weatherSpot, forecastWeatherSpot
  }
}