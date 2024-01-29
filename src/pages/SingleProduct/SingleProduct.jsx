import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../PRODUCT";
import { useLocation } from "react-router-dom";
import './SingleProduct.css'
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
export const SingleProduct = () => {
  const { products, addToCart } = useContext(ShopContext);
  const { id } = useParams();
  const location = useLocation();
  const currentRoute = location.pathname.split("/")[1];
  console.log(currentRoute);
  const currentProduct =
  //   currentRoute === "sales"
  //     ? SALES.find((el) => el.id == id)
  products?.find((el) => el.id == id);
  return (
    <div className="single">
      <div className="single-heading">
        <div className="single-one">
          <p className="hhhee">
            <p>Woman </p>  <p>Designers</p>  <p>{currentProduct?.product_name}</p>  <p>Clothing</p>  <b>{currentProduct?.product_description}</b>
          </p>
        </div>
        <div className="single-two">
          <h2 className="bolder">Woman</h2>
          <h1>Man</h1>
          <h1>Kids</h1>        
        </div>
      </div>
      {/* <div className="rag">
        <div className="ragwrapper"></div>
        <h1>new season</h1>
        <svg xmlns="http://www.w3.org/2000/svg" className="newss" width="173" height="18" viewBox="0 0 173 18" fill="none">
          <path d="M0.736328 1.48194L68.6255 1.48193L84.9935 16.6645L100.923 1.48193L172.736 1.48194" stroke="#A9A9A9"/>
        </svg>
      </div> */}
      <div className="single-product-page">
        <div className="single-image">
          <img className="currentProduct-image" src={currentProduct?.images[0].files} />
          <div className="wishlist-div">
            <button onClick={() => addToCart(currentProduct)}>
              Add to cart
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <mask id="mask0_93_3929" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                  <rect x="0.5" width="24" height="24" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_93_3929)">
                  <path d="M12.5 21L11.05 19.7C9.36667 18.1834 7.975 16.875 6.875 15.775C5.775 14.675 4.9 13.6875 4.25 12.8125C3.6 11.9375 3.14583 11.1334 2.8875 10.4C2.62917 9.66669 2.5 8.91669 2.5 8.15002C2.5 6.58336 3.025 5.27502 4.075 4.22502C5.125 3.17502 6.43333 2.65002 8 2.65002C8.86667 2.65002 9.69167 2.83336 10.475 3.20002C11.2583 3.56669 11.9333 4.08336 12.5 4.75002C13.0667 4.08336 13.7417 3.56669 14.525 3.20002C15.3083 2.83336 16.1333 2.65002 17 2.65002C18.5667 2.65002 19.875 3.17502 20.925 4.22502C21.975 5.27502 22.5 6.58336 22.5 8.15002C22.5 8.91669 22.3708 9.66669 22.1125 10.4C21.8542 11.1334 21.4 11.9375 20.75 12.8125C20.1 13.6875 19.225 14.675 18.125 15.775C17.025 16.875 15.6333 18.1834 13.95 19.7L12.5 21Z" fill="#1C1B1F"/>
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div className="single-info">
          <div className="prnmds">
            <h1 className="product-name">{currentProduct?.product_name}</h1>
            <p className="product-description">{currentProduct?.product_description}</p>
            <h1 className="product-price">GEL{currentProduct?.
prod_price
}</h1>
            <h2 className="VAT">VAT not included</h2>
          </div>
          <div className="size">
            <div className="size-chart">
              <h1>Choose your size</h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <mask id="mask0_73_2962" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                  <rect y="24" width="24" height="24" transform="rotate(-90 0 24)" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_73_2962)">
                  <path d="M22 15.975L20.225 17.75L12 9.52503L3.775 17.75L2 15.975L12 5.97503L22 15.975Z" fill="#A9A9A9"/>
                </g>
              </svg>
            </div>
            <div className="sizes">
              <h1>FR 34 / XXS - add to wishlist</h1>
              <h1>FR 36 / XS - add to wishlist</h1>
              <h1>FR 38 / S-M - last piece</h1>
              <h1>FR 40 / M - L - out of stock</h1>
              <h1>FR 42 / L - last piece</h1>
            </div>
          </div>
          <div className="shipping">
            <h1>Free shipping for you</h1>
            <p>We offer free shipping on all orders over $600</p>
          </div>
          <div className="sizee">
            <div className="size-chartt">
              <h1>Choose your size</h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <mask id="mask0_73_2962" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                  <rect y="24" width="24" height="24" transform="rotate(-90 0 24)" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_73_2962)">
                  <path d="M22 15.975L20.225 17.75L12 9.52503L3.775 17.75L2 15.975L12 5.97503L22 15.975Z" fill="#A9A9A9"/>
                </g>
              </svg>
            </div>
            <div className="sizess">
              <h1>FR 34 / XXS - add to wishlist</h1>
              <h1>FR 36 / XS - add to wishlist</h1>
              <h1>FR 38 / S-M - last piece</h1>
              <h1>FR 40 / M - L - out of stock</h1>
              <h1>FR 42 / L - last piece</h1>
            </div>
            <div className="uli">
              <ul>
                <li>More questions about this item</li>
                <li>See more Jacuemus</li>
                <li>See more tops</li>
                <li>See more long sleeved tops</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="similar-products">
         <div className="similar-heading">
          <div className="half"></div>
          <div className="similar-h"><h1>Similar products</h1></div>
          <div className="half"></div>
         </div>
      </div> */}
      <div className="bottom-wrapper"></div>
      <div className="bottom">
        <div className="bot">d</div>
        <div className="tom">f</div>
      </div>
    </div>
  );
};

export default SingleProduct;