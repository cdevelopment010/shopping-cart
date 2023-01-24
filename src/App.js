import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import './styles/variables.css';
import './styles/index.css';

import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Shop from "./Components/Shop";
import ItemDetail from "./Components/ItemDetail";
import Checkout from "./Components/Checkout";
import Footer from "./Components/Footer";

const App = () => {

  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width:768px").matches)
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const [basketCount, setBasketCount] = useState(0); 
  const [basket, setBasket] = useState([]); 



  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
    setIsMobile(window.matchMedia("(max-width:768px").matches);
  }

  useEffect(()=> {
    const timeout = setTimeout(() => {
      resizeWindow(); 
      window.addEventListener("resize", resizeWindow); 

    }, 500)
    return () => {
      window.removeEventListener("resize", resizeWindow)
      clearTimeout(timeout);
    }
  }, [windowWidth, windowHeight])

  return (
    <div className="grid grid-main">
      <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
        <Nav isMobile={isMobile}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop isMobile={isMobile}/>} />
          <Route path="/shop/:id" element={<ItemDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/basket" element={<Checkout title="basket"/>} />

        </Routes>
        <Footer />
      </BrowserRouter>      
    </div>
  );
}

export default App;
