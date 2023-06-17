import { StyleSheet, View, Text, Image, Pressable } from 'react-native'
import React from 'react'

import { useSpots } from "../hooks/useSpots"
import { useWeather } from "../hooks/useWeather"
import { useLocation } from "../hooks/useLocation"

import { BACKGROUND_COLORS, TEXT_COLORS } from "../constants/colors"

const Temperature = require('../../assets/openspot-images/icons8-temperature-100.png')
const Cloudy = require('../../assets/openspot-images/icons8-cloudy-100.png')
const BMX = require('../../assets/openspot-images/icons8-bmx-64.png')
const Skateboard = require('../../assets/openspot-images/icons8-skateboard-100.png')
const Rollerblade = require('../../assets/openspot-images/icons8-rollerblade-64-black.png')
const Scooter = require('../../assets/openspot-images/icons8-scooter-64.png')

export const DetailSpot = () => {

  const { selectedSpot } = useSpots()
  const { weatherSpot, getForecastWeather, forecastWeather } = useWeather()
  const { distance } = useLocation()

  return (
    <View style={styles.container}>

      {
        weatherSpot !== undefined
        ? <>

            <View style={styles.sportsContainer}>
              <Image style={styles.imageWeather} 
                // source={{uri: `https://openweathermap.org/img/wn/${weatherSpot?.weather[0].icon}@4x.png`}}
                source={Cloudy}
                >
                </Image>
              <Text style={styles.spotDescription}>
                {`${weatherSpot?.weather[0].main}`}
              </Text>
            </View>

            <View style={styles.sportsContainer}>
              <Image style={styles.imageSports} source={Temperature}></Image>
              <Text style={styles.spotTitleSports}>
                {`${Math.round(parseFloat(weatherSpot?.main.temp) - 273.15)} celsius ${distance} km to centre of city`}
              </Text>
            </View>

          </>
        : <></>
      }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '90%',
    height: '20%',
    borderRadius: 10,
    borderWidth: .5,
    margin: 10,
    marginTop: 0,
    padding: 20,
    backgroundColor: BACKGROUND_COLORS.BODY,
    elevation: 5,
    shadowColor: BACKGROUND_COLORS.HEADER,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  spotTitleSports: {
    color: TEXT_COLORS.HEADER,
    fontSize: 10,
  },
  sportsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    marginBottom: 5
  },
  spotSports: {
    color: TEXT_COLORS.HEADER,
    fontSize: 14,
    fontWeight: '600'
  },
  imageWeather: {
    // width: 50,
    // height: 50,
    width: 25,
    height: 25,
    marginRight: 10,
  },
  imageSports: {
    width: 25,
    height: 25,
    marginLeft: 0,
    marginRight: 10,
    // borderWidth: 1,
    // borderColor: 'black',
    // borderRadius: 20,
  },
  spotDescription: {
    color: TEXT_COLORS.HEADER,
    fontSize: 14,
    fontWeight: '600'
  },
})