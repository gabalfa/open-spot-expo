import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

import { useWeather } from "../hooks/useWeather"
import { useLocation } from "../hooks/useLocation"
import { useFilters } from "../hooks/useFilters"

import { BACKGROUND_COLORS, TEXT_COLORS } from "../constants/colors"

const imgTemperature = require('../../assets/openspot-images/icons8-temperature-100.png')

const icon_01d = require('../../assets/openspot-images/icons/01d.png')
const icon_01n = require('../../assets/openspot-images/icons/01n.png')
const icon_02d = require('../../assets/openspot-images/icons/02d.png')
const icon_02n = require('../../assets/openspot-images/icons/02n.png')
const icon_03d = require('../../assets/openspot-images/icons/03d.png')
const icon_03n = require('../../assets/openspot-images/icons/03n.png')
const icon_04d = require('../../assets/openspot-images/icons/04d.png')
const icon_04n = require('../../assets/openspot-images/icons/04n.png')
const icon_09d = require('../../assets/openspot-images/icons/09d.png')
const icon_09n = require('../../assets/openspot-images/icons/09n.png')

const icon_10d = require('../../assets/openspot-images/icons/10d.png')
const icon_10n = require('../../assets/openspot-images/icons/10n.png')
const icon_11d = require('../../assets/openspot-images/icons/11d.png')
const icon_11n = require('../../assets/openspot-images/icons/11n.png')
const icon_13d = require('../../assets/openspot-images/icons/13d.png')
const icon_13n = require('../../assets/openspot-images/icons/13n.png')
const icon_50d = require('../../assets/openspot-images/icons/50d.png')
const icon_50n = require('../../assets/openspot-images/icons/50n.png')

const icon_unknown = require('../../assets/openspot-images/icons/unknown.png')


export const DetailSpot = () => {

  const { loadingWeather, weatherLocal, forecastWeatherLocal, weatherSpot, forecastWeatherSpot } = useWeather()
  const { currentLocation, distance } = useLocation()
  const { selectedCountry } = useFilters()

  return (
    <View style={styles.container}>

      {/* {
        loadingWeather
          ? <Text>{'Loading'}</Text>
          : <Text>{'Loaded'}</Text>
      } */}
{/* 
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
                forecastWeatherLocal?.list?.slice(0, 7).map((item, index) => (
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

      </View> */}

    
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
    padding: 10,
    backgroundColor: TEXT_COLORS.TERTIARY,
    // elevation: 15,
    // shadowColor: TEXT_COLORS.HEADER,
    // shadowOffset: {
    //   width: 5,
    //   height: 5,
    // },
    // shadowOpacity: 0.5,
    // shadowRadius: 10,
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