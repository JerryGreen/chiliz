// eslint-disable-next-line no-unused-vars
import { h, render } from 'preact'
import App from './App'

interface LocalStorageEmulator {
  getItem: Function,
  setItem: Function,
  clear: Function,
}

const localStorageMock: LocalStorageEmulator = {
  getItem: () => {},
  setItem: () => {},
  clear: () => {}
}

(global as any).localStorage = localStorageMock

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<App />, div)
})
