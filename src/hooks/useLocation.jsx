import { useContext, useEffect } from 'react'

import * as Location from "expo-location"

import { GlobalContext } from '../context/Global'

export function useLocation () {

  const { 
    statusLocationPermission, setStatusLocationPermission,
    currentAddress, setCurrentAddress,
    origin, setOrigin,
    destination, setDestination,
    mapId, mapRef
  } = useContext(GlobalContext)

  useEffect(() => {

    Location.requestForegroundPermissionsAsync()
      .then((status) => setStatusLocationPermission(status))
      .catch((error) => console.log('error:::', error))

  }, [])

  return { 
    statusLocationPermission, setStatusLocationPermission,
    currentAddress, setCurrentAddress,
    origin, setOrigin, 
    destination, setDestination,
    mapId, mapRef
  }
}