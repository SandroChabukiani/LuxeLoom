import { Link } from "react-router-dom";

const HomeSectionSix = () => {
  return (
    <div className="HSSixCont">
      <div className="HSSixContentDiv">
        <h2>
          Find out Latest jewellery offers. From gucci to Saint Laurent our
          network of brands covers
        </h2>
        <button><Link to="/products">See more</Link></button>
      </div>
      <div className="HSSixImageDiv"></div>
    </div>
  );
};

export default HomeSectionSix;
