import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shop-context";
import { PRODUCTS } from "../PRODUCT";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";


import "./cart.css";
export const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  const [totalAmount, setTotalAmount] = useState(cartItems.length < 1 ? 0 : cartItems.reduce((acc,item) => {return acc + item.prod_price }, 0));
  
  useEffect(() => {
    console.log(cartItems)
  },[cartItems])
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Basket</h1>
      </div>
      <div className="cart">
        {cartItems.length > 0 && cartItems.map((product) => {
            return <CartItem data={product} setTotalAmount={setTotalAmount} />;
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Total: {totalAmount} $</p>
          <button onClick={() => navigate("/products")}>Continue</button>
        </div>
      ) : (
        <h1 className="hh1">Your cart is empty</h1>
      )}
    </div>
  );
};