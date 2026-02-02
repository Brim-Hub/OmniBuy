import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/Slices/counterSlice';
import userReducer from '../redux/Slices/userSlice';
import cartReducer from '../redux/Slices/cartSlice';
import productReducer from '../redux/Slices/productSlice';
import wishlistReducer from '../redux/Slices/wishlistSlice';
import orderReducer from '../redux/Slices/orderSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    product: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    order: orderReducer,
  },
});
