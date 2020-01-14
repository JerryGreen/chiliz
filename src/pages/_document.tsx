import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="ru">
        <Head>
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
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
        </body>
      </Html>
    )
  }
}

export default MyDocument
