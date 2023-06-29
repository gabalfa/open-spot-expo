import { StyleSheet, View } from 'react-native'
import React from 'react'

import { useLocation } from "../hooks/useLocation"

import { BACKGROUND_COLORS } from "../constants/colors"

import { Carousel } from "./Carousel"
import { MapSpots } from "./MapSpots"
import { DetailSpot } from "./DetailSpot"

export const Spots = () => {

  const { foregroundPermissionsAsync } = useLocation()
  
  return (
    <View style={styles.spots}>

      {
        foregroundPermissionsAsync?.status === "granted"
        ? 
        <>
          <DetailSpot />
          <MapSpots />
          <Carousel />
          
        </>
        : <></>
      }

    </View>
  )
}

const styles = StyleSheet.create({
  spots: {
    backgroundColor: BACKGROUND_COLORS.BODY,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '80%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  }
})