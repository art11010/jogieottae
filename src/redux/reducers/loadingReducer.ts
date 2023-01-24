import { createSlice } from '@reduxjs/toolkit';

interface LoadingState {
  display: boolean;
}

const initialState: LoadingState = {
  display: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    loadingDisplay: (state, action) => {
      state.display = action.payload;
    },
  },
});

export const loadingActions = loadingSlice.actions;
export default loadingSlice.reducer;
