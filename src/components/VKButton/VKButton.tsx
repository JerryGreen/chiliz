// eslint-disable-next-line no-unused-vars
import { h } from 'preact'
import { useReducer, useEffect } from 'preact/hooks'
import queryString from 'query-string'
import isMobile from 'ismobilejs'

console.log('isMobile')
console.log(isMobile)

import vkReducer from 'reducers/vkReducer'
import vkEffect from 'effects/vkEffect'

import './VKButton.css'

const VK_URL = `${isMobile(navigator.userAgent).any ? 'vk' : 'https'}://vk.com/share.php`

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
