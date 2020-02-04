import React from 'react';
import { connect } from 'react-redux';
import CustomButton from "./CustomButton";
import './CartDropdown.scss';
import CartItem from "./CartItem";
import {selectCartItems} from "../redux/cart/CartSelectors";

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

// OLD VERSION            // cart from redux state
// const mapStateToProps = ({cart: {cartItems}}) => ({
//     cartItems
// });

// NEW VERSION -- using 'reselect' selector
const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);