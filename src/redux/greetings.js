import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://127.0.0.1:3000';

export const getRandomGreeting = createAsyncThunk(
  'greetings/random',
  async () => {
    const res = await fetch(`${API_URL}/random_greeting`);
    const data = await res.json();
    return data.greeting;
  },
);

const initialState = {
  greeting: '',
  error: '',
};

const greetingSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getRandomGreeting.fulfilled, (state, action) => ({
        ...state,
        greeting: action.payload,
        error: '',
      }))
      .addCase(getRandomGreeting.rejected, (state, action) => ({
        ...state,
        error: action.error.message,
      }));
  },
});

export default greetingSlice.reducer;
