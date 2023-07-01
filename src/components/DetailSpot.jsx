import { StyleSheet, View, Text } from 'react-native'
import React, { lazy, Suspense } from 'react'

import { useLocation } from "../hooks/useLocation"
import { useFilters } from "../hooks/useFilters"
import { useWeather } from "../hooks/useWeather"

const WeatherCard = lazy(() => import('./WeatherCard'))
const ForecastCard = lazy(() => import('./ForecastCard'))

import { Loading } from "./Loading"

import { TEXT_COLORS } from "../constants/colors"

export default DetailSpot = () => {

  const { loadingWeather, weatherLocal, forecastWeatherLocal, weatherSpot, forecastWeatherSpot } = useWeather()
  const { currentLocation, distance, loadingLocation } = useLocation()
  const { selectedRegion, showWeather } = useFilters()

  const isLocal = (currentLocation?.region === selectedRegion)

  return (
    <View style={styles.container}>
      <Suspense fallback={<Loading />}>
        {
          showWeather
          ? 
            <>
              {
                (isLocal 
                  ? <>
                      <WeatherCard weather={weatherLocal} distance={distance} loadingLocation={loadingLocation} /> 
                      <ForecastCard forecast={forecastWeatherLocal}  />
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
      </Suspense>
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