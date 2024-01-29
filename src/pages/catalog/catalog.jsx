import React from "react";
import './catalog.css';
import HomeSectionOne from "../../components/HomeSectionOne";
import HomeSectionTen from "../../components/HomeSectionTen";
import { PRODUCTS } from "../../PRODUCT";
import { Product, SALE } from "../shop/product";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
export default function Catalog() {
    
    const {products} = useContext(ShopContext);

  console.log(products)
  
  
    return(
        <div>
           {/* <HomeSectionOne /> */}
            <div className="catalog">
                <div className="filter">
                    <div className="categories">
                        <h1>Categories</h1>
                        <ul>
                            <li className="categoriesLi">Long sleeved tops <input type="checkbox" /> </li>
                            <li className="categoriesLi">Short sleeved tops <input type="checkbox" /> </li>
                            <li className="categoriesLi">Evening tops <input type="checkbox" /> </li>
                            <li className="categoriesLi">Sweater<input type="checkbox" /> </li>
                            <li className="categoriesLi">T-shirts <input type="checkbox" /> </li>
                            <li className="categoriesLi">Blouses<input type="checkbox" /> </li>
                        </ul>
                    </div>
                </div>
                <div className="categories meore">
                    <h1>Size</h1>
                    <ul>
                        <li className="categoriesLi">XXS<input type="checkbox" /> </li>
                        <li className="categoriesLi">XS<input type="checkbox" /> </li>
                        <li className="categoriesLi">S<input type="checkbox" /> </li>
                        <li className="categoriesLi">M<input type="checkbox" /> </li>
                        <li className="categoriesLi">L<input type="checkbox" /> </li>
                        <li className="categoriesLi">XL <input type="checkbox" /> </li>
                        <li className="categoriesLi">XXL<input type="checkbox" /> </li>
                    </ul>
                </div>
                <div className="categories meore">
                    <h1>Price</h1>
                    <ul>
                        <li className="categoriesLi">$100-200<input type="checkbox" /> </li>
                        <li className="categoriesLi">$200-300<input type="checkbox" /> </li>
                        <li className="categoriesLi">$300-400<input type="checkbox" /> </li>
                        <li className="categoriesLi">$400-500<input type="checkbox" /> </li>
                        <li className="categoriesLi">$500-600<input type="checkbox" /> </li>
                        <li className="categoriesLi">$600-700<input type="checkbox" /> </li>
                        <li className="categoriesLi">$700-800<input type="checkbox" /> </li>
                    </ul>
                </div>

                <div className="catalogProducts">   
                {products?.map((product) => (
                    <Product data={product} className="da"  />
                    ))}
                </div>
            </div>
            <div style={{backgroundColor: 'white'}}>
                <HomeSectionTen/>
            </div>
        </div>
    )
}