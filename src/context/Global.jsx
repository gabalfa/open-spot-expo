import { createContext, useId, useRef } from 'react'

import { ConstantsProvider } from "./Constants"
import { useSpotReducer } from "../reducers/spots"

export const GlobalContext = createContext()

export function GlobalProvider ({ children }) {

  const { 
    state,

    setLanguage,

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
  const scrollSpotsRef = useRef()

  return (
    <GlobalContext.Provider value={{
      ...state,

      setLanguage,

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
      scrollSpotsRef,
      mapRef, 
      
    }}>
      <ConstantsProvider>
        {children}
      </ConstantsProvider>
    </GlobalContext.Provider>
  )
}