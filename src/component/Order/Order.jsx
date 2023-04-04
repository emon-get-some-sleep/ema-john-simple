import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css';
const Order = () => {
    const carts = useLoaderData();
    console.log(carts);
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    carts.map(product => <ReviewItem key={product.id} product={product}></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={carts}></Cart>
            </div>
        </div>
    );
};

export default Order;