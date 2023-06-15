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
        <Text style={styles.spotTitle}>
          {item.name}
        </Text>
        <Image 
          style={styles.spotImage}
          source={{uri: item.images[0]}}
        />
        <Text style={styles.spotDescription}>
          {item.description?.substring(0, 100)}
        </Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardSelected: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 200,
    height: '90%',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: BACKGROUND_COLORS.HEADER,
    elevation: 5,
    shadowColor: BACKGROUND_COLORS.HEADER,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  card: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 200,
    height: '90%',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: BACKGROUND_COLORS.BODY,
    elevation: 5,
    shadowColor: BACKGROUND_COLORS.HEADER,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  spotTitle: {
    color: TEXT_COLORS.HEADER,
    fontSize: 14,
    fontWeight: '600'
  },
  spotImage: {
    width: '100%',
    height: '60%',
    margin: 3,
    borderRadius: 10,
  },
  spotDescription: {
    color: TEXT_COLORS.HEADER,
    fontSize: 10,
    width: '100%'
  },
})