import '../styles/globals.css'
import Head from 'next/head'
import Header from '../components/Header'
import Error from 'next/error'


function MyApp({ Component, pageProps }) {
  if (pageProps.error) {
    return <Error statusCode={pageProps.error.statusCode} title={pageProps.error.message} />;
  }

  return (
    <div className="app">
      <Head>
        <title>Learn.it</title>
        <meta name="description" content="Blogging app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
