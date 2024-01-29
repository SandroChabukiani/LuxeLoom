import './cart.css'
import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from '../context/shop-context';
export const CartItem = (props) => {
    const {  data, setTotalAmount } = props;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
      setTotalAmount(prev => (prev + quantity * data?.prod_price))
    
      
    }, [quantity])

    const handleDecrease = () => {
      if(quantity === 1) {
        return
      } {
        setQuantity(prev => prev - 1)
      }
    }

    const handleIncrease = () => {
      if(quantity === 8) {
        return
      } {
        setQuantity(prev => prev + 1)
      }
    }
    
    return (
        <div className="cartItem">
          <img src={data.images[0].files} />
          <div className="description">
            <p>
              <b>{data.product_name}</b>
            </p>
            <p> ფასი: {data.prod_price} ლარი</p>
            <div className="countHandler">
              <button onClick={handleDecrease}> - </button>
              <p></p>
              <button onClick={handleIncrease}> + </button>
            </div>
          </div>
        </div>
      );
}