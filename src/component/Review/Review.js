import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif'

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, SetOrderPlaced] = useState(false);

    const handlePlaceOrder = () => {
        setCart([]);
        SetOrderPlaced(true)
        processOrder()

    }


    const handleRemoveProduct = (productKey) => {
        // console.log(productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() =>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        const cartProducts = productKeys.map( key => {
            const product = fakeData.find( pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })

        setCart(cartProducts);

    }, []);

    let thankyou;
    if (orderPlaced) 
        thankyou = <img src={happyImage} alt=""/>

    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    cart.map(pd => <ReviewItem 
                        product={pd}
                        handleRemoveProduct = {handleRemoveProduct}
                        
                        ></ReviewItem>)
                }
                {thankyou}
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className='main-button'>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;