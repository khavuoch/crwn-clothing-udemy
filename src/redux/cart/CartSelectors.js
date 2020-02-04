import { createSelector } from 'reselect';

const selectCart = state => state.cart; // input selector

export const selectCartItems = createSelector(
    // If there are more than 1 selectors,
    // These 2 arguments are ordered respectively to each other
    [selectCart], // array of input selector
    // a function that will return the value we want out of this selector
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
        0 // initial accumulator value
    )
);