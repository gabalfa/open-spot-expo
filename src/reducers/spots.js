import { useReducer } from 'react'
import { UPDATE_GENERAL_STATE } from "../constants/actionTypes"
import { initialState } from "./initialState";

export function useSpotReducer () {
  
  const [state, dispatch] = useReducer(spotsReducer, initialState)

  const setLoadingLocation = loadingLocation => dispatch({
    type: 'SET_LOADING_LOCATION',
    payload: loadingLocation
  })

  const setLoadingWeather = loadingWeather => dispatch({
    type: 'SET_LOADING_WEATHER',
    payload: loadingWeather
  })

  const requestForegroundPermissionsAsync = foregroundPermissionsAsync => dispatch({
    type: 'REQUEST_FOREGROUND_PERMISSIONS_ASYNC',
    payload: foregroundPermissionsAsync
  })

  const setCurrentLocation = currentLocation => dispatch({
    type: 'SET_CURRENT_LOCATION',
    payload: currentLocation
  })

  const setCountries = countries => dispatch({
    type: 'SET_COUNTRIES',
    payload: countries
  })

  const setVisibleModalFilter = visibleModalFilter => dispatch({
    type: 'SET_VISIBLE_MODAL_FILTER',
    payload: visibleModalFilter
  })

  const setRegions = regions => dispatch({
    type: 'SET_REGIONS',
    payload: regions
  })

  const setSpots = spots => dispatch({
    type: 'SET_SPOTS',
    payload: spots
  })

  const setSelectedCountry = selectedCountry => dispatch({
    type: 'SET_SELECTED_COUNTRY',
    payload: selectedCountry
  })

  const setSelectedRegion = selectedRegion => dispatch({
    type: 'SET_SELECTED_REGION',
    payload: selectedRegion
  })

  const setSelectedSpot = selectedSpot => dispatch({
    type: 'SET_SELECTED_SPOT',
    payload: selectedSpot
  })

  const setOrigin = origin => dispatch({
    type: 'SET_ORIGIN',
    payload: origin
  })

  const setDestination = destination => dispatch({
    type: 'SET_DESTINATION',
    payload: destination
  })

  const setDistance = distance => dispatch({
    type: 'SET_DISTANCE',
    payload: distance
  })

  const setShowWeather = showWeather => dispatch({
    type: 'SET_SHOW_WEATHER',
    payload: showWeather
  })

  const setWeatherLocal = weatherLocal => dispatch({
    type: 'SET_WEATHER_LOCAL',
    payload: weatherLocal
  })

  const setForecastWeatherLocal = forecastWeatherLocal => dispatch({
    type: 'SET_FORECAST_WEATHER_LOCAL',
    payload: forecastWeatherLocal
  })

  const setWeatherSpot = weatherSpot => dispatch({
    type: 'SET_WEATHER_SPOT',
    payload: weatherSpot
  })

  const setForecastWeatherSpot = forecastWeatherSpot => dispatch({
    type: 'SET_FORECAST_WEATHER_SPOT',
    payload: forecastWeatherSpot
  })

  return { 
    state, 
    requestForegroundPermissionsAsync,
    setCurrentLocation,
    setSpots, setCountries, setRegions,
    setVisibleModalFilter,
    setSelectedCountry, setSelectedRegion, setSelectedSpot,
    setOrigin, setDestination, setDistance,
    setShowWeather,
    setWeatherLocal, setForecastWeatherLocal,
    setWeatherSpot, setForecastWeatherSpot,
    setLoadingLocation, setLoadingWeather
  }
}

const spotsReducer = (state, action) => {
  const { type: actionType } = action
  const updateState = UPDATE_GENERAL_STATE[actionType]
  return updateState ? updateState(state, action) : state
}