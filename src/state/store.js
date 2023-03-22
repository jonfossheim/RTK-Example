import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import cartReducer from './cart/cartSlice';
import themeReducer from './theme/themeSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    theme: themeReducer,
  },
});
