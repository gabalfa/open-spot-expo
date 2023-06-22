import { useContext, useEffect } from 'react'

import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore"
import { database } from "../config/fb"

import { GlobalContext } from '../context/Global'

export function useSpots () {

  const {
    loadingLocation,
    setLoadingLocation,
    spots, setSpots,
    selectedRegion,
    selectedSpot, setSelectedSpot,
    setOrigin, setDestination
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
  
  const handlerSelectedSpot = (item) => {

    setLoadingLocation(true)

    setSelectedSpot({
      ...item,
      location: {
        latitude: item.location.latitude,
        longitude: item.location.longitude,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
      }   
    })

    setDestination({
      latitude: item.location.latitude,
      longitude: item.location.longitude,
      latitudeDelta: 0.2,
      longitudeDelta: 0.2,
    })

    const updated = spots?.map((spot) => {
      if (spot.id === item.id) {
        return { ...spot, selected: true}
      }
      return { ...spot, selected: false }
    })
    
    setOrigin(item.city)
    setSpots(updated)
    setSelectedSpot(item)
  }

  return {
    handlerSelectedSpot,
    spots,
    setSpots,
    selectedSpot, setSelectedSpot
  }
}