// 1st param: all the existing items in the cart
// 2nd param: the item to add
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
    if(existingCartItem) {
        // return a new updated array
        return cartItems.map( cartItem =>
            cartItem.id === cartItemToAdd.id ?
                {...cartItem, quantity: cartItem.quantity + 1} // if item exist, update quantity
                :
                cartItem // else just return the original cart item as it is
        )
    }
    // if the item to add is not found inside the array,
    // return a new array with the existing items and also add in an object
    // which is equal to the cartItemToAdd and give it a new field of base quantity of 1
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
};

