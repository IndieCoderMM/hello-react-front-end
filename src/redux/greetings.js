import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = '/';

export const getRandomGreeting = createAsyncThunk(
  'greetings/random',
  async () => {
    const res = await fetch(API_URL + '/random_greeting');
    const data = res.json();
    console.log(data);
    return data.greeting;
  },
);

const initialState = {
  greeting: '',
};

const greetingSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers(builder) {
    builder.addCase(getRandomGreeting.fulfilled, (state, action) => {
      state.greeting = action.payload;
    });
  },
});

export default greetingSlice.reducer;
