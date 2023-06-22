export const SPOTS_ACTION_TYPES = {
  SET_SELECTED_SPOT: 'SET_SELECTED_SPOT'
}

const UPDATE_GENERAL_STATE = {

  [SPOTS_ACTION_TYPES.SET_SELECTED_SPOT]: (state, action) => {
    const newState = {
      ...state,
      selectedSpot: action.payload
    }
    return newState
  },

}

export const spotsReducer = (state, action) => {
  const { type: actionType } = action
  const updateState = UPDATE_GENERAL_STATE[actionType]
  return updateState ? updateState(state, action) : state
}