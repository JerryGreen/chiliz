// eslint-disable-next-line no-unused-vars
import { h, Component } from 'preact'

import './VKButton.css'

class VKButton extends Component {
  render () {
    return (
      <a className='VKButton' href='http://chiliz.ru/' target='_blank'>
        <div className='VKButtonLogo' />
        <div className='VKButtonText'>Рассказать одногруппникам</div>
      </a>
    )
  }
}

export default VKButton
