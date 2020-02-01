import React from 'react';
import { connect } from 'react-redux';
import CustomButton from "./CustomButton";
import './CartDropdown.scss';
import CartItem from "./CartItem";

const CartDropdown = ({ cartItems }) => (
    <div className='CartDropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem =>
                    <CartItem key={cartItem.id} item={cartItem}/>
                )
            }
        </div>
        <CustomButton>Go to checkout</CustomButton>
    </div>
);
                        // cart from redux state
const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
});

export default connect(mapStateToProps)(CartDropdown);