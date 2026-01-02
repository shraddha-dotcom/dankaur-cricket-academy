import { configureStore } from '@reduxjs/toolkit';
// Import your reducers here as you create them
// import exampleReducer from './features/exampleSlice';

export const store = configureStore({
  reducer: {
    // Add your reducers here
    // example: exampleReducer,
  },
});

