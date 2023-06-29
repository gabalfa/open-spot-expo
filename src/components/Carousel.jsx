import { StyleSheet, View, Text, Image, FlatList, Pressable } from 'react-native'
import React from 'react'

import { useSpots } from "../hooks/useSpots"

import { Loading } from "./Loading"

import { BACKGROUND_COLORS, TEXT_COLORS } from "../constants/colors"

export const Carousel = () => {

  const { handlerSelectedSpot, spots } = useSpots()

  return (
    <View style={styles.container}>
      {
        spots.length > 0
        ? <FlatList
            scrollEnabled={true}
            horizontal={true}
            data={spots}
            renderItem={({item}) => (
              <Pressable 
                key={item.guid} 
                onPress={() => handlerSelectedSpot(item)}
              >
                <View style={item.selected ? styles.cardSelected : styles.card}>
                  <Text style={item.selected ? styles.spotTitleSelected : styles.spotTitle}>
                    {item.name}
                  </Text>
                  <Image 
                    style={styles.spotImage}
                    source={{uri: item.images[0]}}
                  />
                </View>
              </Pressable>
            )}
          />
        : <Loading />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '35%',
  },
  cardSelected: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 200,
    height: '95%',
    borderRadius: 15,
    padding: 5,
    margin: 5,
    backgroundColor: BACKGROUND_COLORS.BLANK,
    shadowColor: TEXT_COLORS.HEADER,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: .5,
    shadowRadius: 10,
    overflow: Platform.OS !== 'ios' && 'hidden'
  },
  card: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 200,
    height: '95%',
    borderRadius: 15,
    padding: 5,
    margin: 5,
    backgroundColor: BACKGROUND_COLORS.BODY,
    borderColor: BACKGROUND_COLORS.BODY,
    borderWidth: 2
  },
  spotTitleSelected: {
    color: TEXT_COLORS.BODY,
    fontSize: 12,
    fontWeight: '600'
  },
  spotTitle: {
    color: TEXT_COLORS.BODY,
    fontSize: 12,
  },
  spotImage: {
    width: '100%',
    height: '90%',
    margin: 3,
    borderRadius: 10,
  }
})