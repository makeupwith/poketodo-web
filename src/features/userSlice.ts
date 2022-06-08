import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
		user: {
			user_id: "",
			display_name: ""
		}
	},
  reducers: {
    login: (state,action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = {user_id:"", display_name:""};
    }
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
