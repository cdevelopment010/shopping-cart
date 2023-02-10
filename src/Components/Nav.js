import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ItemCard from './ItemCard';


import '../styles/nav.css'

const Nav = ({ isMobile, basketCount, basket, addToBasket, removeFromBasket }) => {


    const nav = useNavigate(); 
    const [hiddenNav, setHiddenNav] = useState(isMobile);
    const [desktopBasketVisible, setDesktopBasketVisible] = useState(false);
    const [total, setTotal] = useState(0); 
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
      setHiddenNav(isMobile)
    }, [isMobile])

    useEffect(()=> {
      calculateTotal()
    },[basket])

    useEffect(() => {
      if (searchTerm.length === 0) {
        nav('/shop')
      } else {
        nav('/search/'+searchTerm);
      }
    }, [searchTerm])

    const toggleNav = () => {
      setHiddenNav(!hiddenNav);
    }

    const desktopBasket = () => {
      setDesktopBasketVisible(!desktopBasketVisible);
    }

    const calculateTotal = () => {
      let sum = basket.reduce((prev, curr) => {
        return prev + (curr.price * curr.count); 
      }, 0)
      console.log("sum", sum); 
      setTotal(sum); 
    }

    const updateSearch = (e) => {
      setSearchTerm(e.target.value);
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
              <div className="d-flex flex-row flex-nowrap align-item-center">
                <input id="search" type="text" value={searchTerm} onChange={updateSearch} />
                <i className="fa-solid fa-magnifying-glass" onClick={() => document.getElementById("search").focus()}></i>
              </div>
              <div>
                {isMobile &&
                  <Link to="/basket" className="inherit-color" onClick={() => isMobile? setHiddenNav(true):null}>
                    <i className="fa-solid fa-basket-shopping position-relative">
                      <span className="basket-count">{basketCount}</span>
                    </i>
                  </Link>
                }

                {!isMobile && 
                  <i className="fa-solid fa-basket-shopping position-relative" onClick={desktopBasket}>
                    <span className="basket-count">{basketCount}</span>
                  </i>

                }
              </div>
            </div>
          </div>

          <div className={`desktop-basket ${desktopBasketVisible ? 'visible' : 'invisible'} ${isMobile ? 'd-none' : ''}`}>
                <i className={`fa-solid fa-times ${desktopBasketVisible ? '' : 'd-none' }`} onClick={desktopBasket}></i>
                <div className="grid mt-5 mb-5 justify-content-center gap-3">
                  <h3 className="text-center">Basket</h3>
                  {basket.length > 0 && basket.map((b,ind) => {
                    return <ItemCard data={b} key={`item-${b.id}`} addToBasket={addToBasket} basket={basket} removeFromBasket={removeFromBasket}/>
                  })}

                  {/* Total */}
                  <div className="total mb-2">
                    Total: £<span>{total}</span>
                  </div>

                  {/* checkout button */}
                  <Link to="/checkout" onClick={desktopBasket}><button>Checkout</button></Link>
                </div>
          </div>
        
      </div>
    );
  }
  
  export default Nav;
  