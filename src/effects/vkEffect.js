import { TYPES } from 'reducers/vkReducer'

// const API_URL = 'https://kfp7zu0p86.execute-api.eu-central-1.amazonaws.com'
// const SERVER_URL = 'default'
// const LIKES_URL = 'getChilizVkLikes'
const ENDPOINT = 'https://kfp7zu0p86.execute-api.eu-central-1.amazonaws.com/default/getChilizVkLikes'

const vkEffect = async dispatch => {
  dispatch(TYPES.GET_COUNT_REQUEST)
  const res = await window.fetch(ENDPOINT).catch(error =>
    dispatch({ type: TYPES.GET_COUNT_FAILURE, payload: { error } })
  )
  if (!res) return
  const resParsed = await res.json()
  const { likesCount } = resParsed
  dispatch({ type: TYPES.GET_COUNT_SUCCESS, payload: { likesCount } })
}

export default vkEffect
