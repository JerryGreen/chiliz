export enum TYPES {
  GET_COUNT_FAILURE = 'GET_COUNT_FAILURE',
  GET_COUNT_REQUEST = 'GET_COUNT_REQUEST',
  GET_COUNT_SUCCESS = 'GET_COUNT_SUCCESS',
}

// enum TYPES {
// }

// const { REACT_APP_DOMAIN_URL } = process.env

// https://vk.com/share.php?act=count&url=http://chiliz.ru/
// const VK_URL = 'https://vk.com/share.php'
// const endpoint = `${VK_URL}?act=count&url=${REACT_APP_DOMAIN_URL}`

interface IError {
  error: string
}

interface IState {
  likesCount: number
}

type Action =
  {
    type: TYPES.GET_COUNT_REQUEST,
  } |
  {
    type: TYPES.GET_COUNT_SUCCESS,
    payload: IState
  } |
  {
    type: TYPES.GET_COUNT_FAILURE,
    payload: IError
  }

export type Dispatch = (action: Action) => void

export const initialState: IState = {
  likesCount: 0
}

const vkReducer = (state: IState, action: Action) => {
  switch (action.type) {
    case TYPES.GET_COUNT_SUCCESS: {
      const { likesCount } = action.payload
      return { likesCount }
    }
    default: return {}
  }
}

export default vkReducer
