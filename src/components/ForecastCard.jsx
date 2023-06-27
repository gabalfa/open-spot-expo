import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

import { TEXT_COLORS } from "../constants/colors"

export const ForecastCard = ({forecast}) => {

    return (
      <View style={styles.container}>

        <Text style={styles.forecastTitle}>{`Forecast`}</Text>
        
        <ScrollView>
          {
            forecast?.list.slice(0, 7).map((item, index) => (
              <View key={index} style={styles.row}>

                <Text style={styles.temperatureText}>
                  {`${item?.dt_txt.substring(item?.dt_txt.length - 8, item?.dt_txt.length - 3)}`}
                </Text>

                <Image 
                  style={styles.imageWeather} 
                  source={{uri: `https://openweathermap.org/img/wn/${item?.weather[0].icon}@4x.png`}}
                />

                <Text style={styles.temperatureText}>{`${item?.weather[0].main}`}</Text>

              </View>
            ))
          }
        </ScrollView>

      </View>

  )
}

const styles = StyleSheet.create({
    container: {

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
      temperatureText: {
        color: TEXT_COLORS.INVERTED,
        fontSize: 12,
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
        alignSelf: 'flex-start',
        color: TEXT_COLORS.INVERTED,
        fontSize: 16,
        fontWeight: '600'
      },
      weatherDescription: {
        color: TEXT_COLORS.INVERTED,
        fontSize: 12,
      },
     
})