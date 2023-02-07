import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemCard from './ItemCard'; 
import '../styles/itemDetail.css'

const ItemDetail =  ({addToBasket, removeFromBasket, basket}) => {
    const params = useParams(); 
    const [item, setItem] = useState([]); 
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [otherProducts, setOtherProducts] = useState([])
    const [counter, setCounter] = useState(0)

    const fetchData = async () => {
        let dataAll = await fetch('https://raw.githubusercontent.com/cdevelopment010/shopping-cart/main/public/products.json')
                .then(res => res.json())
                .catch(err => [])
        let item = dataAll.filter(i => {return i.id === params.id*1})[0]; 
        setItem(item);

        // Filter for related products
        let rProducts = dataAll.filter(d => {return d.category === item.category && d.id !== item.id});
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

    useEffect(() => {
        getCurrentCount()
    }, [basket])

    const getCurrentCount = () => {
        let inBasketItem = [...basket.filter(b => b.id === item.id)];
        if (inBasketItem[0]?.hasOwnProperty('count') )  {
            setCounter(inBasketItem[0].count);
        }
    }

    const scrollLeft = ( e ) => {
        let slider = e.target.parentElement.querySelector('.slider');
        let newScroll = slider.scrollLeft - 400 > 0 ? slider.scrollLeft - 400 : 0; 
        slider.scrollTo({left: newScroll, behavior: 'smooth'})
    }

    const scrollRight = ( e ) => {
        let slider = e.target.parentElement.querySelector('.slider');
        let newScroll = slider.scrollLeft + 400 < slider.scrollWidth ? slider.scrollLeft + 400 : slider.scrollWidth; 
        slider.scrollTo({left: newScroll, behavior: 'smooth'})

    }

    const increment = () => {
        addToBasket(item);
        // setCounter(counter+ 1);
    }
    const decrement = () => {
        removeFromBasket(item);
        setCounter( counter-1 > 0 ? counter - 1 : 0);
    }

    return(
        <div className="item-detail">
            <div>
                <h1>{item.name}</h1>
            
                {/* Add/remove from basket buttons and show count*/}
                <div className='d-flex flex-row justify-content-center h-auto'>
                    <i className="fa-solid fa-square-minus me-3 text-red pointer" onClick={decrement}></i>
                    <span className='me-3'>{counter}</span>
                    <i className="fa-solid fa-square-plus me-3 text-green pointer" onClick={increment}></i>
                </div>
            </div>
            {/* Image section */}
            <div>
                <div>
                    {/* main image */}
                    <img src={item.img[0].link} alt={item.img[0].title} title={item.img[0].title} />
                </div>
                <div>
                    {/* smalled sub images */}
                    {item.img.map((im, ind) =>{
                        return <img key={`img-sm-${ind}`} src={im.link} alt={`Product ${ind}`} className="small-img" />
                    })}
                </div>
            </div>

            {/* Description */}

            {/* Related Products */}
            <div>
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
            </div>

            {/* Other items */}
            <div>
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


        </div>
    )
}

export default ItemDetail;