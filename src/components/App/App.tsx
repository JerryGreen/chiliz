import moment from 'moment'
import { h } from 'preact'
import { useState } from 'preact/hooks'

import VKButton from '~/components/VKButton/VKButton'

import urpc from '~/assets/urpc.png'

import './App.css'

// const { REACT_APP_DOMAIN_URL } = process.env
const image = new URL(urpc, window.location.origin).toString()

const App = () => {
  const [reminderClosedAt, setreminderClosedAt] = useState(localStorage.getItem('reminderClosedAt'))
  const onClose = () => {
    const now = Date.now().toString()
    localStorage.setItem('reminderClosedAt', now)
    setreminderClosedAt(now)
  }
  const odd = moment().isoWeek() % 2 === 1
  const chiliz = odd ? 'числитель' : 'знаменатель'
  const startDay = moment().weekday(1).format('DD/MM')
  const endDay = moment().weekday(7).format('DD/MM')
  const title = `На этой неделе "${chiliz}"! (${startDay} - ${endDay})`
  return (
    <div className='App'>
      <a className='contact' href='https://vk.com/write25053099' target='_blank' rel='noopener noreferrer'>
        Обратная связь
      </a>
      { !reminderClosedAt &&
        <div className='topHint' onClick={onClose}>
          <div>
            {
              'С прошлого года сайт сломался и всегда показывал противоположное значение. \
              Будьте внимательны - теперь правильно ;)'
            }
          </div>
          <div className='topHintClose'>(Закрыть)</div>
        </div>
      }
      <div className='chiliz'>
        <div className='chilizWrapper'>
          <div className='subtitle'>На этой неделе...</div>
          <div className='title'>{chiliz}</div>
          <div className='share'>
            <VKButton
              url={'http://chiliz.ru/'}
              title={title}
              image={image}
              noparse={true}
            />
          </div>
        </div>
      </div>
      <div className='hint'>
        Данные обновляются в 00:00 с наступлением понедельника, используется время, установленное на вашем устройстве
      </div>
    </div>
  )
}

export default App
