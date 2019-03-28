import { handler } from '../../functions/getChilizVkLikes'

global.fetch = jest.fn(async () => ({
  text: async () => 'VK.Share.count(0, 53);'
}))

it('returns likes count', async () => {
  const result = await handler()
  expect(JSON.parse(result.body)).toEqual({ likesCount: 53 })
})
