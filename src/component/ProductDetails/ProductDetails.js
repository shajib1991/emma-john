import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    const {key} = useParams()
    const product = fakeData.find(pd => pd.key === key);
    console.log(product);
    
    return (
        <div>
            <h1>  Product Details Coming Soon {key} </h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
        
    );
};

export default ProductDetails;