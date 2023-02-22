import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

const initialState = {
  value: 0,
  status: 'idle',
};


export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
   
    return response.data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
 
  reducers: {
    Login: (state,action) => {
    
      state.value = action.payload;
    },
    Logout: (state) => {
      state.user = null;
    },
  },
 
});

export const { Login , Logout } = userSlice.actions;

/* Selectors */
export const selectUser = (state) => state.user.user;



export default userSlice.reducer;
