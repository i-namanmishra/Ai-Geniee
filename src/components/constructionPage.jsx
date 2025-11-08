import './constructionPage.css';
import { NavLink } from 'react-router-dom';
export const UnderConstruction = () => {
  return (
    <>
    <div className="under-construction">
      <div className="tools-container">
        <div className="hammer tool"></div>
        <div className="wrench tool"></div>
        <div className="screwdriver tool"></div>
      </div>
      <h1 className="construction-text">
        <span>UNDER</span>
        <span>CONSTRUCTION</span>
      </h1>
      <p className="coming-soon">Coming Soon!</p>
    <NavLink to="/">
        <button className='error-button'>Go Back</button>
    </NavLink>
    </div>
    </>
    
  );
};
