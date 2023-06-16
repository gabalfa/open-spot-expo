import { StyleSheet, View, Text, Image, FlatList, Pressable } from 'react-native'
import React from 'react'

import { useSpots } from "../hooks/useSpots"
import { useLocation } from "../hooks/useLocation"

import { BACKGROUND_COLORS, TEXT_COLORS } from "../constants/colors"

export const Carousel = () => {

  const {spots, setSpots, setSelectedSpot} = useSpots()
  const {setDestination} = useLocation()

  const handlerSelectedSpot = (item) => {

    setSelectedSpot({
      ...item,
      location: {
        latitude: item.location.latitude,
        longitude: item.location.longitude,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
      }   
    })

    setDestination({
      latitude: item.location.latitude,
      longitude: item.location.longitude,
      latitudeDelta: 0.2,
      longitudeDelta: 0.2,
    })

    const updated = spots.map((spot) => {
      if (spot.id === item.id) {
        return { ...spot, selected: true}
      }
      return { ...spot, selected: false }
    })

    setSpots(updated)
    setSelectedSpot(item)
  }

  const renderItem = ({item}) => (
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
  )

  return (
    <View style={styles.container}>
      {
        spots.length > 0
        ? <FlatList
            scrollEnabled={true}
            horizontal={true}
            data={spots}
            renderItem={renderItem}
          />
        : <Text>{'This location no have spots resgistered'}</Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '95%',
  },
  cardSelected: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 200,
    height: 260,
    borderRadius: 15,
    padding: 5,
    margin: 5,
    marginTop: 15,
    backgroundColor: BACKGROUND_COLORS.HEADER,
    elevation: 5,
    shadowColor: BACKGROUND_COLORS.HEADER,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: .7,
    shadowRadius: 10,
  },
  card: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 200,
    height: 260,
    borderRadius: 15,
    padding: 5,
    margin: 5,
    marginTop: 15,
    backgroundColor: BACKGROUND_COLORS.BODY,
    elevation: 5,
    shadowColor: BACKGROUND_COLORS.HEADER,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: .7,
    shadowRadius: 10,
  },
  spotTitleSelected: {
    color: TEXT_COLORS.HEADER,
    fontSize: 12,
    fontWeight: '600'
  },
  spotTitle: {
    color: TEXT_COLORS.HEADER,
    fontSize: 12,
  },
  spotImage: {
    width: '100%',
    height: '90%',
    margin: 3,
    borderRadius: 10,
  },
})