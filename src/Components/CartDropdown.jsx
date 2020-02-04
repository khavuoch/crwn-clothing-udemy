import React from 'react';
import { connect } from 'react-redux';
import CustomButton from "./CustomButton";
import './CartDropdown.scss';
import CartItem from "./CartItem";
import {selectCartItems} from "../redux/cart/CartSelectors";
import {createStructuredSelector} from "reselect";

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

// VERSION 1           // cart from redux state
// const mapStateToProps = ({cart: {cartItems}}) => ({
//     cartItems
// });

// // VERSION 2 -- using 'reselect' selector
// const mapStateToProps = state => ({
//     cartItems: selectCartItems(state)
// });

// VERSION 3
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);