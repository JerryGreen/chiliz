const TYPES = {
  GET_COUNT_REQUEST: 'GET_COUNT_REQUEST',
  GET_COUNT_SUCCESS: 'GET_COUNT_SUCCESS',
  GET_COUNT_FAILURE: 'GET_COUNT_FAILURE'
}

// const { REACT_APP_DOMAIN_URL } = process.env

// https://vk.com/share.php?act=count&url=http://chiliz.ru/
// const VK_URL = 'https://vk.com/share.php'
// const endpoint = `${VK_URL}?act=count&url=${REACT_APP_DOMAIN_URL}`

const vkReducer = (state, action) => {
  const { type, payload = {} } = action
  switch (type) {
    case TYPES.GET_COUNT_FAILURE: {
      const { error } = payload
      console.error(new Error(error))
      return {}
    }
    case TYPES.GET_COUNT_SUCCESS: {
      const { likesCount } = payload
      return { likesCount }
    }
    default: return {}
  }
}

export { TYPES }
export default vkReducer
