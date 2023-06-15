import { useContext, useEffect } from 'react'

import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore"
import { database } from "../config/fb"

import { GlobalContext } from '../context/Global'

export function useFilters () {

  const {
    selectedCountry, setSelectedCountry,
    selectedRegion, setSelectedRegion,
    countries, setCountries,
    regions, setRegions,
    visibleModalFilter, setVisibleModalFilter,
    refScrollCountries, setRefScrollCountries
  } = useContext(GlobalContext)

  useEffect(() => {

      const countriesRef = collection(database, "countries")
      const queryResult = query(countriesRef, orderBy('name', 'asc'))
    
      const unsuscribe = onSnapshot(queryResult, querySnapshot => {
        setCountries(
          querySnapshot.docs.map((doc) => {
            const selected = doc.data().name == selectedCountry
            return ({
              id: doc.id,
              name: doc.data().name,
              regions: doc.data().regions,
              selected
              // images: doc.data().images
            })
          })
        )
      })
    
  }, [])

  // const filteredProducts = (products) => {
  //   return products.filter(product => {
  //     return (
  //       product.price >= filters.minPrice &&
  //       (
  //         filters.category === 'all' ||
  //         product.category === filters.category
  //       )
  //     )
  //   })
  // }

  return { 
    // filters, setFilters, // filteredProducts,
    visibleModalFilter, setVisibleModalFilter,
    refScrollCountries, setRefScrollCountries,
    selectedCountry, setSelectedCountry,
    selectedRegion, setSelectedRegion,
    countries, setCountries,
    regions, setRegions,
  }
}