import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { TEXT_COLORS } from "../constants/colors"

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.highLightText}>
        {'Looking for spots to train your Sport?'}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    width: '90%',
    height: '10%',
    paddingBottom: 15
  },
  highLightText: {
    color: TEXT_COLORS.HEADER,
    fontWeight: '600',
    fontSize: 20,
  },
})