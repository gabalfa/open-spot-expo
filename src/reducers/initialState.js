export const initialState = {

  loadingLocation: false,
  loadingWeather: false,
  
  foregroundPermissionsAsync: undefined,

  currentLocation: undefined,
  
  countries: [],
  regions: [],
  spots: [],

  visibleModalFilter: false,

  selectedCountry: '',
  selectedRegion: '',
  selectedSpot: undefined,

  origin: undefined,
  destination: undefined,
  distance: undefined,

  weatherLocal: undefined,
  forecastWeatherLocal: undefined,

  weatherSpot: undefined,
  forecastWeatherSpot: undefined,

}