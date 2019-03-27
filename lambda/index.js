/* global fetch */
global.fetch = require('node-fetch')

const url = 'https://vk.com/share.php?act=count&url=http://chiliz.ru/'

const handler = async (event, context, callback) => {
  const vkResponse = await fetch(url)
  const jsonpAnswer = await vkResponse.text()
  const likesCount = Number((jsonpAnswer.match(/VK\.Share\.count\(\d+, (\d+)/) || [])[1])
  const body = {
    likesCount
  }
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
      // 'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(body)
  }
  return callback(null, response)
}

exports.handler = handler
