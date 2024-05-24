import { createSlice } from '@reduxjs/toolkit';
import type { FullUserData } from './types';

const initialState: FullUserData = {
  userData: undefined,
  tokensData: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.userData = action.payload;
    },
    //for logout or delete user
    clearUser(state) {
      state.userData = initialState.userData;
      state.tokensData = initialState.tokensData;
    },
    setTokens(state, action) {
      state.tokensData = action.payload;
    },
  },
});

export const { setTokens, setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
