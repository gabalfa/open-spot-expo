import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Filters } from "./Filters"

import { TEXT_COLORS } from "../constants/colors"

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.highLightText}>
        {'Ready to ride an Open Spot?'}
      </Text>
      <Filters />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '90%',
    height: '20%',
  },
  highLightText: {
    color: TEXT_COLORS.HEADER,
    fontWeight: '600',
    fontSize: 20,
  },
})