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
    </div>
  )
}

export default App
