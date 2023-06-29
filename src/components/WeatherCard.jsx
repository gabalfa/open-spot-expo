import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import { useConstants } from "../hooks/useConstants"
import { getURLWeatherImage } from "../hooks/useWeather"

import { TEXT_COLORS } from "../constants/colors"

const imgTemperature = require('../../assets/openspot-images/icons8-temperature-64.png')

export const WeatherCard = ({ weather, isLocal, distance }) => {
  const { SPOT_DETAIL } = useConstants()
  return (
    <View style={styles.container}>

      <Text style={styles.forecastTitle}>{SPOT_DETAIL.WEATHER_NOW}</Text>

      <View style={styles.row}>

        <Image 
          style={styles.imageWeather} 
          source={{uri: getURLWeatherImage(weather?.weather[0].icon)}}
        />

        <Text style={styles.temperatureText}>
            {`${Math.round(parseFloat(weather?.main.temp) - 273.15)}°C`}
        </Text>

        {/* <Image style={styles.imageTemperature} source={imgTemperature}></Image> */}
          
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
  containerCurrent: {
    justifyContent: 'space-between',
    width: '50%',
    height: '100%',
  },
  weatherContainer: {
    justifyContent: 'space-between',
    width: '100%',
  },
  temperatureContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    height: 40,
  },
  temperatureText: {
    color: TEXT_COLORS.INVERTED,
    fontSize: 20,
  },

  imageTemperature: {
    width: 20,
    height: 20,
  },
  currentTitle: {
    color: TEXT_COLORS.INVERTED,
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: '600'
  },
  forecastTitle: {
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