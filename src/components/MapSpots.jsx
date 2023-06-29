import { StyleSheet, View, Platform, Text, Image } from 'react-native'
import React from 'react'

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"
import MapViewDirections from 'react-native-maps-directions'

import { useLocation } from "../hooks/useLocation"
import { useSpots } from "../hooks/useSpots"
import { useFilters } from "../hooks/useFilters"

import { MAPS_API_KEY } from '@env'

import { BACKGROUND_COLORS, TEXT_COLORS } from "../constants/colors"

const imageOrigin = require('../../assets/openspot-images/icons8-location-100.png')
const imageSelectedSpot = require('../../assets/openspot-images/icons8-location-80.png')
const imageDestination = require('../../assets/openspot-images/icons8-location-64-2.png')

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

  const { selectedRegion } = useFilters()
  
  const { spots, handlerSelectedSpot } = useSpots()

  return (
    <View style={styles.container}>

      <MapView
        id={mapId}
        ref={mapRef}
        style={styles.map}
        // provider={PROVIDER_GOOGLE}
        // loadingEnabled={true}
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
                }}>
                  <View style={{backgroundColor: 'white', borderRadius: 2, padding: 2, opacity: .8}}>
                    <Text style={{fontSize: 8, textAlign: 'center' }}>{'You are here!'}</Text>
                  </View>
                </Marker>
            : <></>
        }

        {
          spots.map((item) => (
            <Marker 
              key={item.id}
              onPress={() => handlerSelectedSpot(item)}
              image={item.selected ? imageSelectedSpot : imageDestination}
              coordinate={{
                latitude: item.location.latitude, 
                longitude: item.location.longitude, 
                longitudeDelta: 1,
                latitudeDelta: 1
              }}>
                <View style={item.selected ? styles.markerSelected : styles.marker}> 
                  <Text style={item.selected ? styles.markerTextSelected: styles.markerText}>{item.name}</Text>
                </View>
              </Marker>
          ))
        }

        {
          (currentLocation?.region === selectedRegion)
          ? <MapViewDirections
              apikey={MAPS_API_KEY}
              origin={{
                longitude: currentLocation.longitude,
                latitude: currentLocation.latitude,
                longitudeDelta: currentLocation.longitudeDelta,
                latitudeDelta: currentLocation.latitudeDelta,
              }}
              destination={destination}
              strokeColor={BACKGROUND_COLORS.HEADER}
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
    overflow: Platform.OS !== 'ios' && 'hidden'
  },
  map: {
    flex: 1,
    borderRadius: 20
  },
  marker: {
    backgroundColor: BACKGROUND_COLORS.BLANK,
    borderRadius: 5, 
    padding: 2, 
    alignItems: 'baseline', 
    opacity: .7,
  },
  markerSelected: {
    backgroundColor: BACKGROUND_COLORS.HEADER,
    borderRadius: 5, 
    padding: 2, 
    alignItems: 'baseline',
    opacity: .7
  },
  markerText: {
    fontSize: 8, 
    textAlign: 'center', 
    fontWeight: 'bold', 
    color: TEXT_COLORS.BODY
  },
  markerTextSelected: {
    fontSize: 8, 
    textAlign: 'center', 
    fontWeight: 'bold', 
    color: TEXT_COLORS.INVERTED
  },
  imageMarker: {
    height: 20,
    width: 20, 
  },
})