import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps:{ session, ...pageProps} }) {
  return (
    <Component {...pageProps} />
    )
}

export default MyApp
