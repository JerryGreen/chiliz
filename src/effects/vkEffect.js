import { useEffect } from 'react'

import { TYPES } from '../reducers/vkReducer'

// const ENDPOINT = 'https://kfp7zu0p86.execute-api.eu-central-1.amazonaws.com/default/getChilizVkLikes'
const ENDPOINT = '/api/getChilizVkLikes'

const vkEffect = (dispatch, deps = []) => {
  useEffect(() => {
    const main = async () => {
      dispatch(TYPES.GET_COUNT_REQUEST)
      try {
        const res = await window
          .fetch(ENDPOINT)
          .catch(error =>
            dispatch({ type: TYPES.GET_COUNT_FAILURE, payload: { error } })
          )
        if (!res) return
        const resParsed = await res.json()
        const { likesCount } = resParsed
        dispatch({ type: TYPES.GET_COUNT_SUCCESS, payload: { likesCount } })
      } catch (error) {
        dispatch({
          type: TYPES.GET_COUNT_FAILURE,
          payload: { error },
        })
      }
    }
    main()
  }, deps)
}

export default vkEffect
