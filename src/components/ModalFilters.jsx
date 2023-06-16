import { StyleSheet, Text, View, Modal, Pressable, ScrollView, Alert } from 'react-native'
import React from 'react'

import * as Location from "expo-location"

import { useFilters } from "../hooks/useFilters"
import { useLocation } from "../hooks/useLocation"
import { useSpots } from "../hooks/useSpots"

import { BACKGROUND_COLORS, TEXT_COLORS } from "../constants/colors"

export const ModalFilters = () => {

  const {
    countries, setCountries,
    selectedCountry, setSelectedCountry,
    selectedRegion, setSelectedRegion,
    regions, setRegions,
    visibleModalFilter, setVisibleModalFilter,
    refScrollCountries, setRefScrollCountries
  } = useFilters()

  const {
    setDestination,
    mapRef
  } = useLocation()

  const {setSelectedSpot, spots} = useSpots()

  return (
    <Modal animationType={'slide'} visible={visibleModalFilter}>

      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.textHeader}>{'Please select a location'}</Text>
        </View>

        <View style={styles.filter}>

          <View style={styles.carrousel}>

            <ScrollView 
              ref={(refScrollCountries) => setRefScrollCountries(refScrollCountries)}
              horizontal={true}
            >
              {
                countries.map((item, index) => (
                  <View
                    key={item.id} 
                    onLayout={(event) => {
                      if (item.name === selectedCountry) {
                        const layout = event.nativeEvent.layout
                        refScrollCountries.scrollTo({
                          x: layout.x,
                          y: 0,
                          animated: true,
                        })
                        refScrollCountries.flashScrollIndicators()
                      } 
                    }}
                  >
                    <Pressable
                      
                      style={item.selected ? styles.cardCountriesSelected : styles.cardCountries}
                      onPress={() => {
                        const updated = countries.map((country) => {
                          if (country.id === item.id) {
                            return { ...country, selected: true}
                          }
                          return { ...country, selected: false }
                        })
                        setCountries(updated)
                        setSelectedCountry(item.name)
                        setRegions(item.regions)
                        setSelectedRegion('')
                        setDestination(undefined)
                        setSelectedSpot('')
                      }}
                    >
                      <Text style={styles.textStyle}>{item.name}</Text>
                    </Pressable>

                  </View>

                ))
              }
            </ScrollView>

          </View>

          <ScrollView>
            {
              regions.map((item, index) => {
                  return (
                    <Pressable
                      key={index}
                      onPress={() => {
                        setSelectedRegion(item)
                        Location.geocodeAsync(item)
                          .then((location) => {
                            mapRef.current.animateToRegion({
                              longitude: location[0].longitude,
                              latitude: location[0].latitude,
                              longitudeDelta: 1,
                              latitudeDelta: 1
                            }, 1000)
                          }
                        )
                      }}>
                        <View style={styles.cardRegion}>
                          <Text style={item === selectedRegion ? styles.textRegionSelected : styles.textRegion}>{item}</Text>
                        </View>
                    </Pressable>
                  )
                }
              )
            }
          </ScrollView>

          <View style={styles.spotsLength}>
            <Text style={styles.textRegion}>{spots.length ? `Great! there are ${spots.length} Spots in this region` : ''}</Text>
          </View>

        </View>

        <View style={styles.footer}>

          <Pressable
            style={[styles.buttonClose]}
            onPress={() => {
              if (selectedRegion.length > 0) {
                setVisibleModalFilter(false)
              }
              else {
                Alert.alert('Select a region')
              }
            }}>
              <Text style={styles.textStyle}>{'Done!'}</Text>
          </Pressable>

        </View>

      </View>

    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20
  },
  header: {
    paddingTop: 50
  },
  filter: {
    flex: 1,
    width: '100%',
    margin: 20,
    padding: 20,
    borderWidth: .4,
    borderColor: TEXT_COLORS.HEADER,
    borderRadius: 25,
  },
  carrousel: {
    flexDirection: 'row',
    height: 100,
  },
  cardCountriesSelected: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    paddingRight: 25,
    paddingLeft: 25,
    margin: 15,
    elevation: 20,
    shadowColor: TEXT_COLORS.HEADER,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    backgroundColor: BACKGROUND_COLORS.HEADER,
  },
  cardCountries: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    paddingRight: 25,
    paddingLeft: 25,
    margin: 15,
    elevation: 20,
    shadowColor: TEXT_COLORS.HEADER,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    backgroundColor: BACKGROUND_COLORS.BODY,
  },
  textCountries: {
    color: TEXT_COLORS.HEADER,
    fontSize: 16,
    fontWeight: '600',
  },
  cardRegion: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: .4,
    borderBottomColor: TEXT_COLORS.HEADER,
    width: '100%',
    height: 50,
  },
  spotsLength: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  textRegionSelected: {
    color: TEXT_COLORS.HEADER,
    fontSize: 14,
    fontWeight: '600',
  },
  textRegion: {
    color: TEXT_COLORS.HEADER,
    fontSize: 12,
  },
  footer: {
    paddingBottom: 30
  },
  textHeader: {
    color: TEXT_COLORS.HEADER,
    fontSize: 32,
    fontWeight: '600',
  },
  buttonClose: {
    backgroundColor: BACKGROUND_COLORS.HEADER,
    borderRadius: 25,
    padding: 15,
    marginRight: 15,
    elevation: 10,
    shadowColor: BACKGROUND_COLORS.HEADER,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  textStyle: {
    color: TEXT_COLORS.HEADER,
    fontSize: 16,
  }
})