export const spotInitialState = JSON.parse(window.localStorage.getItem('spot')) || []

export const SPOT_ACTION_TYPES = {
  ADD_TO_SPOT: 'ADD_TO_SPOT',
  REMOVE_FROM_SPOT: 'REMOVE_FROM_SPOT',
  CLEAR_SPOT: 'CLEAR_SPOT'
}

// update localStorage with state for spot
export const updateLocalStorage = state => {
  window.localStorage.setItem('spot', JSON.stringify(state))
}

const UPDATE_STATE_BY_ACTION = {
  [SPOT_ACTION_TYPES.ADD_TO_SPOT]: (state, action) => {
    const { id } = action.payload
    const productInSpotIndex = state.findIndex(item => item.id === id)

    if (productInSpotIndex >= 0) {
      // 👀 una forma sería usando structuredClone
      // const newState = structuredClone(state)
      // newState[productInSpotIndex].quantity += 1

      // 👶 usando el map
      // const newState = state.map(item => {
      //   if (item.id === id) {
      //     return {
      //       ...item,
      //       quantity: item.quantity + 1
      //     }
      //   }

      //   return item
      // })

      // ⚡ usando el spread operator y slice
      const newState = [
        ...state.slice(0, productInSpotIndex),
        { ...state[productInSpotIndex], quantity: state[productInSpotIndex].quantity + 1 },
        ...state.slice(productInSpotIndex + 1)
      ]

      updateLocalStorage(newState)
      return newState
    }

    const newState = [
      ...state,
      {
        ...action.payload,
        quantity: 1
      }
    ]

    updateLocalStorage(newState)
    return newState
  },
  [SPOT_ACTION_TYPES.REMOVE_FROM_SPOT]: (state, action) => {
    const { id } = action.payload
    const newState = state.filter(item => item.id !== id)
    updateLocalStorage(newState)
    return newState
  },
  [SPOT_ACTION_TYPES.CLEAR_SPOT]: () => {
    updateLocalStorage([])
    return []
  }
}

export const spotReducer = (state, action) => {
  const { type: actionType } = action
  const updateState = UPDATE_STATE_BY_ACTION[actionType]
  return updateState ? updateState(state, action) : state
}