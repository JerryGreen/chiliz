// import 'babel-polyfill'

import { h, render } from 'preact'

import App from '~/components/App/App'

import registerServiceWorker from './registerServiceWorker.js'

import './index.css'

// declare namespace JSX {
//   interface IntrinsicElements {
//       [elemName: string]: any;
//   }
// }

render(<App />, document.getElementById('root'))
registerServiceWorker()
