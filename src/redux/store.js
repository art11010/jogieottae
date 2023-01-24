import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer';
import loadingReducer from './reducers/loadingReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    loading: loadingReducer,
  },
});

export default store;
