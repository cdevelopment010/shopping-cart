import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import '../styles/shop.css'

const Shop = ({isMobile}) => {

    const [hiddenComponents, setHiddenComponents] = useState(isMobile);
    const [hiddenAccessories, setHiddenAccessories] = useState(isMobile);
    const [data, setData] = useState([])

    const fetchData =  async() => {
        const data = await fetch('https://raw.githubusercontent.com/cdevelopment010/shopping-cart/main/public/products.json')
                    .then(res => res.json())
                    .catch(err => console.log(err)); 
                    
        // console.log(data);
        setData(data);
    }

    useEffect(() => {
      fetchData();
    }, [])

    useEffect(() => {
      setHiddenComponents(isMobile ? true : false)
      setHiddenAccessories(isMobile ? true : false)
    }, [isMobile])
    
    const hideComp = () => {
      console.log(isMobile ? true : false)
      setHiddenAccessories(isMobile ? true : hiddenAccessories)
      setHiddenComponents(!hiddenComponents)
    }
    
    const hideAccessories = () => { 
      console.log(isMobile ? true : false)
      setHiddenComponents(isMobile ? true : hiddenComponents)
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
            {data.map((item, index) => {
              return (
              <ItemCard data={item} key={`item-${index}`}/>
              )

            })}
            
          </div>
        </div>

    
          

      </div>
    );
  }
  
  export default Shop;
  