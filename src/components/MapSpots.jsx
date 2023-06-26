import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"
import MapViewDirections from 'react-native-maps-directions'

import { useLocation } from "../hooks/useLocation"
import { useSpots } from "../hooks/useSpots"
import { useFilters } from "../hooks/useFilters"

import { MAPS_API_KEY } from '@env'

import { BACKGROUND_COLORS, TEXT_COLORS } from "../constants/colors"

const imageOrigin = require('../../assets/openspot-images/icons8-location-100.png')
const imageDestination = require('../../assets/openspot-images/icons8-select-50.png')

export const MapSpots = () => {

  const {
    handleMapReady,
    handleDirectionsReady,
    loadingLocation,
    setLoadingLocation,
    currentLocation,
    origin, destination,
    mapId, mapRef
  } = useLocation()

  const { selectedCountry } = useFilters()
  
  const { spots } = useSpots()

  return (
    <View style={styles.container}>

      <MapView
        id={mapId}
        ref={mapRef}
        style={styles.map}
        // provider={PROVIDER_GOOGLE}
        initialRegion={origin}
        onMapLoaded={() => setLoadingLocation(false)}
        onMapReady={() => handleMapReady()}
      >

        {
          ((currentLocation !== undefined) && (currentLocation !== ''))
            ? <Marker 
                image={imageOrigin}
                coordinate={{
                  latitude: currentLocation?.latitude, 
                  longitude: currentLocation?.longitude, 
                  longitudeDelta: 1,
                  latitudeDelta: 1
                }} />
            : <></>
        }

        {
          spots.map((item) => (
            <Marker 
              key={item.id} 
              image={imageDestination}
              coordinate={{
                latitude: item.location.latitude, 
                longitude: item.location.longitude, 
                longitudeDelta: 1,
                latitudeDelta: 1
              }} />
          ))
        }

        {
          ((currentLocation?.country) === (selectedCountry))
          ? <MapViewDirections
              apikey={MAPS_API_KEY}
              origin={{
                longitude: currentLocation.longitude,
                latitude: currentLocation.latitude,
                longitudeDelta: currentLocation.longitudeDelta,
                latitudeDelta: currentLocation.latitudeDelta,
              }}
              destination={destination}
              strokeColor={TEXT_COLORS.BODY}
              strokeWidth={3}
              mode={'DRIVING'}
              precision={'high'}
              onReady={(result) => handleDirectionsReady(result)}
            />
          : <MapViewDirections
              apikey={MAPS_API_KEY}
              origin={origin}
              destination={destination}
              strokeColor={BACKGROUND_COLORS.BLANK}
              strokeWidth={3}
              mode={'WALKING'}
              onReady={(result) => handleDirectionsReady(result)}
            />
        }

      </MapView>

      {/* {
        loadingLocation
        ? <Text>{'Loading...'}</Text>
        : <Text>{'Loaded'}</Text>
      } */}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_COLORS.BODY,
    width: '90%',
    height: '30%',
    borderRadius: 20,
    margin: 20,
    elevation: 10,
    shadowColor: BACKGROUND_COLORS.HEADER,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: .7,
    shadowRadius: 10,
  },
  map: {
    flex: 1,
    borderRadius: 20,
  },
})