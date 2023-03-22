import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: false,
  light: { primary: '#0984e3', secondary: '#a29bfe' },
  dark: { primary: '#d63031', secondary: '#0984e3' },
};

export const themeSlice = createSlice({
  // The name of our reducer
  name: 'theme',
  // The initial state of our reducer
  initialState,
  // These are the actions that will be made available
  reducers: {
    toggleTheme: (state) => {
      state.mode = !state.mode;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
