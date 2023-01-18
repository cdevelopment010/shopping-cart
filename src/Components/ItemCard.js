import '../styles/itemCard.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const ItemCard = () => {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter+ 1);
    }
    const decrement = () => {
        setCounter( counter-1 > 0 ? counter - 1 : 0);
    }

    return (
     <div className="item-card">

        <div className='img-container'>
            <img  src="" />
            <div className="overlay">
                <Link to="/shop/123" >View Product Detail</Link>
            </div>
        </div>
        <div className='d-flex flex-row justify-content-evenly'>
            <span>Item</span>
            <span>Price</span>
        </div>
        <div className='d-flex flex-row justify-content-center'>
            <i className="fa-solid fa-square-minus me-3" onClick={decrement}></i>
            <span className='me-3'>{counter}</span>
            <i className="fa-solid fa-square-plus me-3" onClick={increment}></i>
        </div>
        
     </div>   
    )
}

export default ItemCard;