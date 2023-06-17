import { useContext, useEffect } from 'react'

import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore"
import { database } from "../config/fb"

import { GlobalContext } from '../context/Global'

export function useSpots () {

  const { 
    spots, setSpots,
    selectedSpot, setSelectedSpot,
    selectedRegion
  } = useContext(GlobalContext)

  useEffect(() => {

    const spotsRef = collection(database, "spots")
    const queryResult = query(spotsRef, where('region', '==', selectedRegion), orderBy('name', 'desc'))

    const unsuscribe = onSnapshot(queryResult, querySnapshot => {
      setSpots(
        querySnapshot.docs.map((doc) => {

          const selected = doc.data().name == selectedSpot.name

          return ({
            id: doc.id,
            name: doc.data().name,
            description: doc.data().description,
            location: doc.data().location,
            country: doc.data().country,
            state: doc.data().state,
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

  return { 
    spots, setSpots,
    selectedSpot, setSelectedSpot
  }
}