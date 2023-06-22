import { Alert } from 'react-native'
import { useContext, useEffect } from 'react'

import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore"
import { database } from "../config/fb"

import * as Location from "expo-location"

import { GlobalContext } from '../context/Global'

export function useFilters () {

  const {
    setLoadingLocation,
    selectedCountry, setSelectedCountry,
    selectedRegion, setSelectedRegion,
    countries, setCountries,
    regions, setRegions,
    visibleModalFilter, setVisibleModalFilter,
    setDestination, setSelectedSpot,
    mapRef,
    scrollCountriesRef,
  } = useContext(GlobalContext)

  useEffect(() => {

      const countriesRef = collection(database, "countries")
      const queryResult = query(countriesRef, orderBy('name', 'asc'))
    
      const unsuscribe = onSnapshot(queryResult, querySnapshot => {
        setCountries(
          querySnapshot.docs.map((doc) => {
            return ({
              id: doc.id,
              name: doc.data().name,
              regions: doc.data().regions
            })
          })
        )
      })
    
  }, [])

  const handlePressOpenModal = () => {

    if (countries.find(country => country.name === selectedCountry)?.regions !== undefined) {
      setRegions(countries.find(country => country.name === selectedCountry).regions)
    }

    const updated = countries.map((country) => {
      if (country.name === selectedCountry) {
        return { ...country, selected: true}
      }
      return { ...country, selected: false }
    })

    setCountries(updated)
    setVisibleModalFilter(true)

  }

  const handleSelectedCountry = (item) => {

    const updated = countries.map((country) => {
      if (country.id === item.id) {
        return { ...country, selected: true}
      }
      return { ...country, selected: false }
    })
    setCountries(updated)
    setSelectedCountry(item.name)
    setRegions(item.regions)
    setSelectedRegion('')
    setDestination(undefined)
    setSelectedSpot('')
  }

  const handleSelectedRegion = (region) => {
    setSelectedRegion(region)
    setLoadingLocation(true)
    Location.geocodeAsync(region)
      .then((location) => {
        mapRef.current.animateToRegion({
          longitude: location[0].longitude,
          latitude: location[0].latitude,
          longitudeDelta: 1,
          latitudeDelta: 1
        }, 1000)
      })
      .finally(() => setLoadingLocation(false))
  }

  const handleLayoutCountryFocus = (event, item) => {

    if (item.name === selectedCountry) {
      const layout = event.nativeEvent.layout
      scrollCountriesRef.current.scrollTo({
        x: layout.x,
        y: 0,
        animated: true,
      })
      scrollCountriesRef.current.flashScrollIndicators()
    } 

  }

  const handlePressCloseModal = () => {
    if (selectedRegion.length > 0) {
      setVisibleModalFilter(false)
    }
    else {
      Alert.alert('Select a region')
    }
  }

  return { 
    handleSelectedCountry,
    handleSelectedRegion,
    handleLayoutCountryFocus,
    handlePressCloseModal,
    handlePressOpenModal,
    scrollCountriesRef,
    countries, setCountries,
    regions, setRegions,
    selectedCountry, setSelectedCountry,
    selectedRegion, setSelectedRegion,
    visibleModalFilter, setVisibleModalFilter
  }

}