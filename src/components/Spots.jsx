import { StyleSheet, View } from 'react-native'
import React, { lazy, Suspense }  from 'react'

import { useLocation } from "../hooks/useLocation"

import { BACKGROUND_COLORS } from "../constants/colors"

const Carousel = lazy(() => import('./Carousel'))
const MapSpots = lazy(() => import('./MapSpots'))
const DetailSpot = lazy(() => import('./DetailSpot'))

import { Loading } from "./Loading"

export const Spots = () => {

  const { foregroundPermissionsAsync } = useLocation()
  
  return (
    <View style={styles.spots}>
      <Suspense fallback={<Loading />}>
        {
          foregroundPermissionsAsync?.status === "granted"
          ? <>
              <DetailSpot />
              <MapSpots />
              <Carousel />
            </>
          : <></>
        }
      </Suspense>
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