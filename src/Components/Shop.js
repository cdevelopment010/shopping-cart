import { useState } from "react";
import ItemCard from "./ItemCard";
import '../styles/shop.css'

const Shop = () => {

    const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width:768px").matches)
    const [hiddenComponents, setHiddenComponents] = useState(isMobile);
    const [hiddenAccessories, setHiddenAccessories] = useState(isMobile);
    
    
    const hideComp = () => {
      setHiddenAccessories(isMobile ? true : false)
      setHiddenComponents(!hiddenComponents)
    }
    
    const hideAccessories = () => { 
      setHiddenComponents(isMobile ? true : false)
      setHiddenAccessories(!hiddenAccessories)
    }


    return (
      <div className="shop-container">
        
        <div className="grid"> 
          <ul className="sidebar">
            <div>
              <h5 onClick={hideComp}>Components</h5>
              <ul className={`${hiddenComponents ? 'hidden' : ''}`}>
                <li>Motherboard</li>
                <li>CPU</li>
                <li>Ram</li>
                <li>Memory</li>
                <li>Cooling</li>
                <li>Power Supply</li>
                {/* <li></li> */}
              </ul>
            </div>
            <div>
              <h5 onClick={hideAccessories}>Accessories</h5>
              <ul className={`${hiddenAccessories ? 'hidden' : ''}`}>
                <li>Mouse</li>
                <li>Keyboards</li>
                <li>Headsets</li>
                <li>Stickers</li>
              </ul>
            </div>
            <div>
              <h5>Pre-builds</h5>
            </div>
          </ul>
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
  