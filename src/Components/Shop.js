import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";
import '../styles/shop.css'

const Shop = () => {
    return (
      <div className="shop-container">
        
        <div className="grid"> 
          <div className="sidebar">
            <span>Components</span>
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
  