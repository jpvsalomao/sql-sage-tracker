import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    { id: '1', name: 'SQL Basics', description: 'Learn the fundamentals of SQL' },
    { id: '2', name: 'Advanced Queries', description: 'Master complex SQL queries' },
    { id: '3', name: 'Database Design', description: 'Learn how to design efficient databases' },
  ],
};

const tracksSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    // Add reducers as needed
  },
});

export default tracksSlice.reducer;