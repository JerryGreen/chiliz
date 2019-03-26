// eslint-disable-next-line no-unused-vars
import { h, Component } from 'preact'

import './VKButton.css'

const VKButton = () => {
  return (
    <a className='VKButton' href='http://chiliz.ru/' target='_blank'>
      <div className='VKButtonLogo' />
      <div className='VKButtonText'>Рассказать одногруппникам</div>
      {/* <div className='VKButtonCounter'>53</div> */}
    </a>
  )
}

export default VKButton
