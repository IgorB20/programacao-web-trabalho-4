import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../components/Header'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    </Head>
    <Header />
    <Component {...pageProps} />
  </>
}

export default MyApp
