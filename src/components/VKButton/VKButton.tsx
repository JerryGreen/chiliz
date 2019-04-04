import { h } from 'preact'
import {
  useEffect,
  useReducer
} from 'preact/hooks'

import isMobile from 'ismobilejs'
import queryString from 'query-string'

import vkEffect from '~/effects/vkEffect'
import vkReducer from '~/reducers/vkReducer'

import './VKButton.css'

const VK_URL = `${isMobile.any ? 'vk' : 'https'}://vk.com/share.php`

interface IVKButtonProps {
  url: string,
  title: string,
  image: string,
  noparse: boolean
}

const VKButton = ({ url, title, image, noparse }: IVKButtonProps) => {
  const params = queryString.stringify({ url, title, image, noparse })
  const href = `${VK_URL}?${params}`
  const [state, dispatch] = useReducer(vkReducer, { likesCount: null })
  const { likesCount } = state
  useEffect(() => { vkEffect(dispatch) }, [])
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
