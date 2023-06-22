import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

import { useFilters } from "../hooks/useFilters"

import { ModalFilters } from "./ModalFilters"
import { BACKGROUND_COLORS, TEXT_COLORS } from "../constants/colors"

const imageSearch = require('../../assets/openspot-images/icons8-search-64.png')
const imageLocation = require('../../assets/openspot-images/icons8-location-64.png')

export const Filters = () => {

  const { handlePressOpenModal } = useFilters()

  return (
    <View style={styles.container}>

      <Pressable 
        onPress={handlePressOpenModal}>

        <View style={styles.actionButton}>

          <View style={styles.searchFilter}>
            <Image style={styles.imageLocation} source={imageLocation}></Image>
            <Text style={styles.textSearch}>{'Where to?'}</Text>
            <Image style={styles.imageSearch} source={imageSearch}></Image>
          </View>

        </View>

      </Pressable>
    
      <ModalFilters />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  searchFilter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: TEXT_COLORS.INVERTED,
    width: '100%',
    height: 50,
    borderRadius: 10,
    padding: 10,
  },
  actionButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  textSearch: {
    color: TEXT_COLORS.TERTIARY,
    fontSize: 18,
    width: '60%'
  },
  imageLocation: {
    width: 25,
    height: 25
  },
  imageSearch: {
    width: 40,
    height: 40
  }
})