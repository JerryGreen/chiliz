// import 'babel-polyfill'

import { h, render } from 'preact'

import Main from '~/components/Main/Main'

import registerServiceWorker from './registerServiceWorker.js'

import './index.css'

// declare namespace JSX {
//   interface IntrinsicElements {
//       [elemName: string]: any;
//   }
// }

render(<Main />, document.getElementById('root'))
registerServiceWorker()
