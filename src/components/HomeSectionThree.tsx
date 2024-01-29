import { Link } from "react-router-dom";

const HomeSectionThree = () => {
    return (
      <div className="HSTBC">
        <div className="HSTHeader">
          <h3>Special Offers</h3>
        </div>
        <div className="HeaderSectionTwoDiv">
          <div className="BagImage"></div>
          <div className="HeaderSectionTwoContent">
            <h3 >Last-minute inspiration</h3>
            <h3 className="HSTH3">
              There is still time to discover special offers.From gucci to Saint
              Laurent our network of brands covers
            </h3>
            <button><Link to="/products">Explore now</Link></button>
          </div>
        </div>
      </div>
    );
  };
  
  export default HomeSectionThree;