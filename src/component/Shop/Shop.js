import React, { useState } from 'react';
import fakeData from'../../fakeData';
import './Shop.css'
import Product from '../Product/Product'
import Cart from '../Cart/Cart';
const Shop = () => {
   const first20 = fakeData.slice(0,20);
   const [products, setProducts] = useState(first20);
   const [cart, setCart] = useState([]);
   
    const handleAddProduct = (product) =>{
        console.log('product added', product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="products-container">
                {
                   products.map(product => <Product 
                    handleAddProduct = {handleAddProduct}
                    product={product}>{products.name}
                    </Product>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>

            </div>
            
            
        </div>
    );
};

export default Shop;