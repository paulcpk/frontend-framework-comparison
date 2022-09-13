import Layout from '../components/Layout'
import 'bulma/css/bulma.min.css'
import '../styles/main.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
