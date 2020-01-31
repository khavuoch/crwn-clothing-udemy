import React from 'react';
import CustomButton from "./CustomButton";
import './CartDropdown.scss';

const CartDropdown = () => (
    <div className='CartDropdown'>
        <div className='cart-items' />
        <CustomButton>Go to checkout</CustomButton>
    </div>
);

export default CartDropdown;