import { createSlice } from '@reduxjs/toolkit';

interface CartState {
  num: number;
}

const initialState: CartState = {
  num: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartIncrement: (state) => {
      state.num += 1;
    },
    cartDecrement: (state) => {
      state.num -= 1;
    },
    // incrementByAmount: (state, action) => {
    //   state.num += action.payload;
    // },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
