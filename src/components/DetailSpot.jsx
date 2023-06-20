import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

import { useSpots } from "../hooks/useSpots"
import { useWeather } from "../hooks/useWeather"
import { useLocation } from "../hooks/useLocation"

import { BACKGROUND_COLORS, TEXT_COLORS } from "../constants/colors"

const Temperature = require('../../assets/openspot-images/icons8-temperature-100.png')

export const DetailSpot = () => {

  const { selectedSpot } = useSpots()
  const { weatherSpot, forecastWeather } = useWeather()
  const { distance } = useLocation()

  return (
    <View style={styles.container}>

      <View style={styles.containerCurrent}>

        <Text style={styles.currentTitle}>{`Now`}</Text>

        {
          weatherSpot !== undefined
          ? <Text style={styles.currentDescription}>
              <Image 
                style={styles.imageWeather} 
                source={{uri: `https://openweathermap.org/img/wn/${weatherSpot?.weather[0].icon}@4x.png`}}
                >
              </Image>
              {`${weatherSpot?.weather[0].main}`}
            </Text>
          : <></>
        }

        <View style={styles.temperatureContainer}>
          <Text style={styles.temperatureText}>
            <Image style={styles.imageWeather} source={Temperature}></Image>
            {`${Math.round(parseFloat(weatherSpot?.main.temp) - 273.15)} ˚`}
          </Text>
        </View>

        <View style={styles.temperatureContainer}>
          <Text style={styles.temperatureText}>
            {`${distance.toFixed(2)} km to centre of city`}
          </Text>
        </View>

      </View>

      <View style={styles.containerForecast}>

        <Text style={styles.forecastTitle}>{`Forecast next hours`}</Text>

        <ScrollView>

          <View style={styles.weatherContainer}>
            {
              forecastWeather !== undefined
              ? forecastWeather?.list.slice(0, 7).map((item) => (
                <Text style={styles.weatherDescription}>
                  {`${item?.dt_txt.substring(item?.dt_txt.length - 8, item?.dt_txt.length - 3)}`}
                  <Image 
                    style={styles.imageWeather} 
                    source={{uri: `https://openweathermap.org/img/wn/${item?.weather[0].icon}@4x.png`}}
                    >
                  </Image>
                  {`${item?.weather[0].main}`}
                </Text>
              ))
              : <></>
            }
          </View>

        </ScrollView>

      </View>

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
    padding: 10,
    backgroundColor: TEXT_COLORS.HEADER,
    elevation: 15,
    shadowColor: TEXT_COLORS.HEADER,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  containerCurrent: {
    width: '50%',
    height: '100%',
  },
  containeForecast: {
    width: '50%',
    height: '100%',
  },
  weatherContainer: {
    justifyContent: 'flex-start',
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
    color: TEXT_COLORS.BODY,
    fontSize: 12,
  },
  imageWeather: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  currentTitle: {
    color: TEXT_COLORS.BODY,
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: '600'
  },
  currentDescription: {
    color: TEXT_COLORS.BODY,
    fontSize: 14,
    fontWeight: '600'
  },
  forecastTitle: {
    alignSelf: 'flex-end',
    color: TEXT_COLORS.BODY,
    fontSize: 16,
    fontWeight: '600'
  },
  weatherDescription: {
    color: TEXT_COLORS.BODY,
    fontSize: 14,
  },
})