import { useState } from "react";
import { CartContext } from "./CartContext";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const isProductAlreadyInCart = cart.find((item) => item.id === product.id);
    if (isProductAlreadyInCart) {
      alert("Product already in cart");
      return;
    }
    setCart([...cart, product]);
  };

  const value = {
    cart,
    addToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
