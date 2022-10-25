import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.css";
import 'mapbox-gl/dist/mapbox-gl.css';
import { CartProvider, CartContext, CartDispatchContext } from '../context/productContext';

function MyApp({ Component, pageProps:{ session, ...pageProps} }) {
  return (
    <CartProvider>
    <Component {...pageProps} />
    </CartProvider>
    )
}

export default MyApp
