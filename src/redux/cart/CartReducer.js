import { CartActionTypes } from './CartTypes'
import {addItemToCart} from "./CartUtils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state, // return the object with all of the state but with
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                // new array with all old array values and the additional item
                // the additional item will automatically appear in the very end of the array
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        default:
            return state;
    }
};

export default cartReducer;