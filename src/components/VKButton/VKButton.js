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
    <>
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
      <style jsx>{`
        .VKButton {
          display: flex;
          position: relative;
          align-items: center;
          height: 22px;
          color: white;
          text-decoration: none;
          /* left: -12px; */
        }

        .VKButtonLeftPart {
          display: flex;
          align-items: center;
          width: 191px;
          height: 100%;
          border-radius: 2px;
          background-color: #45668e;
        }

        .VKButtonLogo {
          background-size: 19px 59px;
          background-image: url(https://vk.com/images/icons/like_widget_2x.png);
          height: 8px;
          width: 16px;
          margin: 0 5px;
        }

        .VKButtonText {
          padding: 2px 0 4px;
        }

        .VKButtonCounter {
          display: flex;
          align-items: center;
          position: absolute;
          left: 191px;
          color: #55677d;
          height: 22px;
          border: 1px solid #adbdcc;
          background: #fff;
          font-size: 11px;
          padding: 2px 5px;
          color: #55677d;
          margin-left: 8px;
          border-radius: 2px;
          box-sizing: border-box;
        }

        .VKButtonCounter::before {
          content: '';
          display: block;
          background-size: 19px 59px;
          background-image: url(https://vk.com/images/icons/like_widget_2x.png);
          background-position: 0 -49px;
          width: 5px;
          height: 10px;
          position: absolute;
          left: -5px;
          box-sizing: content-box;
        }
      `}</style>
    </>
  )
}

export default VKButton
