import React from "react";
import { PRODUCTS } from "../../PRODUCT";
import { Product } from "./product";
import "./shop.css";
// import { Height } from "@mui/icons-material";
export const Shop = () => {
  return (
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} className="da" />
        ))}
      </div>
  );
};