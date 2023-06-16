import { StyleSheet, Dimensions, View, Alert, Text } from 'react-native'
import React from 'react'

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"
import MapViewDirections from 'react-native-maps-directions'
import * as Location from "expo-location"

import { useLocation } from "../hooks/useLocation"
import { useSpots } from "../hooks/useSpots"
import { useFilters } from '../hooks/useFilters'

import { MAPS_API_KEY } from '@env'

import { BACKGROUND_COLORS } from "../constants/colors"


const { width, height } = Dimensions.get('window')

const imageOrigin = require('../../assets/openspot-images/icons8-location-100.png')
const imageDestination = require('../../assets/openspot-images/icons8-ramp-50.png')

export const MapSpots = () => {

  const {
    origin, setOrigin, destination, 
    mapId, mapRef
  } = useLocation()

  const {
    selectedCountry,
    selectedRegion,
    setSelectedCountry, setSelectedRegion
  } = useFilters()
  
  const {spots } = useSpots()

  const handleMapReady = () => {

    Location.getCurrentPositionAsync({})
      .then((location) => {

        setOrigin({
          longitude: location.coords.longitude,
          latitude: location.coords.latitude,
          longitudeDelta: .5,
          latitudeDelta: .5
        })

        mapRef.current.animateToRegion({
          longitude: location.coords.longitude,
          latitude: location.coords.latitude,
          longitudeDelta: .5,
          latitudeDelta: .5
        }, 1000)

        Location.reverseGeocodeAsync(location.coords)
        .then((address) => {
          setSelectedCountry(address[0].country)
          setSelectedRegion(address[0].region)
        })

      })
      .catch(error => console.wa('Error: permission to access location denied :::', error))

  }

  const handleDirectionsReady = (result) => {

    mapRef.current.fitToCoordinates(result.coordinates, {
      edgePadding: {
        right: (width / 20),
        bottom: (height / 20),
        left: (width / 20),
        top: (height / 20),
      }
    })
  }

  return (
    <View style={styles.container}>

      <MapView
        id={mapId}
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={origin}
        onMapReady={() => handleMapReady()}
      >

        {
          origin === undefined
          ? <></>
          : <Marker coordinate={origin} image={imageOrigin} />
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
          destination === undefined
          ? <MapViewDirections
              apikey={MAPS_API_KEY}
              origin={origin}
              destination={origin}
              onError={(errorMessage) => {
                Alert.alert('Sorry we no have directions for this Spot')
              }}
            />
          : <MapViewDirections
              apikey={MAPS_API_KEY}
              origin={origin}
              destination={destination}
              strokeColor={BACKGROUND_COLORS.HEADER}
              strokeWidth={4}
              onReady={(result) => handleDirectionsReady(result)}
              onError={(errorMessage) => {
                // Alert.alert('Sorry we no have directions for this Spot')
              }}
            />
        }

      </MapView>

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
    marginBottom: 0,
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
  locationDescription: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  }
})