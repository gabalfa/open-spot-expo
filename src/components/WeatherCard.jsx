import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import { useWeather } from "../hooks/useWeather"
import { useLocation } from "../hooks/useLocation"
import { useFilters } from "../hooks/useFilters"

import { BACKGROUND_COLORS, TEXT_COLORS } from "../constants/colors"

const imgTemperature = require('../../assets/openspot-images/icons8-temperature-64.png')

// const icon_01d = require('../../assets/openspot-images/icons/01d.png')
// const icon_01n = require('../../assets/openspot-images/icons/01n.png')
// const icon_02d = require('../../assets/openspot-images/icons/02d.png')
// const icon_02n = require('../../assets/openspot-images/icons/02n.png')
// const icon_03d = require('../../assets/openspot-images/icons/03d.png')
// const icon_03n = require('../../assets/openspot-images/icons/03n.png')
// const icon_04d = require('../../assets/openspot-images/icons/04d.png')
// const icon_04n = require('../../assets/openspot-images/icons/04n.png')
// const icon_09d = require('../../assets/openspot-images/icons/09d.png')
// const icon_09n = require('../../assets/openspot-images/icons/09n.png')

// const icon_10d = require('../../assets/openspot-images/icons/10d.png')
// const icon_10n = require('../../assets/openspot-images/icons/10n.png')
// const icon_11d = require('../../assets/openspot-images/icons/11d.png')
// const icon_11n = require('../../assets/openspot-images/icons/11n.png')
// const icon_13d = require('../../assets/openspot-images/icons/13d.png')
// const icon_13n = require('../../assets/openspot-images/icons/13n.png')
// const icon_50d = require('../../assets/openspot-images/icons/50d.png')
// const icon_50n = require('../../assets/openspot-images/icons/50n.png')

// const icon_unknown = require('../../assets/openspot-images/icons/unknown.png')

export const WeatherCard = ({weather}) => {

    // console.log(weather)
    // const { currentLocation, distance } = useLocation()
    // const { selectedCountry } = useFilters()

    return (

        <View style={styles.container}>

          <Text style={styles.forecastTitle}>{`Now`}</Text>

            <View style={styles.row}>
                <Image 
                    style={styles.imageWeather} 
                    source={{uri: `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`}}
                />

                <Text style={styles.temperatureText}>{`${weather?.weather[0].main}`}</Text>
            </View>

           
            <View style={styles.row}>
            
                <Image style={styles.imageTemperature} source={imgTemperature}></Image>

                <Text style={styles.temperatureText}>
                    {`${Math.round(parseFloat(weather?.main.temp) - 273.15)} ˚`}
                </Text>
                
            </View>

            {/* <View style={styles.temperatureContainer}>
                <Text style={styles.temperatureText}>
                    {
                    ((currentLocation?.country) === (selectedCountry))
                    ? `${distance?.toFixed(2)} km away from you`
                    : `${distance?.toFixed(2)} km to centre of city`
                    }
                    
                </Text>
            </View>  */}

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    imageWeather: {
        width: 35,
        height: 35,
        marginRight: 10,
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
        alignSelf: 'flex-end',
        color: TEXT_COLORS.INVERTED,
        fontSize: 16,
        fontWeight: '600'
      },
      weatherDescription: {
        color: TEXT_COLORS.INVERTED,
        fontSize: 12,
      },
     
})