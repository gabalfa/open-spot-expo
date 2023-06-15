import { createContext, useState, useId, useRef } from 'react'

export const GlobalContext = createContext()

export function GlobalProvider ({ children }) {
  
  const [statusLocationPermission, setStatusLocationPermission] = useState()
  const [visibleModalFilter, setVisibleModalFilter] = useState(false)
  const [refScrollCountries, setRefScrollCountries] = useState(undefined)

  const [spots, setSpots] = useState([])
  const [countries, setCountries] = useState([])
  const [regions, setRegions] = useState([])
  
  const [selectedSpot, setSelectedSpot] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('')

  const [origin, setOrigin] = useState(undefined)
  const [destination, setDestination] = useState(undefined)

  const mapId = useId()
  const mapRef = useRef()

  return (
    <GlobalContext.Provider value={{

      statusLocationPermission, setStatusLocationPermission,
      visibleModalFilter, setVisibleModalFilter,
      refScrollCountries, setRefScrollCountries,

      spots, setSpots,
      countries, setCountries,
      regions, setRegions,

      selectedSpot, setSelectedSpot,
      selectedCountry, setSelectedCountry,
      selectedRegion, setSelectedRegion,
      
      origin, setOrigin,
      destination, setDestination,

      mapId, mapRef
      
    }}
    >
      {children}
    </GlobalContext.Provider>
  )
}