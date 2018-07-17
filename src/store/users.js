import API from './../services/api'

export const Types = {
  USERS: 'users/USERS',
  USERS_SUCCESS: 'users/USERS_SUCCESS',
  USERS_FAILURE: 'users/USERS_FAILURE'
}

const initialState = {
  loading: false,
  data: [],
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.USERS:
      return Object.assign({}, state, {
        loading: true,
        error: null
      })
    case Types.USERS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: action.payload.data,
        error: null
      })
    case Types.USERS_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.payload
      })
    default:
      return state
  }
}

export const fetchUsers = () => async (dispatch) => {
  try {
    dispatch({ type: Types.USERS })
    const response = await API.users()
    await dispatch({ type: Types.USERS_SUCCESS, payload: response })
  } catch (err) {
    dispatch({ type: Types.USERS_FAILURE, payload: err.response })
  }
}

export default reducer
