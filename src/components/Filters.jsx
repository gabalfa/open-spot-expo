import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

import { useFilters } from "../hooks/useFilters"

import { ModalFilters } from "./ModalFilters"
import { BACKGROUND_COLORS, TEXT_COLORS } from "../constants/colors"

const imageSearch = require('../../assets/openspot-images/icons8-search-64.png')
const imageLocation = require('../../assets/openspot-images/icons8-location-64.png')

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

      <Pressable 
        onPress={() => {

          if (countries.find(country => country.name === selectedCountry)?.regions !== undefined) {
            setRegions(countries.find(country => country.name === selectedCountry).regions)
          }

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

          <View style={styles.searchFilter}>
            <Image style={styles.imageLocation} source={imageLocation}></Image>
            <Text style={styles.textSearch}>{'Where to?'}</Text>
            <Image style={styles.imageSearch} source={imageSearch}></Image>
          </View>

        </View>

      </Pressable>
    
      <ModalFilters />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  searchFilter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: TEXT_COLORS.HEADER,
    width: '100%',
    height: 50,
    borderRadius: 10,
    padding: 10,
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
    marginTop: 5,
  },
  textSelect: {
    
    fontSize: 20,
    paddingTop: 7,
    paddingRight: 10
  },
  textSearch: {
    color: TEXT_COLORS.TERTIARY,
    fontSize: 18,
    width: '60%'
  },
  imageLocation: {
    width: 25,
    height: 25
  },
  imageSearch: {
    width: 40,
    height: 40
  }
})