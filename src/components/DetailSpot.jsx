import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'

import { useSpots } from "../hooks/useSpots"
import { useWeather } from "../hooks/useWeather"

import { BACKGROUND_COLORS, TEXT_COLORS } from "../constants/colors"

export const DetailSpot = () => {

  const { selectedSpot } = useSpots()
  const { weatherSpot } = useWeather()

  // console.log(weatherSpot?.weather);

  return (
    <View style={styles.container}>

      {
        weatherSpot !== undefined
        ? <>
            <Text style={styles.spotDescription}>
              {`Weather now is ${weatherSpot?.weather[0].description}`}
              
            </Text>
        
            <Text style={styles.spotTitleSports}>
            {`Temperature is ${Math.round(parseFloat(weatherSpot?.main.temp) - 273.15)} celsius grades`}
            </Text>
 {/*
            <Text style={styles.spotTitleSports}>
              {'You could training'}
            </Text>

            <Text style={styles.spotSports}>
              {selectedSpot?.sports?.join(' - ')}
            </Text> */}
          </>
      :   <></>
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
  spotSports: {
    color: TEXT_COLORS.HEADER,
    fontSize: 14,
    fontWeight: '600'
  },
  sportImage: {
    width: '100%',
    height: '60%',
    borderRadius: 10,
  },
  spotDescription: {
    color: TEXT_COLORS.HEADER,
    fontSize: 14,
    fontWeight: '600'
  },
})