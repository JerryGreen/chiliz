import Head from 'next/head'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Main = ({ children }: Props) => (
  <>
    <Head>
      <title>Числитель или Знаменатель</title>
      <meta
        name="Description"
        content="Показывает, чётная или нечётная неделя, числитель или знаменатель. Полезно для студентов универов, колледжей"
      />
      <meta name="theme-color" content="#000000" />
    </Head>
    <style global jsx>
      {`
        body {
          margin: 0;
          padding: 0;
          font-family: Tahoma, Geneva, sans-serif;
          font-size: 12px;
        }

        p {
          margin: 0;
        }
      `}
    </style>
    {children}
    <img
      src="https://mc.yandex.ru/watch/23308813"
      style={{
        position: 'absolute',
        left: '-9999px',
      }}
      alt=""
    />
    <script async src="/g-analytics.js"></script>
    <script async src="/y-metrika.js"></script>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-137515166-1"
    ></script>
  </>
)

export default Main
