const ACTION_TYPES = {

  SET_LANGUAGE: 'SET_LANGUAGE',

  SET_LOADING_LOCATION: 'SET_LOADING_LOCATION',
  SET_LOADING_WEATHER: 'SET_LOADING_WEATHER',

  REQUEST_FOREGROUND_PERMISSIONS_ASYNC: 'REQUEST_FOREGROUND_PERMISSIONS_ASYNC',
  SET_CURRENT_LOCATION: 'SET_CURRENT_LOCATION',

  SET_COUNTRIES: 'SET_COUNTRIES',
  SET_REGIONS: 'SET_REGIONS',
  SET_SPOTS: 'SET_SPOTS',

  SET_VISIBLE_MODAL_FILTER: 'SET_VISIBLE_MODAL_FILTER',

  SET_SELECTED_SPOT: 'SET_SELECTED_SPOT',
  SET_SELECTED_COUNTRY: 'SET_SELECTED_COUNTRY',
  SET_SELECTED_REGION: 'SET_SELECTED_REGION',

  SET_ORIGIN: 'SET_ORIGIN',
  SET_DESTINATION: 'SET_DESTINATION',
  SET_DISTANCE: 'SET_DISTANCE',

  SET_SHOW_WEATHER: 'SET_SHOW_WEATHER',
  SET_WEATHER_LOCAL: 'SET_WEATHER_LOCAL',
  SET_FORECAST_WEATHER_LOCAL: 'SET_FORECAST_WEATHER_LOCAL',
  SET_WEATHER_SPOT: 'SET_WEATHER_SPOT',
  SET_FORECAST_WEATHER_SPOT: 'SET_FORECAST_WEATHER_SPOT'
}

export const UPDATE_GENERAL_STATE = {

  [ACTION_TYPES.SET_LANGUAGE]: (state, action) => {
    return {
      ...state,
      language: action.payload
    }
  },

  [ACTION_TYPES.SET_LOADING_LOCATION]: (state, action) => {
    return {
      ...state,
      loadingLocation: action.payload
    }
  },
  [ACTION_TYPES.SET_LOADING_WEATHER]: (state, action) => {
    return {
      ...state,
      loadingWeather: action.payload
    }
  },

  [ACTION_TYPES.REQUEST_FOREGROUND_PERMISSIONS_ASYNC]: (state, action) => {
    return {
      ...state,
      foregroundPermissionsAsync: action.payload
    }
  },
  [ACTION_TYPES.SET_CURRENT_LOCATION]: (state, action) => {
    return {
      ...state,
      currentLocation: action.payload
    }
  },
  [ACTION_TYPES.SET_COUNTRIES]: (state, action) => {
    return {
      ...state,
      countries: action.payload
    }
  },
  [ACTION_TYPES.SET_REGIONS]: (state, action) => {
    return {
      ...state,
      regions: action.payload
    }
  },
  [ACTION_TYPES.SET_SPOTS]: (state, action) => {
    return {
      ...state,
      spots: action.payload
    }
  },

  [ACTION_TYPES.SET_VISIBLE_MODAL_FILTER]: (state, action) => {
    return {
      ...state,
      visibleModalFilter: action.payload
    }
  },

  [ACTION_TYPES.SET_SELECTED_COUNTRY]: (state, action) => {
    return {
      ...state,
      selectedCountry: action.payload
    }
  },
  [ACTION_TYPES.SET_SELECTED_REGION]: (state, action) => {
    return {
      ...state,
      selectedRegion: action.payload
    }
  },
  [ACTION_TYPES.SET_SELECTED_SPOT]: (state, action) => {
    return {
      ...state,
      selectedSpot: action.payload
    }
  },
  
  [ACTION_TYPES.SET_ORIGIN]: (state, action) => {
    return {
      ...state,
      origin: action.payload
    }
  },
  [ACTION_TYPES.SET_DESTINATION]: (state, action) => {
    return {
      ...state,
      destination: action.payload
    }
  },
  [ACTION_TYPES.SET_DISTANCE]: (state, action) => {
    return {
      ...state,
      distance: action.payload
    }
  },

  
  [ACTION_TYPES.SET_SHOW_WEATHER]: (state, action) => {
    return {
      ...state,
      showWeather: action.payload
    }
  },
  [ACTION_TYPES.SET_WEATHER_LOCAL]: (state, action) => {
    return {
      ...state,
      weatherLocal: action.payload
    }
  },
  [ACTION_TYPES.SET_FORECAST_WEATHER_LOCAL]: (state, action) => {
    return {
      ...state,
      forecastWeatherLocal: action.payload
    }
  },
  [ACTION_TYPES.SET_WEATHER_SPOT]: (state, action) => {
    return {
      ...state,
      weatherSpot: action.payload
    }
  },
  [ACTION_TYPES.SET_FORECAST_WEATHER_SPOT]: (state, action) => {
    return {
      ...state,
      forecastWeatherSpot: action.payload
    }
  },
  
}