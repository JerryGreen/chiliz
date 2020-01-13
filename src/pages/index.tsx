import React from 'react'
import { NextPage } from 'next'

import Main from '../layouts/Main'
import VKButton from '../components/VKButton/VKButton'

interface Props {
  chiliz: string
  isMobile: boolean
  startDay: string
  endDay: string
}

const Chiliz: NextPage<Props> = props => {
  const {
    chiliz = '...',
    isMobile = false,
    startDay = '...',
    endDay = '...',
  } = props
  const title = `"${chiliz}" с ${startDay} по ${endDay}`
  const image =
    typeof window !== 'undefined'
      ? new window.URL('urpc.png', window.location.origin).toString()
      : 'https://chiliz.ru/urpc.png'

  return (
    <Main>
      <div className="App">
        <a
          className="contact"
          href="https://vk.com/write25053099"
          target="_blank"
          rel="noopener noreferrer"
        >
          Обратная связь
        </a>
        <div className="chiliz">
          <div className="chilizWrapper">
            <div className="subtitle">На этой неделе...</div>
            <div className="title">{chiliz}</div>
            <div className="share">
              <VKButton
                url={'https://chiliz.ru/'}
                title={title}
                image={image}
                isMobile={isMobile}
                noparse
              />
            </div>
          </div>
        </div>
        <div className="hint">
          Данные обновляются в 00:00 с наступлением понедельника. Используется
          время, установленное на вашем устройстве
        </div>
        <style jsx>{`
          .contact {
            position: absolute;
            top: 0;
            left: 0;
            padding: 12px;
          }

          .topHint {
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            padding: 12px;
            margin: 12px;
            line-height: 1.5;
            border-radius: 4px;
            background-color: #accaee;
            cursor: pointer;
          }

          .topHint > div {
            display: inline;
          }

          .topHintClose {
            float: right;
            color: #285473;
          }

          .chiliz {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            height: 100%;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: -1;
          }

          .chilizWrapper {
            display: flex;
            height: 60vh;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
          }

          .hint {
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            margin: 12px;
            color: #d4d4d4;
            font-weight: bold;
            text-align: center;
          }

          .title {
            text-transform: capitalize;
            font-size: 48px;
          }

          @media screen and (min-width: 800px) {
            .title {
              font-size: 64px;
            }
          }

          .subtitle {
            font-size: 18px;
          }
        `}</style>
      </div>
    </Main>
  )
}

Chiliz.getInitialProps = async ctx => {
  const isServer = typeof window === 'undefined'

  // get week data
  const getISOWeek = (await import('date-fns/getISOWeek')).default
  const date = new Date(
    isServer ? ctx.req.headers.date || new Date() : undefined
  )
  const odd = getISOWeek(date)
  const chiliz = odd ? 'Числитель' : 'Знаменатель'
  const setISODay = (await import('date-fns/setISODay')).default
  const format = (await import('date-fns/format')).default
  const ru = (await import('date-fns/locale/ru')).default
  const startDay = format(setISODay(date, 1), 'dd MMM', { locale: ru })
  const endDay = format(setISODay(date, 7), 'dd MMM', { locale: ru })

  // get isMobile
  const isMobile = (await import('is-mobile')).isMobile({
    ua: isServer ? ctx.req.headers['user-agent'] : undefined,
  })

  return { chiliz, isMobile, startDay, endDay }
}

export default Chiliz
