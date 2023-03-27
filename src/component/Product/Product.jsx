import React from 'react';
import './Product.css';
import ShoppingCartFillIcon from 'remixicon-react/ShoppingCartFillIcon';
const Product = (props) => {
    
    const {id,img, name, price, seller, quantity, ratings} = props.product;

    const handleAddToCart = props.handleAddToCart;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p>Price : ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Stars</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>Add To Cart <ShoppingCartFillIcon style={{color: 'orange'}} /></button>
        </div>
    );
};

export default Product;