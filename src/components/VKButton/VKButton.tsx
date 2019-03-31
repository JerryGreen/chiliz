// eslint-disable-next-line no-unused-vars
import { h } from 'preact'
import {
  useEffect,
  useReducer
} from 'preact/hooks'

import * as isMobile from 'ismobilejs'
import * as queryString from 'query-string'

import vkEffect from 'effects/vkEffect'
import vkReducer from 'reducers/vkReducer'

import './VKButton.css'

const VK_URL = `${isMobile.any ? 'vk' : 'https'}://vk.com/share.php`

const VKButton = ({ url, title, image, noparse }) => {
  const params = queryString.stringify({ url, title, image, noparse })
  const href = `${VK_URL}?${params}`
  const [state, dispatch] = useReducer(vkReducer, { likesCount: null })
  const { likesCount } = state
  useEffect(() => vkEffect(dispatch), [])
  return (
    <a className='VKButton' href={href} target='_blank'>
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
