import { createContext, useEffect, useState } from "react";
import axios from "axios";


export  let CartContext = createContext()


export default function CartContextProvider({children}) {
  const [count, setCount] = useState(0)
  const [cartItems, setCartItems] = useState([])




  async function addToCart(product) {
    try {
      const existingProductIndex = cartItems.findIndex((item) => item.id === product.id);
  
      if (existingProductIndex !== -1) {

        const updatedCart = cartItems.map((item, index) =>
          index === existingProductIndex ? { ...item, quantity: item.quantity + 1 } : item
        );

        setCartItems(updatedCart);

      } else {
        setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);

        setCount((prev) => prev + 1);
      }
  
  
    } catch (error) {
      console.error(error);
    }
  }
  

  // async function increaseQuantity(productId) {
  //   setCartItems((prev) =>
  //     prev.map((item) =>
  //       item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
  //     )
  //   );
  // }
  
  // async function decreaseQuantity(productId) {
  //   setCartItems((prev) =>
  //     prev
  //       .map((item) =>
  //         item.id === productId && item.quantity > 1
  //           ? { ...item, quantity: item.quantity - 1 }: item
  //       )
  //       .filter((item) => item.quantity > 0) 
  //   );
  //   setCount((prev) => prev - 1);
  // }
  

  async function fetchCart() {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/carts");
      const products = data.products || [];
      setCartItems(products);
      setCount(products.length);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCart();
  }, []);



  return <CartContext.Provider value={{count, setCount, cartItems, addToCart}}>
    {children}
  </CartContext.Provider>
}