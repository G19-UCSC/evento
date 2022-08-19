import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.css";
import {SessionProvider} from 'next-auth/react'
import { CartProvider, CartContext, CartDispatchContext } from '../context/productContext';

function MyApp({ Component, pageProps:{ session, ...pageProps} }) {
  return (
  <SessionProvider session= {session}>
    <CartProvider>
    <Component {...pageProps} />
    </CartProvider>
  </SessionProvider>
    )
}

export default MyApp
