import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import '../styles/nav.css'

const Nav = ({ isMobile }) => {


    const [hiddenNav, setHiddenNav] = useState(isMobile);

    useEffect(() => {
      setHiddenNav(isMobile)
    }, [isMobile])

    const toggleNav = () => {
      setHiddenNav(!hiddenNav);
    }

    return (
      <div className="nav-container">
        <Link to="/" className="logo">
          <h2 >
            Computer <br></br> Store
          </h2>
        </Link>

        {isMobile?
          <i className="fa-solid fa-bars" onClick={toggleNav}></i>
          : null
        }

          <div className={`${isMobile ? "mobile-nav" : ""} ${hiddenNav ? "" : "active"}`}>
            <ul className={`nav`}>
                <li className="nav-items">
                    <Link to="/" className="nav-link" onClick={() => isMobile? setHiddenNav(true):null}>Home</Link>
                </li>
                <li className="nav-items">
                    <Link to="/shop" className="nav-link" onClick={() => isMobile? setHiddenNav(true):null}>Shop</Link>
                </li>
            </ul>
            <div className="icons">
              <div>
              <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <div>
                <Link to="/basket" className="inherit-color" onClick={() => isMobile? setHiddenNav(true):null}>
                  <i className="fa-solid fa-basket-shopping"></i>
                </Link>
              </div>
            </div>
          </div>

        
      </div>
    );
  }
  
  export default Nav;
  