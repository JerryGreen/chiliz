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
  </>
)

export default Main
