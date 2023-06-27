import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

import { useLocation } from "../hooks/useLocation"
import { useFilters } from "../hooks/useFilters"
import { useWeather } from "../hooks/useWeather"

import { WeatherCard } from "./WeatherCard"
import { ForecastCard } from "./ForecastCard"
import { Loading } from "./Loading"

import { TEXT_COLORS } from "../constants/colors"

export const DetailSpot = () => {

  const { loadingWeather, weatherLocal, forecastWeatherLocal, weatherSpot, forecastWeatherSpot } = useWeather()
  const { currentLocation, distance, loadingLocation } = useLocation()
  const { selectedRegion, showWeather } = useFilters()

  const isLocal = (currentLocation?.region === selectedRegion)

  return (
    <View style={styles.container}>
      {
        loadingWeather
        ? <Loading />
        : <>
            {
              showWeather
              ? 
                <>
                  {
                    (isLocal 
                      ? <>
                          <WeatherCard weather={weatherLocal} isLocal={isLocal} distance={distance} loadingLocation={loadingLocation} /> 
                          <ForecastCard forecast={forecastWeatherLocal} isLocal={isLocal}  />
                        </>
                      : <>
                          <WeatherCard weather={weatherSpot} distance={distance} loadingLocation={loadingLocation} /> 
                          <ForecastCard forecast={forecastWeatherSpot} />
                        </>
                    )
                  }
                </>
              : <Text>{'Stadistics'}</Text>
            }
          </>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '90%',
    height: '20%',
    borderRadius: 10,
    marginTop: 20,
    padding: 5,
    backgroundColor: TEXT_COLORS.TERTIARY,
  },
})