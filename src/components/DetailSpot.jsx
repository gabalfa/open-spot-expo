import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

import { useLocation } from "../hooks/useLocation"
import { useFilters } from "../hooks/useFilters"
import { useWeather } from "../hooks/useWeather"

import { WeatherCard } from "./WeatherCard"
import { ForecastCard } from "./ForecastCard";

import { TEXT_COLORS } from "../constants/colors"

export const DetailSpot = () => {

  const { loadingWeather, weatherLocal, forecastWeatherLocal, weatherSpot, forecastWeatherSpot } = useWeather()
  const { currentLocation, distance } = useLocation()
  const { selectedRegion, showWeather } = useFilters()

  const isLocal = (currentLocation?.region === selectedRegion)

  return (
    <View style={styles.container}>

      {
        loadingWeather
        ? <Text>{'Loading'}</Text>
        : <>
            {
              showWeather
              ? 
                <>
                  {
                    (isLocal 
                      ? <>
                          <WeatherCard weather={weatherLocal} isLocal={isLocal} distance={distance} /> 
                          <ForecastCard forecast={forecastWeatherLocal} isLocal={isLocal}  />
                        </>
                      : <>
                          <WeatherCard weather={weatherSpot} distance={distance} /> 
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
    padding: 10,
    backgroundColor: TEXT_COLORS.TERTIARY,
  },
})