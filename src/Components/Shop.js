import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import '../styles/shop.css'

const Shop = ({isMobile}) => {

    const [hiddenComponents, setHiddenComponents] = useState(isMobile);
    const [hiddenAccessories, setHiddenAccessories] = useState(isMobile);

    console.log(isMobile);
    
    useEffect(() => {
      setHiddenComponents(isMobile ? true : false)
      setHiddenAccessories(isMobile ? true : false)
    }, [isMobile])
    
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
              <h5 onClick={hideComp}>Components <i className={`fa-solid ${ hiddenComponents ? 'fa-caret-left': 'fa-caret-down'}`}></i></h5>
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
              <h5 onClick={hideAccessories}>Accessories <i className={`fa-solid ${ hiddenAccessories ? 'fa-caret-left': 'fa-caret-down'}`}></i></h5>
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
  