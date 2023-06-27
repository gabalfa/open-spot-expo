import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

import { useLocation } from "../hooks/useLocation"
import { useFilters } from "../hooks/useFilters"
import { useWeather } from "../hooks/useWeather"

import { WeatherCard } from "./WeatherCard"
import { ForecastCard } from "./ForecastCard";

import { BACKGROUND_COLORS, TEXT_COLORS } from "../constants/colors"

export const DetailSpot = () => {

  const { loadingWeather, weatherLocal, forecastWeatherLocal, weatherSpot, forecastWeatherSpot } = useWeather()
  const { currentLocation, distance } = useLocation()
  const { selectedCountry, showWeather } = useFilters()

  const isLocal = ((currentLocation?.country) === (selectedCountry))

  return (
    <View style={styles.container}>

      {/* {
        showWeather
        ?
          <>
            {
              loadingWeather
              ? <Text>{'Loading'}</Text>
              : (isLocal ? <WeatherCard weather={weatherLocal} /> : <WeatherCard weather={weatherSpot} />)
            }

            {
              loadingWeather
                ? <Text>{'Loading'}</Text>
                : (isLocal ? <ForecastCard forecast={forecastWeatherLocal} /> : <ForecastCard forecast={forecastWeatherSpot} />)
            }
          </>
        : <Text>{'Stadistics'}</Text>
        
      } */}

      {
        showWeather
        ? 
          <>
            {
              (isLocal 
                ? <>
                    <WeatherCard weather={weatherLocal} /> 
                    <ForecastCard forecast={forecastWeatherLocal} />
                  </>
                : <>
                    <WeatherCard weather={weatherSpot} /> 
                    <ForecastCard forecast={forecastWeatherSpot} />
                  </>
              )
            }
          </>
        : <Text>{'Stadistics'}</Text>
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