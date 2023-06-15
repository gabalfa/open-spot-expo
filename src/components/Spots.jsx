import { StyleSheet, View } from 'react-native'
import React from 'react'

import { BACKGROUND_COLORS } from "../constants/colors"

import { Filters } from "./Filters"
import { Carousel } from "./Carousel"
import { MapSpots } from "./MapSpots"

export const Spots = () => {

  return (
    <View style={styles.spots}>

      <MapSpots />

      <Filters />

      <Carousel />
      
    </View>
  )
}

const styles = StyleSheet.create({
  spots: {
    backgroundColor: BACKGROUND_COLORS.BODY,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '90%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  }
})