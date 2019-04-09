import {
  // APIGatewayProxyHandler
  Callback
} from 'aws-lambda'
interface IHeaders {
  'Access-Control-Allow-Origin': string
}
interface IResponse {
  body: string,
  headers: IHeaders,
  statusCode: number,
}
type APIGatewayProxyHandler = (event?: object, context?: object, callback?: Callback) => Promise<IResponse>
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
  // return callback(null, )
  return {
    body: JSON.stringify(body),
    headers: {
      'Access-Control-Allow-Origin': '*'
      // 'Access-Control-Allow-Credentials': true
    },
    statusCode: 200,
  }
}

// exports.handler = getChilizVkLikes
export default getChilizVkLikes
