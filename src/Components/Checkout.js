import ItemCard from "./ItemCard";

const Checkout = ( {title = "checkout", basket, addToBasket, removeFromBasket} ) => {
    return (
      <div>
        {title}

        {basket.length === 0 && 
          <div>Please go to the shop to add some products!</div>
        }

        {basket.map((b,index) => {
          return <ItemCard data={b} key={`item-${b.id}`} addToBasket={addToBasket} basket={basket} removeFromBasket={removeFromBasket}/>
        })}
      </div>
    );
  }
  
  export default Checkout;
  