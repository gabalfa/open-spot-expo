import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useFilters } from "../hooks/useFilters"
import { Filters } from "./Filters"

import { TEXT_COLORS } from "../constants/colors"

export const Header = () => {

  const {
    selectedCountry,
    selectedRegion,
  } = useFilters()
  
  return (
    <View style={styles.header}>

      <Text style={styles.highLightText}>{'Ready to ride an Open Spot?'}</Text>

      <Filters />

      {
        selectedCountry !== undefined
        ? <Text style={styles.textLocationDescription}>{`${selectedCountry} - ${selectedRegion}`}</Text>
        : <></>
      }
      
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
    color: TEXT_COLORS.INVERTED,
    fontWeight: '600',
    fontSize: 20,
  },
  textLocationDescription: {
    color: TEXT_COLORS.INVERTED,
    fontSize: 14,
  }
})