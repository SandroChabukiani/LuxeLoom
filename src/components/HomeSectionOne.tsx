import { Link } from 'react-router-dom';
import './HomeSectionsCss.css'
const HomeSectionOne = () => {
  return (
    <div className="womanBackground">
      <div className="homeSectionOne">
        <h1>what's new?</h1>
        <h1 className="hsoh1">Explore new trends of Chanel</h1>
        <div className="homeSectionOneDiv">
          <Link to='/products'>
            <h1>See more</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionOne;
