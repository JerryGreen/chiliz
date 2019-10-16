// eslint-disable-next-line no-unused-vars
import { h, Component } from 'preact'
import { useReducer, useEffect } from 'preact/hooks'
import queryString from 'query-string'
import isMobile from 'is-mobile'

import vkReducer from 'reducers/vkReducer'
import vkEffect from 'effects/vkEffect'

import './VKButton.css'

const VK_URL = `${isMobile() ? 'vk' : 'https'}://vk.com/share.php`

const VKButton = ({ url, title, image, noparse }) => {
  const params = queryString.stringify({ url, title, image, noparse })
  const href = `${VK_URL}?${params}`
  const [state, dispatch] = useReducer(vkReducer, { likesCount: null })
  const { likesCount } = state
  useEffect(() => vkEffect(dispatch), [])
  return (
    <a className='VKButton' href={href} target='_blank' rel="noopener noreferrer">
      <div className='VKButtonLeftPart'>
        <div className='VKButtonLogo' />
        <div className='VKButtonText'>Рассказать одногруппникам</div>
      </div>
      { typeof likesCount === 'number' &&
        <div className='VKButtonCounter'>53</div>
      }
    </a>
  )
}

export default VKButton
