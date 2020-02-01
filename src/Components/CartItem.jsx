import React from 'react';
import './CartItem.scss';
                        // we want these off of the item
const CartItem = ({item: {imageUrl, price, name, quantity}}) => (
    <div className='CartItem'>
        <img src={imageUrl} alt='item' />
        <div className='CartItem-details'>
            <span className='name'>{name}</span>
            <span className='price'>
                {quantity} x ${price}
            </span>
        </div>
    </div>
);

export default CartItem;