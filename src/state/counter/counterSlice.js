import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  tracker: 0,
};

export const counterSlice = createSlice({
  // The name of our reducer
  name: 'counter',
  // The initial state of our reducer
  initialState,
  // These are the actions that will be made available
  reducers: {
    increment: (state) => {
      state.count += 1;
      state.tracker += 1;
    },
    decrement: (state) => {
      state.count -= 1;
      state.tracker += 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
