import React from 'react';

import Product from '../Product/Product';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(props);
    const total = cart.reduce((total, prd)=>total + prd.price * prd.quantity, 0);

    let shipping = 12.99;
    if (total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if (total === 0){
        shipping = 0;
    }
    const tax = total * .15;
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Ordered: {cart.length} </p>
            <p>Product Price: {total}</p>
            <p>Shipping Price: {shipping}</p>
            <p>Tax: {tax}</p>
            <p>Total Price: {total + shipping + tax}</p>
            <br/>
            {
                props.children
            }
        </div>
    );
};

export default Cart;