import { StyleSheet, Text, View, Modal, Pressable, ScrollView } from 'react-native'
import React from 'react'

import { useConstants } from "../hooks/useConstants"
import { useFilters } from "../hooks/useFilters"
import { useSpots } from "../hooks/useSpots"

import { BACKGROUND_COLORS, TEXT_COLORS } from "../constants/colors"

export const ModalFilters = () => {

  const { FILTER_MODAL } = useConstants()

  const {
    handleSelectedCountry,
    handleSelectedRegion,
    handleLayoutCountryFocus,
    handlePressCloseModal,
    countries,
    selectedRegion,
    regions,
    visibleModalFilter,
    scrollCountriesRef
  } = useFilters()

  const { spots } = useSpots()

  return (
    <Modal animationType={'slide'} visible={visibleModalFilter}>

      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.textHeader}>{FILTER_MODAL.TITLE}</Text>
        </View>

        <View style={styles.filter}>

          <View style={styles.carrousel}>

            <ScrollView 
              ref={scrollCountriesRef}
              horizontal={true}
            >
              {
                countries.map((item) => (
                  <View
                    key={item.id} 
                    onLayout={(event) => handleLayoutCountryFocus(event, item)}
                  >
                    <Pressable
                      style={item.selected ? styles.cardCountriesSelected : styles.cardCountries}
                      onPress={() => handleSelectedCountry(item)}
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
              regions.map((region, index) => {
                  return (
                    <Pressable
                      key={index}
                      onPress={() => handleSelectedRegion(region)}>
                      <View style={styles.cardRegion}>
                        <Text style={region === selectedRegion ? styles.textRegionSelected : styles.textRegion}>{region}</Text>
                      </View>
                    </Pressable>
                  )
                }
              )
            }
          </ScrollView>

          <View style={styles.spotsLength}>
            <Text style={styles.textRegion}>{(spots.length) ? (`Great! there are ${spots.length} Spots in this region`) : ('')}</Text>
          </View>

        </View>

        <View style={styles.footer}>

          <Pressable
            style={styles.buttonClose}
            onPress={handlePressCloseModal}>
              <Text style={styles.textStyle}>{FILTER_MODAL.CLOSE_BUTTON}</Text>
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