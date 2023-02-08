import ItemCard from "./ItemCard";
import '../styles/checkout.css'; 
import { useEffect, useState } from "react";

const Checkout = ( {title = "Checkout", basket, addToBasket, removeFromBasket} ) => {

    const [total, setTotal] = useState(0); 


    useEffect(()=> {
      calculateTotal();
    },[basket]);

    const calculateTotal = () => {
      let sum = basket.reduce((prev, curr) => {
        return prev + (curr.price * curr.count); 
      }, 0)
      console.log("sum", sum); 
      setTotal(sum); 
    }

    return (
      <div className="checkout mb-5">
        <h2 className="text-center mb-5 mt-5">{title}</h2>

        {basket.length === 0 && 
          <div className="text-center">Please go to the shop to add some products!</div>
        }

        <div className="items mb-5">
          {basket.map((b,index) => {
            return <ItemCard data={b} key={`item-${b.id}`} addToBasket={addToBasket} basket={basket} removeFromBasket={removeFromBasket}/>
          })}
        </div>

        <div className="total">
          Total: £<span>{total}</span>
        </div>
      </div>
    );
  }
  
  export default Checkout;
  