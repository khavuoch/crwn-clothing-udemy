import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from "../redux/cart/CartActions";
import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';
import './CartIcon.scss';
import {selectCartItemsCount} from "../redux/cart/CartSelectors";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='CartIcon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state) // pass in the whole reducer state
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);