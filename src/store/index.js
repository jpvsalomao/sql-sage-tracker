import { configureStore } from '@reduxjs/toolkit';
import tracksReducer from './tracksSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    tracks: tracksReducer,
    user: userReducer,
  },
});

export default store;