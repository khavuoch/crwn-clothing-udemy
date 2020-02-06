import React from 'react';
import { connect } from 'react-redux';
import CustomButton from "./CustomButton";
import './CartDropdown.scss';
import CartItem from "./CartItem";
import {selectCartItems} from "../redux/cart/CartSelectors";
import {createStructuredSelector} from "reselect";
import { withRouter } from 'react-router-dom';
import {toggleCartHidden} from "../redux/cart/CartActions";

const CartDropdown = ({ cartItems, history, dispatch }) => ( //dispatch action shorthand
    <div className='CartDropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                    cartItems.map( cartItem => <CartItem key={cartItem.id} item={cartItem}/> )
                    :
                    <span className='empty-message'>Your Cart is empty</span>
            }
        </div>
        <CustomButton
            onClick={ () => {
                history.push('/checkout');
                dispatch(toggleCartHidden(true)); // dispatch action shorthand
            }}
        >
            GO TO CHECKOUT
        </CustomButton>
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

export default withRouter(connect(mapStateToProps)(CartDropdown));