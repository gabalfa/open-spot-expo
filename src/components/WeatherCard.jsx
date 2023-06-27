import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import { TEXT_COLORS } from "../constants/colors"

const imgTemperature = require('../../assets/openspot-images/icons8-temperature-64.png')

export const WeatherCard = ({weather, isLocal, distance}) => {
    return (
      <View style={styles.container}>

        <Text style={styles.forecastTitle}>{`Now`}</Text>

          <View style={styles.row}>

            <Image 
              style={styles.imageWeather} 
              source={{uri: `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`}}
            />

            <Text style={styles.temperatureText}>
                {`${Math.round(parseFloat(weather?.main.temp) - 273.15)}°C`}
            </Text>

            <Image style={styles.imageTemperature} source={imgTemperature}></Image>
              
          </View>

          <View style={styles.row}>
            <Text style={styles.weatherDescription}>
              {`${weather?.weather[0].description}`}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.textDistance}>
              {
                isLocal
                ? `${distance?.toFixed(2)} km away from you`
                : `${distance?.toFixed(2)} km to centre of city`
              }
            </Text>
          </View>

      </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    imageWeather: {
        width: 40,
        height: 40,
    },
    containerCurrent: {
        justifyContent: 'space-between',
        width: '50%',
        height: '100%',
      },
      weatherContainer: {
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 5,
      },
      temperatureContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        height: 40,
        marginBottom: 5,
      },
      temperatureText: {
        color: TEXT_COLORS.INVERTED,
        fontSize: 20,
      },

      imageTemperature: {
        width: 30,
        height: 30,
      },
      currentTitle: {
        color: TEXT_COLORS.INVERTED,
        alignSelf: 'flex-start',
        fontSize: 16,
        fontWeight: '600'
      },
      forecastTitle: {
        alignSelf: 'flex-start',
        color: TEXT_COLORS.INVERTED,
        fontSize: 16,
        fontWeight: '600'
      },
      weatherDescription: {
        color: TEXT_COLORS.INVERTED,
        fontSize: 12,
        fontWeight: '600'
      },
      textDistance: {
        marginTop: 5,
        color: TEXT_COLORS.INVERTED,
        fontSize: 12,
      },
})