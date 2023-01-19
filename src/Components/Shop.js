import { useState } from "react";
import ItemCard from "./ItemCard";
import '../styles/shop.css'

const Shop = () => {

    const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width:768px").matches)
    const [hiddenComponents, setHiddencomponents] = useState(isMobile);
    
    
    const hideComp = () => {
      setHiddencomponents(!hiddenComponents)
    }


    return (
      <div className="shop-container">
        
        <div className="grid"> 
          <div className="sidebar">
            <div>
              <span onClick={hideComp}>Components</span>
              <ul className={`${hiddenComponents ? 'hidden' : ''}`}>
                <li>Motherboard</li>
                <li>Motherboard</li>
                <li>Motherboard</li>
                <li>Motherboard</li>
                <li>Motherboard</li>
              </ul>
            </div>
            <span>Accessories</span>
            <span>Pre-builds</span>
          </div>
          <div className="items">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            
          </div>
        </div>

    
          

      </div>
    );
  }
  
  export default Shop;
  