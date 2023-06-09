import React from 'react';
import './ReviewItem.css';
import DeleteBin2FillIcon from 'remixicon-react/DeleteBin2FillIcon';
const ReviewItem = ({product, handleRemoveFromCart}) => {
    const {_id, img, name , price , quantity} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price: <span className='orange-text'>${price}</span></p>
                <p>Order Quantity: <span className='orange-text'>{quantity}</span></p>
            </div>
            <button onClick={() => handleRemoveFromCart(_id)} className='btn-delete'>
                <DeleteBin2FillIcon className='delete-icon' />
            </button>
        </div>
    );
};

export default ReviewItem;