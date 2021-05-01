import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    // console.log(props);
    const {name, quantity, img, key, price} = props.product;
    // const reviewItemStyle={
    //     borderBottom: '1px solid light gray',
    //     marginBottom: '5px',
    //     paddingBottom: '5px',
    // };
    return (
        <div  className="review-item">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p>Quantity:{quantity} </p>
                <p>Price: $ {price}</p>
                <br/>
                <button 
                className="main-button"
                // onClick={() => props.handleRemoveProduct(key)}
                onClick={() => props.handleRemoveProduct(key)}
                >Remove</button>
            </div>
            
        </div>
    );
};

export default ReviewItem;