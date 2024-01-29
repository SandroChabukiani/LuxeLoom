import { Link } from "react-router-dom";

const HomeSectionFour = () => {
  return (
    <div className="HSFourCont">
      <div className="HSFourHeader">
        <div className="lineOne"></div>
        <h2>Luxury Brands</h2>
        <div className="lineTwo"></div>
      </div>
      <div className="HSFourContentDiv">
        <div className="HSFourMiniContent">
          <h2>Fist look: Dolce & Gabbana Power</h2>
          <h4>
            There is still time to discover special offers.From Gucci to Saint
            Laurent our network of brands covers
          </h4>
          <button><Link to="/products">Explore now</Link></button>
        </div>
        <div className="HSFourImageDiv">
          <div className="Image"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionFour;
