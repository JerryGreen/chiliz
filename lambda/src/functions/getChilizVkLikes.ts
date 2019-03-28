import { APIGatewayProxyHandler } from 'aws-lambda'
import nodeFetch from 'node-fetch'
import 'source-map-support/register'

global.fetch = nodeFetch

const url = 'https://vk.com/share.php?act=count&url=http://chiliz.ru/'

export const getChilizVkLikes: APIGatewayProxyHandler = async () => {
  const vkResponse = await fetch(url)
  const jsonpAnswer = await vkResponse.text()
  const likesCount = Number((jsonpAnswer.match(/VK\.Share\.count\(\d+, (\d+)/) || [])[1])
  const body = {
    likesCount
  }
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
      // 'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(body)
  }
}
exports.handler = getChilizVkLikes
