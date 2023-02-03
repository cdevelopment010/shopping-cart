import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemCard from './ItemCard'; 

const ItemDetail =  ({addToBasket, removeFromBasket, basket}) => {
    const params = useParams(); 
    const [data, setData] = useState([]); 
    const [item, setItem] = useState([]); 
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [otherProducts, setOtherProducts] = useState([])

    const fetchData = async () => {
        let dataAll = await fetch()
                .then(res => res.json())
                .catch(err => [])
        setData(dataAll);
        let item = dataAll.filter(i => i.id === params.id); 
        setItem(item);

        // Filter for related products
        let rProducts = dataAll.filter(d => d.category === item.category );
        setRelatedProducts(rProducts); 

        // Randomly sort products 
        let oProducts = dataAll.filter(d => d.id !== item.id); 
        oProducts.sort(() => Math.random() > 0.5 ? 1 : -1); 
        oProducts.slice(0,9); // limit to 10
        setOtherProducts(oProducts); 


    }

    useEffect(()=> {
        fetchData();
    })

    return(
        <div>
            <h1>{item.name}</h1>
        
            {/* Add/remove from basket buttons and show count*/}

            {/* Image section */}
            <div>
                <div>
                    {/* main image */}
                    <img src="" alt="Main product" />
                </div>
                <div>
                    {/* smalled sub images */}
                    {item.img.map((im, ind) =>{
                        return <img key={`img-sm-${ind}`} src="" alt={`Product ${ind}`} className="" />
                    })}
                </div>
            </div>

            {/* Description */}

            {/* Related Products */}
            {/* want some sort of sideways scroll to show the products */}
            {/* Do I want to show the cards again? May be easiest */}
            {relatedProducts.length > 0 && relatedProducts.map((r,ind) => {
                return (
                    <ItemCard data={r} key={`item-${r.id}`} addToBasket={addToBasket} basket={basket} removeFromBasket={removeFromBasket}/>
                )
            })}

            {/* Other items */}
            {otherProducts.length > 0 && otherProducts.map((p,ind) => {
                return <span>p.name</span>
            })}


        </div>
    )
}

export default ItemDetail;