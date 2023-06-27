import { createContext, useId, useRef } from 'react'

import { useSpotReducer } from "../reducers/spots"

export const GlobalContext = createContext()

export function GlobalProvider ({ children }) {

  const { 
    state,

    setLoadingLocation,
    setLoadingWeather,

    requestForegroundPermissionsAsync,

    setCurrentLocation,

    setCountries,
    setRegions,
    setSpots,

    setVisibleModalFilter,

    setSelectedCountry,
    setSelectedRegion,
    setSelectedSpot,
    
    setOrigin,
    setDestination,
    setDistance,

    setShowWeather,
    setWeatherLocal, 
    setForecastWeatherLocal,
    setWeatherSpot,
    setForecastWeatherSpot,

  } = useSpotReducer()

  const mapId = useId()
  const mapRef = useRef()
  const scrollCountriesRef = useRef()

  return (
    <GlobalContext.Provider value={{
      ...state,

      setLoadingLocation,
      setLoadingWeather,

      requestForegroundPermissionsAsync,

      setCurrentLocation,

      setCountries,
      setRegions,
      setSpots,

      setVisibleModalFilter,

      setSelectedCountry,
      setSelectedRegion,
      setSelectedSpot,

      setOrigin,
      setDestination,
      setDistance,

      setShowWeather,
      setWeatherLocal, 
      setForecastWeatherLocal,
      setWeatherSpot,
      setForecastWeatherSpot,

      mapId, 
      scrollCountriesRef,
      mapRef, 
      
    }}
    >
      {children}
    </GlobalContext.Provider>
  )
}