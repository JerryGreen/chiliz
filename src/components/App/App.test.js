// eslint-disable-next-line no-unused-vars
import { h, render } from 'preact'
import App from './App'

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
}
global.localStorage = localStorageMock

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<App />, div)
})
