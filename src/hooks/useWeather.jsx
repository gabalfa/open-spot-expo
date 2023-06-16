import { useContext, useEffect } from 'react'

import { GlobalContext } from '../context/Global'

import { API_KEY_WEATHER } from '@env'

export function useWeather () {

  const { 
    destination,
    weatherSpot, setWeatherSpot
  } = useContext(GlobalContext)

  useEffect(() => {

    if (destination !== undefined) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${destination?.latitude}&lon=${destination?.longitude}&appid=${API_KEY_WEATHER}`)
      .then((response) => response.json())
      .then((json) => json)
      .then((data) => setWeatherSpot(data))
      .catch()
    }

  }, [destination])

  return { 
    weatherSpot
  }
}