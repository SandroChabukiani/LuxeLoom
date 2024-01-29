import FirstImage from '../images/section7imageOne.png'
import SecondImage from '../images/section7image2.png'
import { Link } from 'react-router-dom';
const HomeSectionSeven = () => {
  return (
    <div className="HSScont">
      <div className="HSSheaderDiv">
        <h3 className='HSSh31'>Shoes and boots from Farfetch</h3>
        <h3 className='HSSh32'>
          Explore newest trends from Jimmy Choo to Saint Laurent our network of
          brands covers
        </h3>
      </div>
      <Link to="/products">
        <div className="HSS_IMAGES_DIV">
            <img  className="img" src={FirstImage} alt="#" />
            <img src={SecondImage} alt="#" />
        </div>
      </Link>
    </div>
  );
};

export default HomeSectionSeven;
