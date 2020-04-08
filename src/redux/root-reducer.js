import { combineReducers } from 'redux';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'; // actual local storage of the browser
import userReducer from "./user/UserReducer";
import cartReducer from "./cart/CartReducer";
import directoryReducer from "./directory/DirectoryReducer";
import shopReducer from "./shop/ShopReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] // string name of any of the reducers that we're gonna use
};

const rootReducer = combineReducers ({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);