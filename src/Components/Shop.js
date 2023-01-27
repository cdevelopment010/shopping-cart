import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import '../styles/shop.css'

const Shop = ({isMobile, addToBasket, removeFromBasket, basket}) => {

    const [hiddenComponents, setHiddenComponents] = useState(isMobile);
    const [hiddenAccessories, setHiddenAccessories] = useState(isMobile);
    const [data, setData] = useState([]);
    const [filterCurrent, setFilterCurrent] = useState('');

    const fetchData =  async(pFilter = null) => {
        let data = await fetch('https://raw.githubusercontent.com/cdevelopment010/shopping-cart/main/public/products.json')
                    .then(res => res.json())
                    .catch(err => console.log(err)); 
                    
        //filter data
        if (pFilter !== null && pFilter.length > 0) {
          data = data.filter(d => {return d.category === pFilter.toLowerCase()})
        }
        setData(data);
    }

    useEffect(() => {
      fetchData();
    }, [])

    useEffect(() => {
      fetchData(filterCurrent);
    }, [filterCurrent])

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

    const setFilter = ( e ) => {
      console.log(e.target.innerText)
      setFilterCurrent(e.target.innerText);
      fetchData(e.target.innerText);
    }


    return (
      <div className="shop-container">
        
        <div className="grid"> 
          <ul className="sidebar">
            <div>
              <h5 onClick={hideComp}>Components <i className={`fa-solid ${ hiddenComponents ? 'fa-caret-left': 'fa-caret-down'}`}></i></h5>
              <ul className={`${hiddenComponents ? 'hidden' : ''}`}>
                <li className={`filter-item ${filterCurrent==='Motherboard' ? 'filter-item-active' : ''}`} onClick={setFilter}>Motherboard <i className="ms-3 fa-regular fa-circle-xmark"></i></li>
                <li className={`filter-item ${filterCurrent==='CPU' ? 'filter-item-active' : ''}`} onClick={setFilter}>CPU <i className="ms-3 fa-regular fa-circle-xmark"></i></li>
                <li className={`filter-item ${filterCurrent==='Ram' ? 'filter-item-active' : ''}`} onClick={setFilter}>Ram <i className="ms-3 fa-regular fa-circle-xmark"></i></li>
                <li className={`filter-item ${filterCurrent==='Memory' ? 'filter-item-active' : ''}`} onClick={setFilter}>Storage <i className="ms-3 fa-regular fa-circle-xmark"></i></li>
                <li className={`filter-item ${filterCurrent==='Cooling' ? 'filter-item-active' : ''}`} onClick={setFilter}>Cooling <i className="ms-3 fa-regular fa-circle-xmark"></i></li>
                <li className={`filter-item ${filterCurrent==='Power Supply' ? 'filter-item-active' : ''}`} onClick={setFilter}>Power Supply <i className="ms-3 fa-regular fa-circle-xmark"></i></li>
                <li className={`filter-item ${filterCurrent==='GPU' ? 'filter-item-active' : ''}`} onClick={setFilter}>GPU <i className="ms-3 fa-regular fa-circle-xmark"></i></li>
              </ul>
            </div>
            <div>
              <h5 onClick={hideAccessories}>Accessories <i className={`fa-solid ${ hiddenAccessories ? 'fa-caret-left': 'fa-caret-down'}`}></i></h5>
              <ul className={`${hiddenAccessories ? 'hidden' : ''}`}>
                <li className={`filter-item ${filterCurrent==='Mouse' ? 'filter-item-active' : ''}`} onClick={setFilter}>Mouse <i className="ms-3 fa-regular fa-circle-xmark"></i></li>
                <li className={`filter-item ${filterCurrent==='Keyboards' ? 'filter-item-active' : ''}`} onClick={setFilter}>Keyboards <i className="ms-3 fa-regular fa-circle-xmark"></i></li>
                <li className={`filter-item ${filterCurrent==='Headsets' ? 'filter-item-active' : ''}`} onClick={setFilter}>Headsets <i className="ms-3 fa-regular fa-circle-xmark"></i></li>
                <li className={`filter-item ${filterCurrent==='Stickers' ? 'filter-item-active' : ''}`} onClick={setFilter}>Stickers <i className="ms-3 fa-regular fa-circle-xmark"></i></li>
              </ul>
            </div>
            <div>
              <h5>Pre-builds</h5>
            </div>
          </ul>
          <div className="items">
            {data.map((item, index) => {
              return (
              <ItemCard data={item} key={`item-${item.id}`} addToBasket={addToBasket} basket={basket} removeFromBasket={removeFromBasket}/>
              )

            })}
            
          </div>
        </div>

    
          

      </div>
    );
  }
  
  export default Shop;
  