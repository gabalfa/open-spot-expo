import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import { useFilters } from "../hooks/useFilters"
import { Filters } from "./Filters"

import { TEXT_COLORS } from "../constants/colors"

// const BMX = require('../../assets/openspot-images/icons8-bmx-64.png')
// const Skateboard = require('../../assets/openspot-images/icons8-skateboard-100.png')
// const Rollerblade = require('../../assets/openspot-images/icons8-rollerblade-64-black.png')
// const Scooter = require('../../assets/openspot-images/icons8-scooter-64.png')

export const Header = () => {

  const {
    selectedCountry,
    selectedRegion,
  } = useFilters()
  
  return (
    <View style={styles.header}>

      <Text style={styles.highLightText}>
        {'Ready to ride an Open Spot?'}
      </Text>
      <Filters />

      {
        selectedCountry !== undefined
        ? <Text style={styles.textLocationDescription}>{`${selectedCountry} - ${selectedRegion}`}</Text>
        : <></>
      }

      {/* <View style={styles.sportsContainer}>

        {
          selectedCountry !== undefined
          ? <View style={styles.locationDescription}>
              <Text style={styles.textLocationDescription}>{`${selectedCountry} - ${selectedRegion}`}</Text>
            </View>
          : <></>
        }

        <Image style={styles.imageSports} source={Scooter}></Image>
        <Image style={styles.imageSports} source={BMX}></Image>
        <Image style={styles.imageSports} source={Skateboard}></Image>
        <Image style={styles.imageSports} source={Rollerblade}></Image>
        
      </View> */}
      
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '90%',
    height: '25%',
  },
  highLightText: {
    color: TEXT_COLORS.HEADER,
    fontWeight: '600',
    fontSize: 20,
  },
  sportsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: 40,
    margin: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: TEXT_COLORS.HEADER,
  },
  imageSports: {
    width: 20,
    height: 20
    // borderWidth: 1,
    // borderColor: 'black',
    // borderRadius: 20,
  },
  textLocationDescription: {
    color: TEXT_COLORS.TERTIARY,
    fontSize: 16,
  }
})