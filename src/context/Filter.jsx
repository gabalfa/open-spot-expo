import { createContext, useState } from 'react'

export const FiltersContext = createContext()

export function FiltersProvider ({ children }) {
  
  const [filters, setFilters] = useState({
    country: 'Colombia',
    state: 'Cundinamarca',
    city: 'Bogotá',
    district: 'Suba'
  })

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}