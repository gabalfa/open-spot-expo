import { StyleSheet, View, Text, Image, FlatList, Pressable } from 'react-native'
import React from 'react'

import { useSpots } from "../hooks/useSpots"
import { useLocation } from "../hooks/useLocation"
import { useFilters } from "../hooks/useFilters"

import { BACKGROUND_COLORS, TEXT_COLORS } from "../constants/colors"

export const Carousel = () => {

  const {spots, setSpots, setSelectedSpot} = useSpots()
  const {setDestination} = useLocation()

  const {
    selectedCountry,
    selectedRegion,
  } = useFilters()

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
        selectedCountry !== undefined
        ? <View style={styles.locationDescription}>
            <Text style={styles.textLocationDescription}>{`${selectedCountry} - ${selectedRegion}`}</Text>
          </View>
        : <></>
      }

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
    width: '100%',
  },
  cardSelected: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 200,
    height: 230,
    borderRadius: 15,
    padding: 5,
    margin: 5,
    marginTop: 5,
    backgroundColor: BACKGROUND_COLORS.HEADER,
  },
  card: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 200,
    height: 230,
    borderRadius: 15,
    padding: 5,
    margin: 5,
    marginTop: 5,
    backgroundColor: BACKGROUND_COLORS.BODY,
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
  locationDescription: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },
  textLocationDescription: {
    color: TEXT_COLORS.HEADER,
    fontSize: 16,
    fontWeight: '600'
  },
})