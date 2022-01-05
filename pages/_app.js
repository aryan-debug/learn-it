import '../styles/globals.css'
import Head from 'next/head'
import Header from '../components/Header'



function MyApp({ Component, pageProps }) {
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
