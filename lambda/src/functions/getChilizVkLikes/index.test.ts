import {
  APIGatewayProxyEvent,
  Callback,
} from 'aws-lambda'

import handler from './index'
import input from './input.test.json'

global.fetch = jest.fn(async () => ({
  text: async () => 'VK.Share.count(0, 53);'
}))

const callbackMock: Callback = jest.fn(() => {})

const event: object = input.event

it('returns likes count', async () => {
  const result = await handler(event, input.context, callbackMock)
  const { body = '{}' } = result || {}
  const jsonBody = JSON.parse(body)
  expect(jsonBody).toEqual({ likesCount: 53 })
})
