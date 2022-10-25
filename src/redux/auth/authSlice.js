import { createSlice } from '@reduxjs/toolkit';

import { authThunks } from 'redux/auth';

const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetching: false,
  error: null,
  history: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: {
    [authThunks.authSignup.pending](state) {
      state.isFetching = true;
    },
    [authThunks.authSignup.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isFetching = false;
      state.error = null;
    },
    [authThunks.authSignup.rejected](state, { payload }) {
      state.isFetching = false;
      state.error = payload;
    },
    [authThunks.authLogin.pending](state) {
      state.isFetching = true;
    },
    [authThunks.authLogin.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isFetching = false;
      state.error = null;
    },
    [authThunks.authLogin.rejected](state, { payload }) {
      state.isFetching = false;
      state.error = payload;
    },
    [authThunks.authLogOut.pending](state) {
      state.isFetching = true;
    },
    [authThunks.authLogOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isFetching = false;
      state.error = null;
    },
    [authThunks.authLogOut.rejected](state, { payload }) {
      state.isFetching = false;
      state.error = payload;
    },
    [authThunks.authRefresh.pending](state) {
      state.isFetching = true;
    },
    [authThunks.authRefresh.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.isFetching = false;
      state.error = null;
    },
    [authThunks.authRefresh.rejected](state, { payload }) {
      state.isFetching = false;
      state.error = payload;
    },
  },
});

export const authReducer = authSlice.reducer;
