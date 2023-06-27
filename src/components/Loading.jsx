import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { TEXT_COLORS } from "../constants/colors"

export const Loading = () => {
  return (<Text style={styles.textLoading}>{'Loading'}</Text>)
}

const styles = StyleSheet.create({
    textLoading: {
        color: TEXT_COLORS.HEADER,
        fontWeight: '600'
    }
})