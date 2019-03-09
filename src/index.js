// eslint-disable-next-line no-unused-vars
import { h, render } from 'preact'
import App from 'components/App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

render(<App />, document.getElementById('root'))
registerServiceWorker()
