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
        <div>{chiliz}</div>
      </div>
      <div className='share'>
        <VKButton />
      </div>
    </div>
  )
}

export default App
