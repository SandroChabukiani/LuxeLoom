import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "../shop/shop.css";
import { Link } from "react-router-dom";
export const Product = (props) => {
  const { id, product_name, prod_price, images } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="cardd">
        <Link to={`/products/${id}`}>
          <img className="productImageDiv" src={images}></img>
        </Link>
          <div className="productInfo">
            <Link to={`/products/${id}`}>
              <div className="nd">
                <h1>{product_name}</h1>
              </div>
            </Link>
            <div className="ptc">
              <h1>${prod_price}</h1>
              <div class="card-button" onClick={() => addToCart(id)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                <mask id="mask0_92_1724" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="19">
                  <rect y="0.5625" width="18" height="18" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_92_1724)">
                  <path d="M9 16.3125L7.9125 15.3375C6.65 14.2 5.60625 13.2188 4.78125 12.3938C3.95625 11.5688 3.3 10.8282 2.8125 10.1719C2.325 9.51567 1.98438 8.91255 1.79063 8.36255C1.59688 7.81255 1.5 7.25005 1.5 6.67505C1.5 5.50005 1.89375 4.5188 2.68125 3.7313C3.46875 2.9438 4.45 2.55005 5.625 2.55005C6.275 2.55005 6.89375 2.68755 7.48125 2.96255C8.06875 3.23755 8.575 3.62505 9 4.12505C9.425 3.62505 9.93125 3.23755 10.5188 2.96255C11.1063 2.68755 11.725 2.55005 12.375 2.55005C13.55 2.55005 14.5313 2.9438 15.3188 3.7313C16.1063 4.5188 16.5 5.50005 16.5 6.67505C16.5 7.25005 16.4031 7.81255 16.2094 8.36255C16.0156 8.91255 15.675 9.51567 15.1875 10.1719C14.7 10.8282 14.0437 11.5688 13.2188 12.3938C12.3938 13.2188 11.35 14.2 10.0875 15.3375L9 16.3125ZM9 14.2875C10.2 13.2125 11.1875 12.2907 11.9625 11.5219C12.7375 10.7532 13.35 10.0844 13.8 9.51567C14.25 8.94692 14.5625 8.44067 14.7375 7.99692C14.9125 7.55317 15 7.11255 15 6.67505C15 5.92505 14.75 5.30005 14.25 4.80005C13.75 4.30005 13.125 4.05005 12.375 4.05005C11.7875 4.05005 11.2437 4.21567 10.7437 4.54692C10.2437 4.87817 9.9 5.30005 9.7125 5.81255H8.2875C8.1 5.30005 7.75625 4.87817 7.25625 4.54692C6.75625 4.21567 6.2125 4.05005 5.625 4.05005C4.875 4.05005 4.25 4.30005 3.75 4.80005C3.25 5.30005 3 5.92505 3 6.67505C3 7.11255 3.0875 7.55317 3.2625 7.99692C3.4375 8.44067 3.75 8.94692 4.2 9.51567C4.65 10.0844 5.2625 10.7532 6.0375 11.5219C6.8125 12.2907 7.8 13.2125 9 14.2875Z" fill="black"/>
                </g>
              </svg>
              {cartItemCount > 0 && <> ({cartItemCount})</>}
            </div>
          </div>
        </div>
      </div>

  );
};

