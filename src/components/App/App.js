import moment from 'moment'

import VKButton from '../VKButton/VKButton'

// import './App.css'

const App = () => {
  const odd = moment().isoWeek() % 2 === 1
  const chiliz = odd ? 'числитель' : 'знаменатель'
  // TODO: return wrong data when close to the end of week
  const startDay = moment()
    .weekday(1)
    .format('DD/MM')
  const endDay = moment()
    .weekday(7)
    .format('DD/MM')
  const title = `На этой неделе "${chiliz}"! (${startDay} - ${endDay})`
  const image = '/urpc.png'
  // const image =
  //   typeof window !== 'undefined'
  //     ? new window.URL('urpc.png', window.location.origin).toString()
  //     : 'https://chiliz.ru/urpc.png'

  return (
    <div className="App">
      <a
        className="contact"
        href="https://vk.com/write25053099"
        target="_blank"
        rel="noopener noreferrer"
      >
        Обратная связь
      </a>
      <div className="chiliz">
        <div className="chilizWrapper">
          <div className="subtitle">На этой неделе...</div>
          <div className="title">{chiliz}</div>
          <div className="share">
            <VKButton
              url={'https://chiliz.ru/'}
              title={title}
              image={image}
              noparse
            />
          </div>
        </div>
      </div>
      <div className="hint">
        Данные обновляются в 00:00 с наступлением понедельника. Используется
        время, установленное на вашем устройстве
      </div>
      <style jsx>{`
        .contact {
          position: absolute;
          top: 0;
          left: 0;
          padding: 12px;
        }

        .topHint {
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          padding: 12px;
          margin: 12px;
          line-height: 1.5;
          border-radius: 4px;
          background-color: #accaee;
          cursor: pointer;
        }

        .topHint > div {
          display: inline;
        }

        .topHintClose {
          float: right;
          color: #285473;
        }

        .chiliz {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          height: 100%;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: -1;
        }

        .chilizWrapper {
          display: flex;
          height: 60vh;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
        }

        .hint {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          margin: 12px;
          color: #d4d4d4;
          font-weight: bold;
          text-align: center;
        }

        .title {
          text-transform: capitalize;
          font-size: 48px;
        }

        @media screen and (min-width: 800px) {
          .title {
            font-size: 64px;
          }
        }

        .subtitle {
          font-size: 18px;
        }
      `}</style>
    </div>
  )
}

export default App
