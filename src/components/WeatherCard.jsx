import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import { useConstants } from "../hooks/useConstants"
import { getURLWeatherImage } from "../hooks/useWeather"

import { TEXT_COLORS } from "../constants/colors"

export const WeatherCard = ({ weather, isLocal, distance }) => {
  const { SPOT_DETAIL } = useConstants()
  return (
    <View style={styles.container}>

      <Text style={styles.weatherTitle}>{SPOT_DETAIL.WEATHER_NOW}</Text>

      <View style={styles.row}>

        <Image 
          style={styles.imageWeather} 
          source={{uri: getURLWeatherImage(weather?.weather[0].icon)}}
        />

        <Text style={styles.temperatureText}>
            {`${Math.round(parseFloat(weather?.main.temp) - 273.15)}°C`}
        </Text>
          
      </View>

      <View style={styles.row}>
        <Text style={styles.weatherDescription}>
          {`${weather?.weather[0].description}`}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.textDistance}>
          {
            distance === undefined
            ? <>{SPOT_DETAIL.YOUR_LOCATION}</>
            : <>
                {
                  isLocal
                  ? `${distance?.toFixed(2)} ${SPOT_DETAIL.AWAY_FROM_YOU}`
                  : `${distance?.toFixed(2)} ${SPOT_DETAIL.AWAY_FROM_CENTRE}`
                }
              </>
          }
        </Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWeather: {
    width: 45,
    height: 45,
  },
  temperatureText: {
    color: TEXT_COLORS.INVERTED,
    fontSize: 20,
  },
  imageTemperature: {
    width: 20,
    height: 20,
  },
  weatherTitle: {
    alignSelf: 'center',
    color: TEXT_COLORS.INVERTED,
    fontSize: 16,
    fontWeight: '600'
  },
  weatherDescription: {
    color: TEXT_COLORS.INVERTED,
    fontSize: 10,
    fontWeight: '600'
  },
  textDistance: {
    marginTop: 5,
    color: TEXT_COLORS.INVERTED,
    fontSize: 10,
  },
})