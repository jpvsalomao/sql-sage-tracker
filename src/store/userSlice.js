import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  progress: {
    '1': 0.3,
    '2': 0.1,
    '3': 0,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Add reducers as needed
  },
});

export default userSlice.reducer;