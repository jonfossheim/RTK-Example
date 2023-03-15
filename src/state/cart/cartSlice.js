import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  // The name of our reducer
  name: 'cart',
  // The initial state of our reducer
  initialState,
  // These are the actions that will be made available
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.total = state.total + action.payload.price;
    },
    removeLast: (state) => {
      let index = state.items.length - 1;
      state.total = state.total - state.items[index].price;
      state.items.pop();
    },
  },
});

export const { addItem, removeLast } = cartSlice.actions;

export default cartSlice.reducer;
