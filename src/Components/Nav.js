import { Link } from "react-router-dom";

import '../styles/nav.css'

const Nav = () => {
    return (
      <div className="nav-container">
        <Link to="/" className="logo">
          <h2 >
            Computer <br></br> Store
          </h2>
        </Link>
        <ul className="nav">
            <li className="nav-items">
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-items">
                <Link to="/shop" className="nav-link">Shop</Link>
            </li>
        </ul>
        <div className="icons">
          <div>
            SEARCH
          </div>
          <div>
            BASKET
          </div>
        </div>
      </div>
    );
  }
  
  export default Nav;
  