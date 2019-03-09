// eslint-disable-next-line no-unused-vars
import { h, Component } from 'preact'
import moment from 'moment'

import './App.css'

class App extends Component {
  render () {
    const odd = moment().isoWeek() % 2 === 1
    const chiliz = odd ? 'Числитель' : 'Знаменатель'
    return (
      <div className='App'>
        <p className='App-intro'>
          <div>{chiliz}</div>
        </p>
      </div>
    )
  }
}

export default App
