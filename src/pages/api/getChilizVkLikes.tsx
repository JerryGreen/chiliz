import fetch from 'isomorphic-unfetch'
import { NextApiRequest, NextApiResponse } from 'next'

const URL = 'https://vk.com/share.php?act=count&url=http://chiliz.ru/'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const vkResponse = await fetch(URL)
    const jsonpAnswer = await vkResponse.text()
    const likesCount = Number(
      (jsonpAnswer.match(/VK\.Share\.count\(\d+, (\d+)/) || [])[1]
    )
    res.json({ likesCount })
  } catch (error) {
    res.status(500).json({ error })
  }
}
