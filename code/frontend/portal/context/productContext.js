import React, { createContext, useState } from "react";

// Create two context:
// CartContext: to query the context state
// CartDispatchContext: to mutate the context state
const CartContext = createContext(undefined);
const CartDispatchContext = createContext(undefined);

// A "provider" is used to encapsulate only the
// components that needs the state in this context
function CartProvider({ children }) {
  const [CartDetails, setCartDetails] = useState([]);
  const [TotalPrice, setTotalPrice] = useState(0);
  const [TotalCount, setTotalCount] = useState(0);
  return (
    <CartContext.Provider value={[CartDetails,TotalPrice,TotalCount]}>
      <CartDispatchContext.Provider value={[setCartDetails, setTotalPrice,setTotalCount]}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext, CartDispatchContext };