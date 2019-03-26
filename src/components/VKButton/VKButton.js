// eslint-disable-next-line no-unused-vars
import { h, Component } from 'preact'
import queryString from 'query-string'

import './VKButton.css'

const VK_URL = 'https://vk.com/share.php'

const VKButton = ({ url, title, image, noparse }) => {
  const params = queryString.stringify({ url, title, image, noparse })
  const href = `${VK_URL}?${params}`
  return (
    <a className='VKButton' href={href} target='_blank'>
      <div className='VKButtonLeftPart'>
        <div className='VKButtonLogo' />
        <div className='VKButtonText'>Рассказать одногруппникам</div>
      </div>
      {/* <div className='VKButtonCounter'>53</div> */}
    </a>
  )
}

export default VKButton
