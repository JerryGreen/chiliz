import { useReducer } from 'react'
import queryString from 'query-string'
// import isMobile from 'is-mobile'

import vkReducer from '../../reducers/vkReducer'
import vkEffect from '../../effects/vkEffect'

// import './VKButton.css'

const VKButton = props => {
  const { url, title, image, noparse } = props
  // TODO: handle `isMobile`
  // const vkUrl = `${isMobile() ? 'vk' : 'https'}://vk.com/share.php`
  const vkUrl = 'https://vk.com/share.php'

  const params = queryString.stringify({ url, title, image, noparse })
  const href = `${vkUrl}?${params}`
  const [state, dispatch] = useReducer(vkReducer, { likesCount: null })
  const { likesCount } = state
  vkEffect(dispatch)
  return (
    <a
      className="VKButton"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="VKButtonLeftPart">
        <div className="VKButtonLogo" />
        <div className="VKButtonText">Рассказать одногруппникам</div>
      </div>
      {typeof likesCount === 'number' && (
        <div className="VKButtonCounter">{likesCount}</div>
      )}
    </a>
  )
}

export default VKButton
