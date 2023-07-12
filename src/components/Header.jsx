import { StyleSheet, Text, View, Switch } from 'react-native'
import React, { useState } from 'react'

import { useFilters } from "../hooks/useFilters"
import { useConstants } from "../hooks/useConstants"

import { Filters } from "./Filters"

import { TEXT_COLORS } from "../constants/colors"

export const Header = () => {

  const { HEADER } = useConstants()

  const {
    setLanguage,
    selectedCountry,
    selectedRegion,
  } = useFilters()

  const [isEnabled, setIsEnabled] = useState(false)

  return (
    <View style={styles.header}>

      <Text style={styles.highLightText}>{HEADER.TITLE}</Text>

      <Filters />

      <View style={styles.bottonContainer}>

        {
          selectedCountry !== undefined
          ? <Text style={styles.textLocationDescription}>{`${selectedCountry} - ${selectedRegion}`}</Text>
          : <></>
        }

        <View style={styles.switchContainer}>
          
          <Text style={styles.switchText}>{`En`}</Text>

          <Switch
            trackColor={{false: TEXT_COLORS.BLUE_SWITCH, true: TEXT_COLORS.YELLOW_SWITCH}}
            thumbColor={isEnabled ? TEXT_COLORS.HEADER : TEXT_COLORS.HEADER}
            ios_backgroundColor={TEXT_COLORS.BLUE_SWITCH}
            onValueChange={() => {
              setLanguage(!isEnabled ? 'ES' : 'EN')
              setIsEnabled(previousState => !previousState)
            }}
            value={isEnabled}
          />

          <Text style={styles.switchText}>{`Es`}</Text>

        </View>

      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '90%',
    height: '20%',
    marginTop: 40
  },
  highLightText: {
    color: TEXT_COLORS.INVERTED,
    fontWeight: '600',
    fontSize: 20,
  },
  textLocationDescription: {
    color: TEXT_COLORS.INVERTED,
    fontSize: 14,
  },
  bottonContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 100
  },
  switchText: {
    color: TEXT_COLORS.INVERTED,
    fontSize: 14,
    fontWeight: '600',
  }
})