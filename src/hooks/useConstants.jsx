import { useContext } from 'react'

import { GlobalContext } from '../context/Global'
import { ConstantsContext } from '../context/Constants'


export function useConstants () {

  const { language } = useContext(GlobalContext)

  const {
    UI_TEXT_EN, 
    UI_TEXT_ES,
    BACKGROUND_COLORS, 
    TEXT_COLORS
  } = useContext(ConstantsContext)

  const LANGUAGE_TEXT = {
    HEADER: language === 'EN' ? UI_TEXT_EN.HEADER: UI_TEXT_ES.HEADER,
    SPOT_DETAIL: language === 'EN' ? UI_TEXT_EN.SPOT_DETAIL : UI_TEXT_ES.SPOT_DETAIL,
    FILTER_MODAL: language === 'EN' ? UI_TEXT_EN.FILTER_MODAL : UI_TEXT_ES.FILTER_MODAL,
  }
  
  return { 
    ...LANGUAGE_TEXT,
    BACKGROUND_COLORS, 
    TEXT_COLORS
  }

}