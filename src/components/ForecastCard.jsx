import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

import { useConstants } from "../hooks/useConstants"
import { getURLWeatherImage } from "../hooks/useWeather"

import { TEXT_COLORS } from "../constants/colors"

export const ForecastCard = ({forecast}) => {

  const { SPOT_DETAIL } = useConstants()

  return (
    <View style={styles.container}>

      <Text style={styles.forecastTitle}>{SPOT_DETAIL.FORECAST}</Text>
      
      <ScrollView>
        {
          forecast?.list.slice(0, 7).map((item, index) => (
            <View key={index} style={styles.row}>

              <Text style={styles.weatherTime}>
                {`${item?.dt_txt.substring(item?.dt_txt.length - 8, item?.dt_txt.length - 3)}`}
              </Text>

              <Image 
                style={styles.imageWeather} 
                source={{uri: getURLWeatherImage(item?.weather[0].icon)}}
              />

              <Text style={styles.weatherDescription}>{`${item?.weather[0].description}`}</Text>

            </View>
          ))
        }
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '50%',

  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 25,
  },
  imageWeather: {
    width: 35,
    height: 35,
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
  imageTemperature: {
    width: 35,
    height: 35,
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
  weatherTime: {
    color: TEXT_COLORS.INVERTED,
    fontSize: 10,
    textAlign: 'right',
    width: 30
  },
  weatherDescription: {
    color: TEXT_COLORS.INVERTED,
    fontSize: 10,
  },
     
})