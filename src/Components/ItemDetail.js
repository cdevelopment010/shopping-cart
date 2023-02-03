import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemCard from './ItemCard'; 
import '../styles/itemDetail.css'

const ItemDetail =  ({addToBasket, removeFromBasket, basket}) => {
    const params = useParams(); 
    const [data, setData] = useState([]); 
    const [item, setItem] = useState([]); 
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [otherProducts, setOtherProducts] = useState([])
    console.log(params.id)
    const fetchData = async () => {
        let dataAll = await fetch('https://raw.githubusercontent.com/cdevelopment010/shopping-cart/main/public/products.json')
                .then(res => res.json())
                .catch(err => [])
        setData(dataAll);
        let item = dataAll.filter(i => {return i.id == params.id})[0]; 
        setItem(item);

        // Filter for related products
        let rProducts = dataAll.filter(d => {return d.category === item.category });
        setRelatedProducts(rProducts); 

        // Randomly sort products 
        let oProducts = dataAll.filter(d => d.id !== item.id); 
        oProducts.sort(() => Math.random() > 0.5 ? 1 : -1); 
        let oProduct = oProducts.slice(0,10); // limit to 10
        setOtherProducts(oProduct); 



    }

    useEffect(()=> {
        fetchData();
    }, [])

    const scrollLeft = ( e ) => {
        let slider = e.target.parentElement.querySelector('.slider');
        console.log(slider.scrollWidth);
        console.log(slider.scrollLeft);
        let newScroll = slider.scrollLeft - 400 > 0 ? slider.scrollLeft - 400 : 0; 
        slider.scrollTo({left: newScroll, behavior: 'smooth'})
    }

    const scrollRight = ( e ) => {
        let slider = e.target.parentElement.querySelector('.slider');
        console.log(slider.scrollWidth);
        console.log(slider.scrollLeft);
        let newScroll = slider.scrollLeft + 400 < slider.scrollWidth ? slider.scrollLeft + 400 : slider.scrollWidth; 
        slider.scrollTo({left: newScroll, behavior: 'smooth'})

    }


    return(
        <div className="item-detail">
            <h1>{item.name}</h1>
        
            {/* Add/remove from basket buttons and show count*/}

            {/* Image section */}
            <div>
                <div>
                    {/* main image */}
                    <img src={item.img} alt="Main product" />
                </div>
                <div>
                    {/* smalled sub images */}
                    {/* {item.img.map((im, ind) =>{
                        return <img key={`img-sm-${ind}`} src="" alt={`Product ${ind}`} className="" />
                    })} */}
                </div>
            </div>

            {/* Description */}

            {/* Related Products */}
            <h3 className="mt-5 mb-2">Related Products</h3>
            <div className="slider-container mb-5">
                <i className="fa-solid fa-caret-left fa-3x" onClick={scrollLeft}></i>
                <div className="slider">
                    {relatedProducts.length > 0 && relatedProducts.map((r,ind) => {
                        return (
                            <ItemCard data={r} key={`item-${r.id}`} addToBasket={addToBasket} basket={basket} removeFromBasket={removeFromBasket}/>
                        )
                    })}
                </div>
                <i className="fa-solid fa-caret-right fa-3x" onClick={scrollRight}></i>
            </div>

            {/* Other items */}
            <h3 className="mt-5 mb-2">Products Customers Also Viewed</h3>
            <div className="slider-container  mb-5">
                <i className="fa-solid fa-caret-left fa-3x" onClick={scrollLeft}></i>
                <div className="slider">
                    {otherProducts.length > 0 && otherProducts.map((p,ind) => {
                        return (
                            <ItemCard data={p} key={`item-${p.id}`} addToBasket={addToBasket} basket={basket} removeFromBasket={removeFromBasket}/>
                        )
                    })}
                </div>
                <i className="fa-solid fa-caret-right fa-3x" onClick={scrollRight}></i>
            </div>


        </div>
    )
}

export default ItemDetail;