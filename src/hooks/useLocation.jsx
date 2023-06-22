import { Dimensions } from 'react-native'
import { useContext, useEffect } from 'react'

import * as Location from "expo-location"

import { GlobalContext } from '../context/Global'

const { width, height } = Dimensions.get('window')

export function useLocation () {

  const {
    foregroundPermissionsAsync,
    
    currentLocation, setCurrentLocation,
    requestForegroundPermissionsAsync,

    setSelectedCountry, setSelectedRegion,

    origin, setOrigin,
    destination, setDestination,
    distance, setDistance,

    mapId, mapRef,
    
  } = useContext(GlobalContext)

  useEffect(() => {

    if (foregroundPermissionsAsync?.status !== "granted") {

      Location.requestForegroundPermissionsAsync()
        .then((status) => requestForegroundPermissionsAsync(status))
        .catch((error) => console.log('error:::', error))

    }

  }, [origin])

  const handleMapReady = () => {

    Location.getCurrentPositionAsync({})
      .then((location) => {

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

            setCurrentLocation({
              longitude: location.coords.longitude,
              latitude: location.coords.latitude,
              longitudeDelta: .5,
              latitudeDelta: .5,
              country: address[0].country,
              region: address[0].region,
              city: address[0].city
            })

          })

      })
      .catch(error => console.warn('Error: permission to access location denied :::', error))

  }

  const handleDirectionsReady = (result) => {
    setDistance(result.distance)
    mapRef.current.fitToCoordinates(result.coordinates, {
      edgePadding: {
        right: (width / 20),
        bottom: (height / 20),
        left: (width / 20),
        top: (height / 20),
      }
    })
  }

  return {
    handleMapReady,
    handleDirectionsReady,

    foregroundPermissionsAsync,
    currentLocation, setCurrentLocation,

    origin, setOrigin, 
    destination, setDestination,
    distance, setDistance,

    mapId, mapRef
  }
}