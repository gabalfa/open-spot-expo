import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

import { useWeather } from "../hooks/useWeather"
import { useLocation } from "../hooks/useLocation"
import { useFilters } from "../hooks/useFilters"

import { BACKGROUND_COLORS, TEXT_COLORS } from "../constants/colors"

const imgTemperature = require('../../assets/openspot-images/icons8-temperature-100.png')

export const DetailSpot = () => {

  const { weatherLocal, forecastWeatherLocal, weatherSpot, forecastWeatherSpot } = useWeather()
  const { currentLocation, distance } = useLocation()
  const { selectedCountry } = useFilters()

  return (
    <View style={styles.container}>

      <View style={styles.containerCurrent}>

        <Text style={styles.currentTitle}>{`Now`}</Text>

        {
          weatherSpot !== undefined
          ? <>

              <Text style={styles.currentDescription}>
                <Image 
                  style={styles.imageWeather} 
                  source={{uri: `https://openweathermap.org/img/wn/${weatherSpot?.weather[0].icon}@4x.png`}}
                  >
                </Image>
                {`${weatherSpot?.weather[0].main}`}

                <Text style={styles.temperatureText}>
                  <Image style={styles.imageTemperature} source={imgTemperature}></Image>
                  {`${Math.round(parseFloat(weatherSpot?.main.temp) - 273.15)} ˚`}
                </Text>
              </Text>

              <View style={styles.temperatureContainer}>
                <Text style={styles.temperatureText}>
                  {
                    ((currentLocation?.country) === (selectedCountry))
                    ? `${distance?.toFixed(2)} km away from you`
                    : `${distance?.toFixed(2)} km to centre of city`
                  }
                  
                </Text>
              </View>

            </>
          : <>

              <Text style={styles.currentDescription}>
                <Image 
                  style={styles.imageWeather} 
                  source={{uri: `https://openweathermap.org/img/wn/${weatherLocal?.weather[0].icon}@4x.png`}}
                  >
                </Image>

                {`${weatherLocal?.weather[0].main}`}

                <Text style={styles.temperatureText}>
                  <Image style={styles.imageTemperature} source={imgTemperature}></Image>
                  {`${Math.round(parseFloat(weatherLocal?.main.temp) - 273.15)} ˚`}
                </Text>
                
              </Text>

              <View style={styles.temperatureContainer}>
                <Text style={styles.temperatureText}>
                  {
                    ((currentLocation?.country) === (selectedCountry))
                    ? ((distance !== undefined ) ? `${distance?.toFixed(2)} km away from you` : 'Local Weather')
                    : `${distance?.toFixed(2)} km to centre of city`
                  }
                  
                </Text>
              </View>

            </>
        }

      </View>

      <View style={styles.containerForecast}>

        <Text style={styles.forecastTitle}>{`Forecast next hours`}</Text>

        <ScrollView>

          <View style={styles.weatherContainer}>

            {
              forecastWeatherSpot !== undefined
              ? 
                forecastWeatherSpot?.list.slice(0, 7).map((item, index) => (
                  <Text key={index} style={styles.weatherDescription}>
                    {`${item?.dt_txt.substring(item?.dt_txt.length - 8, item?.dt_txt.length - 3)}`}
                    <Image 
                      style={styles.imageWeather} 
                      source={{uri: `https://openweathermap.org/img/wn/${item?.weather[0].icon}@4x.png`}}
                      >
                    </Image>
                    {`${item?.weather[0].main}`}
                  </Text>
                ))
              : 
                forecastWeatherLocal?.list.slice(0, 7).map((item, index) => (
                  <Text key={index} style={styles.weatherDescription}>
                    {`${item?.dt_txt.substring(item?.dt_txt.length - 8, item?.dt_txt.length - 3)}`}
                    <Image 
                      style={styles.imageWeather} 
                      source={{uri: `https://openweathermap.org/img/wn/${item?.weather[0].icon}@4x.png`}}
                      >
                    </Image>
                    {`${item?.weather[0].main}`}
                  </Text>
                ))
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
    backgroundColor: TEXT_COLORS.TERTIARY,
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
  imageTemperature: {
    width: 20,
    height: 20,
  },
  currentTitle: {
    color: TEXT_COLORS.BODY,
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: '600'
  },
  currentDescription: {
    color: TEXT_COLORS.BODY,
    fontSize: 12,
    height: 35,
  },
  forecastTitle: {
    alignSelf: 'flex-end',
    color: TEXT_COLORS.BODY,
    fontSize: 16,
    fontWeight: '600'
  },
  weatherDescription: {
    color: TEXT_COLORS.BODY,
    fontSize: 12,
  },
})