export const initialState = {

  language: 'EN',

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

  showWeather: false,
  weatherLocal: undefined,
  forecastWeatherLocal: undefined,

  weatherSpot: undefined,
  forecastWeatherSpot: undefined,

}