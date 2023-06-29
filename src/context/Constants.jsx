import { createContext } from 'react'

import { 
  UI_TEXT_EN, 
  UI_TEXT_ES
} from "../constants/uiTexts"

import { 
  BACKGROUND_COLORS, 
  TEXT_COLORS
} from "../constants/colors"

export const ConstantsContext = createContext()

export function ConstantsProvider ({ children }) {
  return (
    <ConstantsContext.Provider value={{
      UI_TEXT_EN, 
      UI_TEXT_ES,
      BACKGROUND_COLORS, 
      TEXT_COLORS
    }}>
      {children}
    </ConstantsContext.Provider>
  )
}