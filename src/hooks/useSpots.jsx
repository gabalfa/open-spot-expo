import { Dimensions } from 'react-native'
import { useContext, useEffect, useCallback } from 'react'

import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore"
import { database } from "../config/fb"

import * as Location from "expo-location"

import { GlobalContext } from '../context/Global'

const { width, height } = Dimensions.get('window')

export function useSpots () {

  const {
    mapRef,
    currentLocation,
    scrollSpotsRef,
    loadingLocation,
    setLoadingLocation,
    spots, setSpots,
    selectedRegion,
    selectedSpot, setSelectedSpot,
    setOrigin, setDestination,
    setShowWeather
  } = useContext(GlobalContext)

  useEffect(() => {

    const spotsRef = collection(database, "spots")
    const queryResult = query(spotsRef, where('region', '==', selectedRegion), orderBy('name', 'desc'))

    const unsuscribe = onSnapshot(queryResult, querySnapshot => {
      setSpots(
        querySnapshot.docs.map((doc) => {

          const selected = doc.data().name === selectedSpot?.name

          return ({
            id: doc.id,
            name: doc.data().name,
            description: doc.data().description,
            location: doc.data().location,
            country: doc.data().country,
            region: doc.data().region,
            city: doc.data().city,
            district: doc.data().district,
            sports: doc.data().sports,
            images: doc.data().images,
            referenceSpot: doc.data().referenceSpot,
            selected
          })
        })
      )
    })

  }, [selectedRegion])
  
  const handlerSelectedSpot = useCallback((item, index) => {

    setLoadingLocation(true)

    if (index > 0) {
      scrollSpotsRef.current.scrollTo({
        x: index * 210,
        y: 0,
        animated: true,
      })
    }
    else {
      scrollSpotsRef.current.scrollTo({
        x: 0,
        y: 0,
        animated: true,
      })
    }
    scrollSpotsRef.current.flashScrollIndicators()

    const updated = spots?.map((spot) => {
      if (spot.id === item.id) {
        return { ...spot, selected: true}
      }
      return { ...spot, selected: false }
    })

    setSpots(updated)

    Location.geocodeAsync(item.country + ', ' + item.city)
      .then((location) => {
        setOrigin({
          longitude: location[0].longitude,
          latitude: location[0].latitude,

        })
      })
      .then(() => {
        setSelectedSpot({
          ...item,
          location: {
            latitude: item.location.latitude,
            longitude: item.location.longitude,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5,
          }   
        })
      })
      .then(() => {
        setDestination({
          latitude: item.location.latitude,
          longitude: item.location.longitude,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        })
      })
      .then(() => {
        mapRef.current.animateToRegion({
          latitude: item.location.latitude,
          longitude: item.location.longitude,
          longitudeDelta: 0.07,
          latitudeDelta: 0.07,
        }, 1000)
      })
      .finally(() => setLoadingLocation(false))
  })

  return {
    scrollSpotsRef,
    handlerSelectedSpot,
    spots,
    setSpots,
    selectedSpot, setSelectedSpot
  }
}