import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from "../redux/cart/CartActions";
import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';
import './CartIcon.scss';
import {selectCartItemsCount} from "../redux/cart/CartSelectors";
import {createStructuredSelector} from "reselect";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='CartIcon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);