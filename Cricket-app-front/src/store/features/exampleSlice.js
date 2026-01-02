import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Add your initial state here
  value: 0,
};

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    // Add your reducers here
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = exampleSlice.actions;

export default exampleSlice.reducer;

