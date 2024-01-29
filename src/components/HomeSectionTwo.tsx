import { Product } from "../pages/shop/product";
import { PRODUCTS } from "../PRODUCT";
const HomeSectionTwo = () => {
  return (
    <div className="HSTWOMainDIv">
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} className="da" />
        ))}
      </div>
    </div>
  );
};

export default HomeSectionTwo;

  {/* <div className="HSTWOHeader">
    <h3>Special offers</h3>
  </div>
  <svg
    className="arrowLeft"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
  >
    <mask
      id="mask0_104_4809"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="25"
    >
      <rect
        x="24"
        y="24.2478"
        width="24"
        height="24"
        transform="rotate(-180 24 24.2478)"
        fill="#D9D9D9"
      />
    </mask>
    <g mask="url(#mask0_104_4809)">
      <path
        d="M15.975 2.24783L17.75 4.02283L9.52503 12.2478L17.75 20.4728L15.975 22.2478L5.97503 12.2478L15.975 2.24783Z"
        fill="black"
      />
    </g>
  </svg>
  <div className="HSTWOCardDiv">
    <div className="HSTCard">
      <div className="HSTIMG">
        <div className="CardImg"></div>
      </div>
      <div className="ContentDiv">
        <h3>Balmain</h3>
        <h4>Stud-cuff blazer</h4>
        <h2>$ 452</h2>
      </div>
    </div>
  </div>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    className="arrowRight"
  >
    <mask
      id="mask0_104_4807"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="25"
      height="25"
    >
      <rect x="0.75" y="0.247803" width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_104_4807)">
      <path
        d="M8.775 22.2478L7 20.4728L15.225 12.2478L7 4.02277L8.775 2.24777L18.775 12.2478L8.775 22.2478Z"
        fill="black"
      />
    </g>
  </svg> */}