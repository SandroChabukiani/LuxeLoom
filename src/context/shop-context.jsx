import { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../PRODUCT";

export const ShopContext = createContext(null);



export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [products,setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await fetch('http://127.0.0.1:8000/api/v1/products/', 
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }})
        
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

       
        const result = await response.json();

      
        setProducts(result);
        setLoading(false);
      } catch (error) {
        
        setError(error);
        setLoading(false);
      }
    };

    
    fetchData();
  }, []); 

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart !== null) {
      try {
        setCartItems(JSON.parse(storedCart));
      } catch (error) {
        console.error("Error parsing cart data:", error);
      }
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    
    const isProductInCart = cartItems.some((cartItem) => cartItem.id === item.id);
  
    if (isProductInCart) {
      console.log("Product is already in the cart");
      return;
    }
  
   
    setCartItems((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };


 

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    products

    
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};