import { h, Component } from 'preact'
import moment from 'moment'

import logo from './logo.svg'

import './App.css'

class App extends Component {
  render() {
    const odd = moment().isoWeek() % 2 === 1
    // const chiliz = odd ? 'Нечет' : 'Чет'
    const chiliz = odd ? 'Числитель' : 'Знаменатель'
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
          <div>{chiliz}</div>
        </p>
      </div>
    )
  }
}

export default App
