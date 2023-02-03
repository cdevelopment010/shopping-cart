import '../styles/itemCard.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
const ItemCard = ( {data, addToBasket, removeFromBasket, basket} ) => {

    const [counter, setCounter] = useState(0);


    useEffect(() => {

    }, [counter])
    useEffect(() => {
        getCurrentCount()
    }, [basket])

    const getCurrentCount = () => {
        let inBasketItem = [...basket.filter(b => b.id === data.id)];
        if (inBasketItem[0]?.hasOwnProperty('count') )  {
            setCounter(inBasketItem[0].count);
        }
    }

    const increment = () => {
        addToBasket(data);
        // setCounter(counter+ 1);
    }
    const decrement = () => {
        removeFromBasket(data);
        setCounter( counter-1 > 0 ? counter - 1 : 0);
    }

    return (
     <div className="item-card">

        <div className='img-container'>
            <img  src={data.img} alt={data.name}/>
            <div className="overlay">
                <Link to={`/shop/${data.id}`} addToBasket={addToBasket} removeFromBasket={removeFromBasket} basket={basket}>View Product Detail</Link>
            </div>
        </div>
        <div className='d-flex flex-row justify-content-evenly'>
            <span title={data.name}>test...</span>
            <span>{data.price}</span>
        </div>
        <div className='d-flex flex-row justify-content-center'>
            <i className="fa-solid fa-square-minus me-3 text-red pointer" onClick={decrement}></i>
            <span className='me-3'>{counter}</span>
            <i className="fa-solid fa-square-plus me-3 text-green pointer" onClick={increment}></i>
        </div>
        
     </div>   
    )
}

export default ItemCard;