import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

import { useFilters } from "../hooks/useFilters"

import { ModalFilters } from "./ModalFilters"
import { BACKGROUND_COLORS, TEXT_COLORS } from "../constants/colors"

const imageFIlter = require('../../assets/openspot-images/icons8-filter-slider-48.png')

export const Filters = () => {

  const {
    setVisibleModalFilter,
    countries,
    selectedCountry,
    selectedRegion,
    setRegions,
    setCountries
  } = useFilters()

  return (
    <View style={styles.container}>

      {
        selectedCountry !== undefined
        ? <View>
            <Text style={styles.textMessage}>{'These are some spots near to'}</Text>
            <Text style={styles.textStyle}>{`${selectedCountry} - ${selectedRegion}`}</Text>
          </View>
        : <></>
      }

      <Pressable 
        onPress={() => {

          if (countries.find(country => country.name === selectedCountry)?.regions !== undefined)
            setRegions(countries.find(country => country.name === selectedCountry).regions)

          const updated = countries.map((country) => {
            if (country.name === selectedCountry) {
              return { ...country, selected: true}
            }
            return { ...country, selected: false }
          })

          setCountries(updated)
          setVisibleModalFilter(true)
        }}>
        <View style={styles.actionButton}>
          <Text style={styles.textSelect}>{'Where to?'}</Text>
          <Image source={imageFIlter}></Image>
        </View>
      </Pressable>
    
      <ModalFilters />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '5%',
    paddingRight: 15,
    paddingLeft: 15,
  },
  actionButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textMessage: {
    color: TEXT_COLORS.HEADER,
    fontSize: 10,
    fontWeight: '600' 
  },
  textStyle: {
    color: TEXT_COLORS.HEADER,
    fontSize: 16,
    fontWeight: '600',
  },
  textSelect: {
    color: TEXT_COLORS.HEADER,
    fontSize: 10,
    fontWeight: '600',
    paddingTop: 7,
    paddingRight: 10
  }
  
})