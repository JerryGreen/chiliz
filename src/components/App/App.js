// eslint-disable-next-line no-unused-vars
import { h, Component } from 'preact'
import moment from 'moment'
import VKButton from 'components/VKButton/VKButton'

import './App.css'

const App = () => {
  const odd = moment().isoWeek() % 2 === 1
  const chiliz = odd ? 'Числитель' : 'Знаменатель'
  return (
    <div className='App'>
      <div className='chiliz'>
        <div className='subtitle'>На этой неделе...</div>
        <div className='title'>{chiliz}</div>
        <div className='share'>
          <VKButton />
        </div>
      </div>
      <div className='hint'>
        Данные обновляются в 00:00 с наступлением понедельника, используется время на вашем устройстве
      </div>
    </div>
  )
}

export default App
